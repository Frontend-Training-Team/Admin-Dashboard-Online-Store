function SkeletonBlock({ className = "h-48 w-full rounded-2xl" }) {
  return (
    <div
      className={`bg-gray-200 dark:bg-gray-800 animate-pulse ${className}`}
    />
  );
}

export default SkeletonBlock;