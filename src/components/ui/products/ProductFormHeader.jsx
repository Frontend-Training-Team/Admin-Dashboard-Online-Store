import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import bannerImage from "../../../assets/images/img5.jpg";

function ProductFormHeader({ mode = "create" }) {
  const navigate = useNavigate();

  const content =
    mode === "create"
      ? {
          title: "Launch a polished product entry",
          description: "Add products with validation, image previews, multi-upload support and smooth UX.",
        }
      : {
          title: "Update and refine the product entry",
          description: "Review the current product data, add new images, remove existing ones, and save your updates safely.",
        };

  return (
    <div
      className="relative rounded-2xl overflow-hidden p-6 sm:p-8 bg-cover bg-center border border-brand-200/60 dark:border-white/[0.06] shadow-xs"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-white/85 dark:bg-[#0B0C0F]/85 backdrop-blur-[2px]" />

      <div className="relative z-10 space-y-2.5">
        <button
          type="button"
          onClick={() => navigate("/products")}
          className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#C98156] dark:text-[#F0CDAF] uppercase hover:underline cursor-pointer w-fit"
        >
          <ArrowLeft size={16} />
          <span>Back to Products</span>
        </button>

        <h1 className="text-2xl sm:text-3xl font-serif font-bold text-brand-950 dark:text-[#F5F1EA]">
          {content.title}
        </h1>
        <p className="text-sm text-brand-700/80 dark:text-[#8A8378] max-w-2xl leading-relaxed">
          {content.description}
        </p>
      </div>
    </div>
  );
}

export default ProductFormHeader;
