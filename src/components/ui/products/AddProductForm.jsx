import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import Input from "./Input";
import Select from "./Select";
import Button from "./Button";
import ToggleButton from "./ToggleButton";
import ProductImageUploader from "./ProductImageUploader";
import ProductTagsInput from "./ProductTagsInput";

function ProductForm({ mode = "create", initialData, onSubmit, onCancel }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }, // <-- errors object, auto-filled by react-hook-form when validation fails
  } = useForm();

  const [images, setImages] = useState([]);
  const [deletedImageIds, setDeletedImageIds] = useState([]);
  // deletedImageIds -> tracks which EXISTING images the user removed, so we can tell
  // the backend to delete them via the "deleteImages" field (edit mode only)

  const [tags, setTags] = useState([]);
  const [featured, setFeatured] = useState(false);
  const [isActive, setIsActive] = useState(false);
  // renamed from "active" -> "isActive" to match the API's exact field name

  const [imageError, setImageError] = useState("");
  // separate error just for images, since react-hook-form doesn't track our custom image state

  useEffect(() => {
    if (initialData) {
      reset({
        name: initialData.name,
        shortDescription: initialData.shortDescription,
        description: initialData.description,
        price: initialData.price,
        discountPrice: initialData.discountPrice,
        stock: initialData.stock,
        sku: initialData.sku,
        category: initialData.category,
        subcategory: initialData.subcategory,
        brand: initialData.brand,
      });
      setImages(initialData.images || []);
      setTags(initialData.tags || []);
      setFeatured(initialData.featured || false);
      setIsActive(initialData.isActive || false);
    }
  }, [initialData, reset]);

  // Called by ProductImageUploader whenever an EXISTING image (a string URL/id) gets removed
  const handleRemoveExistingImage = (imageId) => {
    setDeletedImageIds([...deletedImageIds, imageId]);
  };

  const submitHandler = (data) => {
    // Manual check for images, since react-hook-form only manages register()'d fields
    if (images.length === 0) {
      setImageError("At least one image is required");
      return; // stop here, don't submit
    }
    if (images.length > 5) {
      setImageError("Maximum 5 images allowed");
      return;
    }
    setImageError(""); // clear any previous error if we got this far

    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      // skip empty optional fields so we don't send blank strings for things like discountPrice
      if (value !== "" && value !== undefined) {
        formData.append(key, value);
      }
    });

    // tags must be ONE JSON string, not repeated keys — e.g. '["wireless","audio"]'
    formData.append("tags", JSON.stringify(tags));

    formData.append("featured", featured);
    formData.append("isActive", isActive);

    // only append NEW files (objects with .file); existing URL strings are already saved
    images.forEach((img) => {
      if (img.file) formData.append("images", img.file);
    });

    // only relevant in edit mode — tells backend which existing images to delete
    if (mode === "edit" && deletedImageIds.length > 0) {
      formData.append("deleteImages", JSON.stringify(deletedImageIds));
    }

    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div>
        <ProductImageUploader
          images={images}
          onChange={setImages}
          onRemoveExisting={handleRemoveExistingImage}
        />
        {imageError && <p className="text-red-500 text-xs mt-2">{imageError}</p>}
      </div>

      <div className="flex flex-col gap-4">
        <Input
          label="Product Name"
          placeholder="Example"
          error={errors.name?.message}
          {...register("name", { required: "Product name is required" })}
        />

        <Input
          label="Short Description"
          placeholder="Minimum 10 characters"
          error={errors.shortDescription?.message}
          {...register("shortDescription", {
            required: "Short description is required",
            minLength: { value: 10, message: "Minimum 10 characters" },
          })}
        />

        <Input
          label="Description"
          textarea
          placeholder="Minimum 20 characters"
          error={errors.description?.message}
          {...register("description", {
            required: "Description is required",
            minLength: { value: 20, message: "Minimum 20 characters" },
          })}
        />

        <div className="grid grid-cols-2 gap-3">
          <Input
            label="Price"
            type="number"
            step="0.01"
            error={errors.price?.message}
            {...register("price", {
              required: "Price is required",
              min: { value: 0.01, message: "Price must be greater than 0" },
              // exact wording matches the toast you showed me
            })}
          />
          <Input label="Discount Price" type="number" step="0.01" {...register("discountPrice")} />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Input
            label="Stock"
            type="number"
            error={errors.stock?.message}
            {...register("stock", {
              required: "Stock is required",
              min: { value: 0, message: "Stock cannot be negative" },
            })}
          />
          <Input label="SKU" {...register("sku")} />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Select
            label="Category"
            options={["electronics", "clothing", "home", "toys"]}
            error={errors.category?.message}
            {...register("category", { required: "Category is required" })}
          />
          <Input label="Subcategory" {...register("subcategory")} />
        </div>

        <Input label="Brand" {...register("brand")} />

        <ProductTagsInput tags={tags} onChange={setTags} />

        <div className="flex gap-3">
          <ToggleButton label="Featured" active={featured} onClick={() => setFeatured(!featured)} />
          <ToggleButton label="Active" active={isActive} onClick={() => setIsActive(!isActive)} />
        </div>
      </div>

      <div className="col-span-full flex justify-end gap-3 pt-4 border-t dark:border-slate-700">
        <Button variant="secondary" type="button" onClick={onCancel}>Cancel</Button>
        <Button variant="primary" type="submit">
          {mode === "create" ? "Create Product" : "Save Changes"}
        </Button>
      </div>
    </form>
  );
}

export default ProductForm;