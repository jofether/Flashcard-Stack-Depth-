export default function StatsPanel({ correct, incorrect, marked }) {
  return (
    <div className="mt-10 flex gap-8 text-white">
      <div className="text-center transform hover:scale-110 transition">
        {/* [BUG - TYPO] 'text-4xll' is invalid Tailwind class - should be 'text-4xl' */}
        {/* [FIX] Change 'text-4xll' to 'text-4xl' */}
        <p className="text-4xll font-bold text-green-400 mb-1">{correct}</p>
        <p className="text-sm text-emerald-200 font-semibold">Correct</p>
      </div>
      <div className="text-center border-l border-r border-emerald-600 px-8 transform hover:scale-110 transition">
        <p className="text-4xl font-bold text-red-400 mb-1">{incorrect}</p>
        <p className="text-sm text-emerald-200 font-semibold">Incorrect</p>
      </div>
      <div className="text-center transform hover:scale-110 transition">
        <p className="text-4xl font-bold text-yellow-400 mb-1">{marked}</p>
        <p className="text-sm text-emerald-200 font-semibold">Marked</p>
      </div>
    </div>
  );
}
