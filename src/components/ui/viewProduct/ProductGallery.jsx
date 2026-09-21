import { useState } from 'react';

const ProductGallery = ({ images = [], productName = 'Product' }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const activeImage = images[selectedImage] || images[0] || {};

  return (
    <section className="flex h-full flex-col gap-4" aria-label={`${productName} gallery`}>
      <div className="flex min-h-[340px] flex-1 items-center justify-center overflow-hidden rounded-2xl border border-brand-200/60 bg-brand-50/20 dark:border-white/[0.06] dark:bg-coal-700">
        <img
          src={activeImage?.url || ''}
          alt={`${productName} view ${selectedImage + 1}`}
          className="h-full w-full object-cover max-h-[460px]"
        />
      </div>

      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-3">
          {images.map((image, index) => (
            <button
              key={`${image}-${index}`}
              type="button"
              onClick={() => setSelectedImage(index)}
              aria-label={`View ${productName} image ${index + 1}`}
              aria-pressed={selectedImage === index}
              className={`h-20 overflow-hidden rounded-xl border-2 transition-all cursor-pointer ${
                selectedImage === index
                  ? 'border-[#C98156] shadow-xs'
                  : 'border-transparent hover:border-brand-300 dark:hover:border-white/20'
              }`}
            >
              <img
                src={image.url}
                alt=""
                aria-hidden="true"
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </section>
  );
};

export default ProductGallery;
