const TestimonialSkeleton = () => {
  return (
    <div
      data-testid="testimonial-skeleton"
      className="h-full rounded-lg border bg-card p-6 shadow-sm"
    >
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="h-6 w-24 rounded bg-gray-200" />
          <div className="h-4 w-32 rounded bg-gray-200" />
        </div>
        <div className="space-y-2">
          <div className="h-4 w-full rounded bg-gray-200" />
          <div className="h-4 w-3/4 rounded bg-gray-200" />
          <div className="h-4 w-1/2 rounded bg-gray-200" />
        </div>
        <div className="flex justify-between pt-4">
          <div className="h-4 w-20 rounded bg-gray-200" />
          <div className="h-4 w-24 rounded bg-gray-200" />
        </div>
      </div>
    </div>
  );
};

export default TestimonialSkeleton;
