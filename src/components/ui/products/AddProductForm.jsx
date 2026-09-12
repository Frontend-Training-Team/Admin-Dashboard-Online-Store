import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Input from "./Input";
import Select from "./Select";
import Button from "./Button";
import ToggleButton from "./ToggleButton";
import ProductImageUploader from "./ProductImageUploader";
import ProductTagsInput from "./ProductTagsInput";

function ProductForm({ mode = "create", initialData, onSubmit, onCancel, showCard=true }) {
  const onInvalid = (errors) => { 
      const firstErrorField = Object.keys(errors)[0];
      const firstErrorMessage = errors[firstErrorField]?.message;
      if (firstErrorMessage) {
        toast.error(firstErrorMessage);
      }
  };
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }, 
  } = useForm();

  const getImageKey = (img) => img.public_id || img.previewUrl;

  const [images, setImages] = useState([]);
  const [markedKeys, setMarkedKeys] = useState([]);

  const imageDisplayStyle = mode === "create" ? "instant" : showCard ? "overlay" : "pill";

  const [tags, setTags] = useState([]);
  const [featured, setFeatured] = useState(false);
  const [isActive, setIsActive] = useState(false);
  
  const [imageError, setImageError] = useState("");
  
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


  const toggleMark = (key) => {
  setMarkedKeys((prev) => (prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]));
};

  const submitHandler = (data) => {

    const remainingCount = images.filter((img) => {
    const key = img.public_id || img.previewUrl; // stable identity per image
    return !markedKeys.includes(key); // keep it if it's NOT marked for removal
  }).length;

  if (remainingCount === 0) {
    setImageError("At least one image is required");
    toast.error("At least one image is required");
    return;
  }
  
    setImageError(""); 

    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
    
      if (value !== "" && value !== undefined) {
        formData.append(key, value);
      }
    });

    tags.forEach((tag) => formData.append("tags", tag));

    const deletedImageIds = [];

    formData.append("featured", featured);
    formData.append("isActive", isActive);

   
    images.forEach((img) => {
      const key = img.public_id || img.previewUrl;
      const marked = markedKeys.includes(key);

      if (img.file) {
        if (!marked) formData.append("images", img.file);
      } else {
      if (marked) deletedImageIds.push(img.public_id);
      }  
    });


    if (mode === "edit") {
  formData.append("deletedImages", JSON.stringify(deletedImageIds));
  }

    onSubmit(formData);
  };

    const fieldsContent = (
  <>
    <div>
      <ProductImageUploader
        images={images}
        onChange={setImages}
        markedKeys={markedKeys}
        onToggleMark={toggleMark}
        displayStyle={imageDisplayStyle}
        compact={!showCard}
      />
      {imageError && <p className="text-red-500 text-xs mt-2">{imageError}</p>}
    </div>

    <div className={`flex flex-col ${showCard ? "gap-4" : "gap-2"} `}>
      <Input label="Product Name" placeholder="Example" error={errors.name?.message} compact={!showCard} {...register("name", { required: "Product name is required" })} />
      <Input label="Short Description" placeholder="Minimum 10 characters" error={errors.shortDescription?.message} compact={!showCard} {...register("shortDescription", { required: "Short description is required", minLength: { value: 10, message: "Minimum 10 characters" } })} />
      <Input label="Description" textarea placeholder="Minimum 20 characters" error={errors.description?.message} compact={!showCard} {...register("description", { required: "Description is required", minLength: { value: 20, message: "Minimum 20 characters" } })} />

      {showCard ? (
  <>
    <div className="grid grid-cols-2 gap-3">
      <Input label="Price" type="number" step="0.1" error={errors.price?.message} {...register("price", { required: "Price is required", min: { value: 0.01, message: "Price must be greater than 0" } })} />
      <Input label="Discount Price" type="number" step="0.01" {...register("discountPrice")} />
    </div>

    <div className="grid grid-cols-2 gap-3">
      <Input label="Stock" type="number" error={errors.stock?.message} {...register("stock", { required: "Stock is required", min: { value: 0, message: "Stock cannot be negative" } })} />
      <Input label="SKU" {...register("sku")} />
    </div>

    <div className="grid grid-cols-2 gap-3 text-sm">
      <Select label="Category" options={["electronics", "phones", "fashion", "home", "beauty", "sports"]} error={errors.category?.message} {...register("category", { required: "Category is required" })} />
      <Input label="Subcategory" {...register("subcategory")} />
    </div>
  </>
) : (
  <>
    <div className="grid grid-cols-3 gap-3">
      <Input label="Price" type="number" step="0.1" error={errors.price?.message} compact {...register("price", { required: "Price is required", min: { value: 0.01, message: "Price must be greater than 0" } })} />
      <Input label="Discount Price" type="number" step="0.01" compact {...register("discountPrice")} />
      <Input label="Stock" type="number" error={errors.stock?.message} compact {...register("stock", { required: "Stock is required", min: { value: 0, message: "Stock cannot be negative" } })} />
    </div>

    <div className="grid grid-cols-3 gap-3 text-sm">
      <Input label="SKU" compact {...register("sku")} />
      <Select label="Category" options={["electronics", "phones", "fashion", "home", "beauty", "sports"]} error={errors.category?.message} compact {...register("category", { required: "Category is required" })} />
      <Input label="Subcategory" compact {...register("subcategory")} />
    </div>
  </>
)}

      <Input label="Brand" compact={!showCard} {...register("brand")} />

      <ProductTagsInput tags={tags} onChange={setTags} compact={!showCard} />

      <div className="flex gap-3">
        <ToggleButton label="Featured" active={featured} onClick={() => setFeatured(!featured)} circular={!showCard} />
        <ToggleButton label="Active" active={isActive} onClick={() => setIsActive(!isActive)} circular={!showCard} />
      </div>
    </div>
  </>
);

const buttonsContent = (
  <>
    <Button variant="secondary" type="button" onClick={onCancel}>Cancel</Button>
    <Button variant="primary" type="submit">
      {mode === "create" ? "Create Product" : "Save Changes"}
    </Button>
  </>
);

if (!showCard) {
  return (
    <form onSubmit={handleSubmit(submitHandler, onInvalid)} className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto grid grid-cols-1 lg:grid-cols-2 gap-3">
        {fieldsContent}
      </div>
      <div className="shrink-0 flex justify-end gap-3 pt-2 mt-2 border-t border-gray-200 dark:border-slate-700">
        {buttonsContent}
      </div>
    </form>
  );
}

return (
  <div className=" dark:shadow-xl rounded-2xl bg-white dark:bg-[#0000] p-6 shadow-sm">
    <form onSubmit={handleSubmit(submitHandler, onInvalid)} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {fieldsContent}
      <div className="col-span-full flex justify-end gap-3 pt-4">
        {buttonsContent}
      </div>
    </form>
  </div>
);
}

export default ProductForm;