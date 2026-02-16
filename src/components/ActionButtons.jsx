export default function ActionButtons({ onIncorrect, onMark, onCorrect, isMarked }) {
  // [BUG - LAYOUT] flex-col stacks buttons vertically instead of horizontally
  // [FIX] Change 'flex-col' to 'flex-row' or remove flex-col entirely
  return (
    <div className="flex flex-col gap-6">
      <button
        onClick={onIncorrect}
        className="w-20 h-20 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-3xl shadow-lg hover:bg-red-200 hover:shadow-xl transition transform hover:scale-110 active:scale-95"
        title="Mark as incorrect"
      >
        ✕
      </button>
      <button
        onClick={onMark}
        className={`w-20 h-20 rounded-full flex items-center justify-center text-3xl shadow-lg transition transform hover:scale-110 active:scale-95 font-bold ${
          isMarked
            ? 'bg-yellow-200 text-yellow-600 hover:bg-yellow-300'
            : 'bg-indigo-100 text-indigo-600 hover:bg-indigo-200'
        }`}
        title="Mark for review"
      >
        ⭐
      </button>
      <button
        onClick={onCorrect}
        // [BUG - SPACING] Negative margin -mt-16 causes overlap with previous button
        // [FIX] Remove -mt-16, use default spacing or mt-0
        className="w-20 h-20 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-3xl shadow-lg hover:bg-green-200 hover:shadow-xl transition transform hover:scale-110 active:scale-95 -mt-16"
        title="Mark as correct"
      >
        ✓
      </button>
    </div>
  );
}
