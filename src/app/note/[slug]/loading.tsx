export default function Loading() {
  return (
    <div className="min-h-screen bg-cream">
      <div className="max-w-3xl mx-auto px-6 pt-32 pb-20">
        <div className="animate-pulse space-y-6">
          <div className="h-4 w-24 bg-charcoal/5 rounded" />
          <div className="h-10 w-3/4 bg-charcoal/5 rounded" />
          <div className="h-3 w-32 bg-charcoal/5 rounded" />
          <div className="w-10 h-px bg-gold/20 my-8" />
          <div className="space-y-3">
            <div className="h-3 w-full bg-charcoal/5 rounded" />
            <div className="h-3 w-5/6 bg-charcoal/5 rounded" />
            <div className="h-3 w-4/6 bg-charcoal/5 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}
