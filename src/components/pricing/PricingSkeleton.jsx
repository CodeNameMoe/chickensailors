const PricingSkeleton = () => (
  <div className="h-full rounded-lg border bg-card p-6 shadow-sm">
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="h-7 w-32 rounded bg-gray-200"></div>
        <div className="h-4 w-40 rounded bg-gray-200"></div>
      </div>
      <div className="h-8 w-20 rounded bg-gray-200"></div>
      <div className="space-y-3">
        <div className="h-4 w-full rounded bg-gray-200"></div>
        <div className="h-4 w-full rounded bg-gray-200"></div>
        <div className="h-4 w-3/4 rounded bg-gray-200"></div>
        <div className="h-4 w-1/2 rounded bg-gray-200"></div>
      </div>
      <div className="mt-4 h-10 w-full rounded bg-gray-200"></div>
    </div>
  </div>
);

export default PricingSkeleton;
