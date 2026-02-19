export default function TopicSelector({ topics, onSelectTopic }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-800 to-emerald-900 flex flex-col items-center justify-center font-sans p-4">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-white text-5xl font-bold mb-3">FlashCard Stack</h1>
          <p className="text-emerald-200 text-lg">Choose a topic to master</p>
        </div>

        {/* Topic Grid */}
        <div className="grid grid-cols-5 gap-6 mb-8">
          {topics.map((topic, index) => (
            <button
              key={index}
              onClick={() => onSelectTopic(index)}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition transform hover:scale-105 active:scale-95 text-left"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-900">{topic.name}</h2>
                <span className="text-4xl">{topic.emoji}</span>
              </div>
              <p className="text-gray-600 text-sm mb-4">{topic.description}</p>
              <div className="flex items-center gap-2">
                <div className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold">
                  {topic.cards.length} cards
                </div>
                <div className="ml-auto text-emerald-600 font-bold">Start →</div>
              </div>
            </button>
          ))}
        </div>

        {/* Footer Info */}
        <div className="bg-emerald-700 rounded-2xl p-6 text-center">
          <p className="text-emerald-100 text-sm">
            📚 Learn at your own pace • Track your progress • Master the fundamentals
          </p>
        </div>
      </div>
    </div>
  );
}
