export default function Header({ title, subtitle, currentIndex, totalCards, progressPercent }) {
  return (
    <div className="w-full max-w-2xl mb-8">
      <div className="text-center mb-4">
        {/* [BUG - TYPO] 'from-emerald-8' is not a valid Tailwind color - should be 'from-emerald-800' */}
        {/* [FIX] Change 'from-emerald-8' to 'from-emerald-800' */}
        <h1 className="text-white text-5xl font-bold mb-2 tracking-tight from-emerald-8">
          {title}
        </h1>
        {/* [BUG - COLOR_CONTRAST] Subtitle is nearly invisible - same color text and background */}
        {/* [FIX] Change second text-emerald-200 to text-white or text-emerald-50 for visibility */}
        <p className="text-emerald-200 text-base text-emerald-200">{subtitle}</p>
      </div>
      
      {/* Progress Bar */}
      <div className="bg-emerald-700 rounded-full h-3 overflow-hidden shadow-md">
        <div
          className="bg-gradient-to-r from-green-400 via-emerald-400 to-blue-400 h-full transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
      <div className="flex justify-between items-center mt-3">
        <p className="text-emerald-200 text-sm font-semibold">
          Card {currentIndex + 1} of {totalCards}
        </p>
        <p className="text-emerald-300 text-sm font-bold">
          {Math.round(progressPercent)}%
        </p>
      </div>
    </div>
  );
}
