export default function Header({ title, subtitle, currentIndex, totalCards, progressPercent }) {
  return (
    <div className="w-full max-w-2xl mb-8">
      <div className="text-center mb-4">
        <h1 className="text-white text-5xl font-bold mb-2 tracking-tight from-emerald-8">
          {title}
        </h1>
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
