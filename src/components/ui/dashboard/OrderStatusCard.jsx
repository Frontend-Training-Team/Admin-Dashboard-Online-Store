import React from 'react';

function OrderStatusCard({ label, count, textColor, bgStyle }) {
  return (
    <div className={`p-3.5 sm:p-5 rounded-xl text-left border ${bgStyle}`}>
      
      <p className={`text-xs sm:text-[14px] font-light ${textColor} dark:text-brand-300 tracking-wider`}>
        {label}
      </p>

      <p className={`text-2xl sm:text-3xl font-bold mt-0.5 sm:mt-1 ${textColor}`}>
        {count}
      </p>

    </div>
  );
}

export default OrderStatusCard;