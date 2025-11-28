export default function BackgroundBlobs() {
  return (
    <div className="fixed -z-10 inset-0 pointer-events-none">
      {/* Cyan Blob */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-cyan-500/20 blur-[140px] rounded-full animate-pulse" />

      {/* Purple Blob */}
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/20 blur-[160px] rounded-full animate-[float_10s_ease-in-out_infinite]" />

      {/* Soft white glow */}
      <div className="absolute right-1/2 top-1/3 w-72 h-72 bg-white/5 blur-[120px] rounded-full" />
    </div>
  );
}
