export default function Loading() {
  return (
    <div className="fixed inset-0 bg-[#090F13] flex items-center justify-center z-50">
      <div className="relative">
        {/* Outer ring */}
        <div className="w-16 h-16 rounded-full border-2 border-[#153B47] animate-pulse" />

        {/* Inner spinner */}
        <div className="absolute top-0 left-0 w-16 h-16">
          <div className="w-full h-full rounded-full border-t-2 border-[#3D608E] animate-spin" />
        </div>

        {/* Center dot */}
        <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-[#3D608E] rounded-full transform -translate-x-1/2 -translate-y-1/2">
          <div className="absolute inset-0 bg-[#3D608E] rounded-full animate-ping" />
        </div>

        {/* Loading text */}
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-[#30535F] text-sm font-mono tracking-wider">
          LOADING
        </div>
      </div>
    </div>
  )
}

