export default function ResultsScreen({ stats, markedCount, onReset, topicName }) {
  const total = stats.correct + stats.incorrect;
  const percentage = total > 0 ? ((stats.correct / total) * 100).toFixed(1) : 0;

  const getPerformanceMessage = () => {
    if (percentage >= 90) return "Outstanding! Keep it up! 🌟";
    if (percentage >= 80) return "Great job! You're doing well! 👏";
    if (percentage >= 70) return "Good progress! Keep practicing! 💪";
    if (percentage >= 60) return "Nice effort! Review difficult topics! 📚";
    return "Keep studying! You'll improve! 🚀";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-800 to-emerald-900 flex flex-col items-center justify-center font-sans overflow-hidden p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-lg w-full mx-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Study Complete!</h2>
          <p className="text-emerald-600 font-semibold">{topicName}</p>
        </div>

        <div className="space-y-6">
          {/* Accuracy Circle */}
          <div className="flex justify-center">
            <div className="relative w-32 h-32">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-400 to-blue-500 flex items-center justify-center shadow-lg">
                <div className="absolute inset-1 bg-white rounded-full flex flex-col items-center justify-center">
                  <p className="text-4xl font-bold text-emerald-600">{percentage}%</p>
                  <p className="text-xs text-gray-600 font-semibold">Accuracy</p>
                </div>
              </div>
            </div>
          </div>

          {/* Performance Message */}
          <p className="text-center text-lg font-semibold text-gray-800">{getPerformanceMessage()}</p>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-green-50 rounded-xl p-4 text-center border-2 border-green-200">
              <p className="text-green-600 font-bold text-3xl">{stats.correct}</p>
              <p className="text-gray-600 text-xs font-semibold mt-1">Correct</p>
            </div>
            <div className="bg-red-50 rounded-xl p-4 text-center border-2 border-red-200">
              <p className="text-red-600 font-bold text-3xl">{stats.incorrect}</p>
              <p className="text-gray-600 text-xs font-semibold mt-1">Incorrect</p>
            </div>
            <div className="bg-yellow-50 rounded-xl p-4 text-center border-2 border-yellow-200">
              <p className="text-yellow-600 font-bold text-3xl">{markedCount}</p>
              <p className="text-gray-600 text-xs font-semibold mt-1">Marked</p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="bg-blue-50 rounded-xl p-4 border-l-4 border-blue-500">
            <p className="text-blue-900 font-semibold text-sm">Total cards reviewed: <span className="text-blue-600 font-bold">{total}</span></p>
            <p className="text-blue-800 text-xs mt-2">Keep practicing to master these topics!</p>
          </div>
        </div>

        <button
          onClick={onReset}
          className="w-full mt-8 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-bold py-4 rounded-xl transition transform hover:scale-105 active:scale-95 shadow-lg text-lg"
        >
          Study Again 🔄
        </button>
      </div>
    </div>
  );
}
