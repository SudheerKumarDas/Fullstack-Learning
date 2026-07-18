export default function Textarea({ label, error, className = "", ...props }) {
  return (
    <div className="space-y-1">
      {label && <label className="text-sm font-medium">{label}</label>}

      <textarea
        className={`
          w-full
          rounded-lg
          border
          p-3
          outline-none
          transition
          resize-none
          focus:border-blue-500
          focus:ring-2
          focus:ring-blue-200
          ${className}
        `}
        {...props}
      />

      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}
