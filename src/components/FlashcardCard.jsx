export default function FlashcardCard({ card, isFlipped, onFlip, onMark, isMarked, getDifficultyColor }) {
  return (
    <div className="relative w-80 h-96 mb-8">
      {/* Card 3 (Bottom) */}
      <div className="absolute inset-0 bg-white rounded-2xl shadow-xl transform rotate-6 translate-x-4 border border-gray-200 flex items-center justify-center z-50">
        <span className="text-gray-300 font-bold text-6xl opacity-20">3</span>
      </div>

      {/* Card 2 (Middle) */}
      <div className="absolute inset-0 bg-white rounded-2xl shadow-xl transform -rotate-3 -translate-x-2 border border-gray-200 flex items-center justify-center">
        <span className="text-gray-300 font-bold text-6xl opacity-20">2</span>
      </div>

      {/* Card 1 (Top/Active) */}
      <div
        onClick={onFlip}
        className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl p-8 flex flex-col items-center justify-between transform transition-all duration-500 hover:shadow-3xl cursor-pointer z-10 hover:scale-105 border border-gray-100 -mb-12"
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
        }}
      >
        <div className="w-full flex justify-between items-start" style={{ transform: isFlipped ? 'scaleX(-1)' : 'scaleX(1)' }}>
          <div className={`px-4 py-2 rounded-full text-xs font-bold ${getDifficultyColor(card.difficulty)}`}>
            {card.difficulty}
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onMark();
            }}
            className={`text-2xl transition transform hover:scale-125 ${isMarked ? 'text-yellow-400' : 'text-gray-300'}`}
          >
            ⭐
          </button>
        </div>

        <div className="text-center flex-1 flex flex-col items-center justify-center" style={{ transform: isFlipped ? 'scaleX(-1)' : 'scaleX(1)' }}>
          <h3 className="text-gray-400 text-sm uppercase mb-6 font-bold tracking-wider">
            {isFlipped ? 'Answer' : 'Question'}
          </h3>
          <p className={`font-bold transition-all leading-relaxed ${isFlipped ? 'text-lg text-emerald-600' : 'text-xl text-gray-900'}`}>
            {isFlipped ? card.answer : card.question}
          </p>
        </div>

        <p className="text-indigo-500 text-xs font-semibold animate-pulse" style={{ transform: isFlipped ? 'scaleX(-1)' : 'scaleX(1)' }}>
          {isFlipped ? 'Click to hide answer' : 'Click to reveal answer'}
        </p>
      </div>
    </div>
  );
}
