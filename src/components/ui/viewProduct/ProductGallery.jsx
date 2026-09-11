import { useState } from 'react';

const ProductGallery = ({ images = [], productName = 'Product' }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const activeImage = images[selectedImage];

  return (
    <section className="flex h-full flex-col gap-4" aria-label={`${productName} gallery`}>
      <div className="flex min-h-70 flex-1 items-center justify-center overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 dark:border-brand-900/40 dark:bg-brand-950/20">
        <img
          src={activeImage}
          alt={`${productName} view ${selectedImage + 1}`}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="grid grid-cols-4 gap-3">
        {images.map((image, index) => (
          <button
            key={`${image}-${index}`}
            type="button"
            onClick={() => setSelectedImage(index)}
            aria-label={`View ${productName} image ${index + 1}`}
            aria-pressed={selectedImage === index}
            className={`h-20 overflow-hidden rounded-xl border-2 bg-gray-50 transition-colors dark:bg-brand-950/20 ${
              selectedImage === index
                ? 'border-[#8E4726]'
                : 'border-transparent hover:border-brand-300'
            }`}
          >
            <img
              src={image}
              alt=""
              aria-hidden="true"
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>
    </section>
  );
};

export default ProductGallery;
