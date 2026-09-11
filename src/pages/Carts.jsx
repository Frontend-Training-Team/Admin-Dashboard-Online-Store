export default function Carts() {
  return (<>
    <div className="p-6 rounded-2xl border border-brand-200/60 dark:border-brand-900/40 bg-surface-cardLight dark:bg-surface-cardDark shadow-sm mb-5">
      <span className="text-[14px] font-Regular tracking-widest text-brand-500 uppercase">
        Carts
      </span>
      <h1 className="text-3xl font-bold text-black dark:text-brand-50 mt-1">
        Cart overview
      </h1>
      <p className="text-[14px] text-gray-400 dark:text-brand-300 mt-1">
        All active carts returned from the API are rendered here with their latest item details.
      </p>
    </div>
    {/* API */}
    <div className="w-1/2 border-brand-700 border-2 rounded-3xl  border-dotted p-5">
      <p className="text-[14px] text-gray-400 dark:text-brand-300 mt-1">
        No carts returned from the API.
      </p>
    </div>
  </>);
}