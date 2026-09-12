function SkeletonLine({ width = "w-full", height = "h-4", className = "" }) {
  return (
    <div
      className={`${width} ${height} bg-gray-200 dark:bg-gray-800 rounded-md animate-pulse ${className}`}
    />
  );
}

export default SkeletonLine;