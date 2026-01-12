import React, { useState, useEffect } from 'react';

const FLASHCARDS = [
  {
    id: 1,
    question: "What is the Virtual DOM?",
    answer: "A lightweight JavaScript representation of the real DOM that React uses to optimize updates and improve performance.",
    difficulty: "Easy"
  },
  {
    id: 2,
    question: "Explain React Hooks and useState.",
    answer: "Hooks are functions that let you use state and other React features in functional components. useState is a hook that lets you add state to a functional component.",
    difficulty: "Medium"
  },
  {
    id: 3,
    question: "What is JSX?",
    answer: "JSX is a syntax extension to JavaScript that looks similar to XML/HTML. It produces React 'elements' and allows you to write HTML-like code in JavaScript.",
    difficulty: "Easy"
  },
  {
    id: 4,
    question: "What is the difference between props and state?",
    answer: "Props are read-only parameters passed from parent to child. State is data that can change and is managed within a component.",
    difficulty: "Medium"
  },
  {
    id: 5,
    question: "Explain React's dependency array in useEffect.",
    answer: "The dependency array controls when useEffect runs. An empty array means it runs once, an array with values means it runs when those values change, and omitting it means it runs after every render.",
    difficulty: "Hard"
  },
  {
    id: 6,
    question: "What is a key in React lists?",
    answer: "Keys help React identify which items have changed, been added, or removed. They improve performance and prevent bugs with component state in lists.",
    difficulty: "Medium"
  },
  {
    id: 7,
    question: "What is React.memo?",
    answer: "React.memo is a higher-order component that memoizes a functional component to prevent unnecessary re-renders when props haven't changed.",
    difficulty: "Hard"
  },
  {
    id: 8,
    question: "Explain the React component lifecycle.",
    answer: "Components go through mounting (being added to DOM), updating (state/props change), and unmounting (removed from DOM) phases.",
    difficulty: "Medium"
  }
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [stats, setStats] = useState({ correct: 0, incorrect: 0, reviewed: 0 });
  const [markedCards, setMarkedCards] = useState(new Set());
  const [showStats, setShowStats] = useState(false);
  const [cardHistory, setCardHistory] = useState([]);

  // Load stats from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('flashcardStats');
    if (saved) setStats(JSON.parse(saved));
    const savedMarked = localStorage.getItem('markedCards');
    if (savedMarked) setMarkedCards(new Set(JSON.parse(savedMarked)));
  }, []);

  // Save stats to localStorage
  useEffect(() => {
    localStorage.setItem('flashcardStats', JSON.stringify(stats));
  }, [stats]);

  useEffect(() => {
    localStorage.setItem('markedCards', JSON.stringify(Array.from(markedCards)));
  }, [markedCards]);

  const currentCard = FLASHCARDS[currentIndex];
  const progressPercent = ((currentIndex + 1) / FLASHCARDS.length) * 100;

  const handleCorrect = () => {
    setStats(prev => ({ ...prev, correct: prev.correct + 1 }));
    moveToNext();
  };

  const handleIncorrect = () => {
    setStats(prev => ({ ...prev, incorrect: prev.incorrect + 1 }));
    moveToNext();
  };

  const handleMark = () => {
    const newMarked = new Set(markedCards);
    if (newMarked.has(currentCard.id)) {
      newMarked.delete(currentCard.id);
    } else {
      newMarked.add(currentCard.id);
    }
    setMarkedCards(newMarked);
  };

  const moveToNext = () => {
    setIsFlipped(false);
    if (currentIndex < FLASHCARDS.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setShowStats(true);
    }
  };

  const resetStudy = () => {
    setCurrentIndex(0);
    setIsFlipped(false);
    setShowStats(false);
    setStats({ correct: 0, incorrect: 0, reviewed: 0 });
    setMarkedCards(new Set());
  };

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'Easy': return 'bg-green-100 text-green-700';
      case 'Medium': return 'bg-yellow-100 text-yellow-700';
      case 'Hard': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  if (showStats) {
    const total = stats.correct + stats.incorrect;
    const percentage = total > 0 ? ((stats.correct / total) * 100).toFixed(1) : 0;

    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-800 to-emerald-900 flex flex-col items-center justify-center font-sans overflow-hidden">
        <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-md w-full mx-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Study Complete!</h2>
          
          <div className="space-y-6">
            <div className="bg-emerald-50 rounded-xl p-6">
              <p className="text-gray-600 text-sm mb-2">Accuracy Rate</p>
              <p className="text-4xl font-bold text-emerald-600">{percentage}%</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-lg p-4">
                <p className="text-green-600 font-bold text-2xl">{stats.correct}</p>
                <p className="text-gray-600 text-sm">Correct</p>
              </div>
              <div className="bg-red-50 rounded-lg p-4">
                <p className="text-red-600 font-bold text-2xl">{stats.incorrect}</p>
                <p className="text-gray-600 text-sm">Incorrect</p>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-4">
              <p className="text-blue-600 font-bold text-2xl">{markedCards.size}</p>
              <p className="text-gray-600 text-sm">Marked for Review</p>
            </div>
          </div>

          <button
            onClick={resetStudy}
            className="w-full mt-8 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-lg transition transform hover:scale-105"
          >
            Study Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-800 to-emerald-900 flex flex-col items-center justify-center font-sans overflow-hidden p-4">
      
      {/* HEADER */}
      <div className="w-full max-w-2xl mb-8">
        <h1 className="text-white text-4xl font-bold mb-2 tracking-wide text-center">React Basics</h1>
        <p className="text-emerald-200 text-center text-sm mb-4">Master the fundamentals</p>
        
        {/* Progress Bar */}
        <div className="bg-emerald-700 rounded-full h-2 overflow-hidden">
          <div
            className="bg-gradient-to-r from-green-400 to-emerald-300 h-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <p className="text-emerald-200 text-xs mt-2 text-center">
          Card {currentIndex + 1} of {FLASHCARDS.length}
        </p>
      </div>

      {/* CARD STACK CONTAINER */}
      <div className="relative w-80 h-96 mb-8">
        
        {/* Card 3 (Bottom) */}
        <div className="absolute inset-0 bg-white rounded-2xl shadow-xl transform rotate-6 translate-x-4 border border-gray-200 flex items-center justify-center">
          <span className="text-gray-300 font-bold text-6xl opacity-20">3</span>
        </div>

        {/* Card 2 (Middle) */}
        <div className="absolute inset-0 bg-white rounded-2xl shadow-xl transform -rotate-3 -translate-x-2 border border-gray-200 flex items-center justify-center">
          <span className="text-gray-300 font-bold text-6xl opacity-20">2</span>
        </div>

        {/* Card 1 (Top/Active) */}
        <div
          onClick={() => setIsFlipped(!isFlipped)}
          className="absolute inset-0 bg-white rounded-2xl shadow-2xl p-8 flex flex-col items-center justify-between transform transition-all duration-500 hover:shadow-3xl cursor-pointer z-10 hover:scale-105"
          style={{
            transformStyle: 'preserve-3d',
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
          }}
        >
          
          <div className="w-full flex justify-between items-start" style={{ transform: isFlipped ? 'scaleX(-1)' : 'scaleX(1)' }}>
            <div className={`px-3 py-1 rounded-full text-xs font-bold ${getDifficultyColor(currentCard.difficulty)}`}>
              {currentCard.difficulty}
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleMark();
              }}
              className={`text-xl transition ${markedCards.has(currentCard.id) ? 'text-yellow-400' : 'text-gray-300'} hover:scale-125`}
            >
              ⭐
            </button>
          </div>

          <div className="text-center flex-1 flex flex-col items-center justify-center" style={{ transform: isFlipped ? 'scaleX(-1)' : 'scaleX(1)' }}>
            <h3 className="text-gray-500 text-sm uppercase mb-4 font-semibold">
              {isFlipped ? 'Answer' : 'Question'}
            </h3>
            <p className={`font-bold transition-all ${isFlipped ? 'text-lg text-emerald-600' : 'text-2xl text-gray-900'}`}>
              {isFlipped ? currentCard.answer : currentCard.question}
            </p>
          </div>

          <p className="text-indigo-500 text-sm font-medium animate-pulse" style={{ transform: isFlipped ? 'scaleX(-1)' : 'scaleX(1)' }}>
            {isFlipped ? 'Click to hide answer' : 'Click to reveal answer'}
          </p>

        </div>

      </div>

      {/* ACTION BUTTONS */}
      <div className="flex space-x-4 gap-4">
        <button
          onClick={handleIncorrect}
          className="w-16 h-16 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-2xl shadow-lg hover:bg-red-200 hover:shadow-xl transition transform hover:scale-110"
          title="Mark as incorrect"
        >
          ✕
        </button>
        <button
          onClick={handleMark}
          className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl shadow-lg transition transform hover:scale-110 ${
            markedCards.has(currentCard.id)
              ? 'bg-yellow-200 text-yellow-600 hover:bg-yellow-300'
              : 'bg-indigo-100 text-indigo-600 hover:bg-indigo-200'
          }`}
          title="Mark for review"
        >
          ⭐
        </button>
        <button
          onClick={handleCorrect}
          className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-2xl shadow-lg hover:bg-green-200 hover:shadow-xl transition transform hover:scale-110"
          title="Mark as correct"
        >
          ✓
        </button>
      </div>

      {/* STATS DISPLAY */}
      <div className="mt-8 flex gap-6 text-white">
        <div className="text-center">
          <p className="text-3xl font-bold text-green-400">{stats.correct}</p>
          <p className="text-sm text-emerald-200">Correct</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold text-red-400">{stats.incorrect}</p>
          <p className="text-sm text-emerald-200">Incorrect</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold text-yellow-400">{markedCards.size}</p>
          <p className="text-sm text-emerald-200">Marked</p>
        </div>
      </div>

    </div>
  );
}

export default App;
