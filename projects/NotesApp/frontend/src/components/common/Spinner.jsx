export default function Spinner({ size = "md" }) {
  const sizes = {
    sm: "h-5 w-5",
    md: "h-8 w-8",
    lg: "h-12 w-12",
  };

  return (
    <div className="flex justify-center py-10">
      <div
        className={`
          ${sizes[size]}
          animate-spin
          rounded-full
          border-4
          border-blue-600
          border-t-transparent
        `}
      />
    </div>
  );
}
