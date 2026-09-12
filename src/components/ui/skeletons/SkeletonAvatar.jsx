function SkeletonAvatar({ size = "h-10 w-10", shape = "rounded-xl", className = "" }) {
  return (
    <div
      className={`${size} ${shape} bg-gray-200 dark:bg-gray-800 animate-pulse shrink-0 ${className}`}
    />
  );
}

export default SkeletonAvatar;