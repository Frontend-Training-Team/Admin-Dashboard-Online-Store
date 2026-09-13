import { ArrowLeft, LayoutGrid } from "lucide-react";
import { useNavigate } from "react-router-dom";
import bannerImage from "../../../assets/images/img5.jpg";

function ProductFormHeader({ mode = "create", statusLabel, statusDescription }) {
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
    <div className="flex flex-col gap-4 mb-6 ">

      <div
        className="relative rounded-lg p-2 overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className="w-200 h-24 m-2.5 text-[#8E4726]">
                <button
                onClick={() => navigate("/products")}
                className="flex items-center  text-sm  hover:text-[#582d1a] w-fit"
                >
                <div className="mr-2"><ArrowLeft size={16} /></div>
                BACK TO PRODUCTS
                </button>


                <h1 className="text-2xl font-bold mt-1 font-inter ">{content.title}</h1>
                <p className="text-sm  mt-2">{content.description}</p>

        </div>
      </div>
    </div>
  );
}

export default ProductFormHeader;