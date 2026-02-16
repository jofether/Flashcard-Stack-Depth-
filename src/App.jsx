import React, { useState, useEffect } from 'react';
import FlashcardCard from './components/FlashcardCard';
import Header from './components/Header';
import ActionButtons from './components/ActionButtons';
import StatsPanel from './components/StatsPanel';
import ResultsScreen from './components/ResultsScreen';
import TopicSelector from './components/TopicSelector';

const TOPICS = [
  {
    name: 'React Basics',
    emoji: '⚛️',
    description: 'Master fundamental React concepts and core features',
    cards: [
      {
        id: 1,
        question: "What is the Virtual DOM?",
        answer: "A lightweight JavaScript representation of the real DOM that React uses to optimize updates and improve performance by batching changes.",
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
        answer: "JSX is a syntax extension to JavaScript that looks similar to XML/HTML. It produces React 'elements' and allows you to write HTML-like code in JavaScript without using createElement.",
        difficulty: "Easy"
      },
      {
        id: 4,
        question: "What is the difference between props and state?",
        answer: "Props are read-only parameters passed from parent to child components. State is mutable data that can change and is managed within a component.",
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
        answer: "Keys help React identify which items have changed, been added, or removed. They improve performance and prevent bugs with component state in lists by maintaining element identity.",
        difficulty: "Medium"
      },
      {
        id: 7,
        question: "What is React.memo?",
        answer: "React.memo is a higher-order component that memoizes a functional component to prevent unnecessary re-renders when props haven't changed, optimizing performance.",
        difficulty: "Hard"
      },
      {
        id: 8,
        question: "Explain the React component lifecycle.",
        answer: "Components go through mounting (being added to DOM), updating (state/props change), and unmounting (removed from DOM) phases. Hooks like useEffect handle lifecycle needs.",
        difficulty: "Medium"
      }
    ]
  },
  {
    name: 'JavaScript Advanced',
    emoji: '🚀',
    description: 'Deep dive into advanced JavaScript concepts and patterns',
    cards: [
      {
        id: 1,
        question: "What is closure in JavaScript?",
        answer: "A closure is a function that retains access to variables from its outer scope even after the outer function has returned. It's created every time a function is created.",
        difficulty: "Hard"
      },
      {
        id: 2,
        question: "Explain the event loop in JavaScript.",
        answer: "The event loop continuously checks the call stack and task queue. When the stack is empty, it moves tasks from the queue to the stack, enabling asynchronous operations.",
        difficulty: "Hard"
      },
      {
        id: 3,
        question: "What are promises and how do they work?",
        answer: "Promises represent the eventual completion or failure of an asynchronous operation. They have three states: pending, fulfilled, or rejected. They provide a cleaner way to handle async code than callbacks.",
        difficulty: "Medium"
      },
      {
        id: 4,
        question: "What is 'this' in JavaScript?",
        answer: "'this' refers to the object context where a function is called. It can be the global object, an object instance, or undefined in strict mode. Arrow functions inherit 'this' from parent scope.",
        difficulty: "Hard"
      },
      {
        id: 5,
        question: "Explain prototypal inheritance.",
        answer: "JavaScript uses prototypal inheritance where objects inherit directly from other objects through the prototype chain. Every object has a prototype from which it inherits properties and methods.",
        difficulty: "Hard"
      },
      {
        id: 6,
        question: "What is the difference between let, const, and var?",
        answer: "var is function-scoped and hoisted. let and const are block-scoped. const creates immutable bindings but objects can still be modified. let allows reassignment.",
        difficulty: "Medium"
      },
      {
        id: 7,
        question: "What are arrow functions and how are they different?",
        answer: "Arrow functions are a concise syntax for functions that inherit 'this' from the parent scope. They cannot be used as constructors and don't have their own 'arguments' object.",
        difficulty: "Medium"
      },
      {
        id: 8,
        question: "Explain async/await syntax.",
        answer: "async/await is syntactic sugar over promises. async functions return promises, and await pauses execution until the promise settles. It makes asynchronous code look synchronous and easier to read.",
        difficulty: "Medium"
      }
    ]
  },
  {
    name: 'Web Development',
    emoji: '🌐',
    description: 'Essential concepts for building modern web applications',
    cards: [
      {
        id: 1,
        question: "What is responsive web design?",
        answer: "Responsive design is an approach to web design that provides an optimal viewing experience across a wide range of devices using flexible grids, layouts, images, and CSS media queries.",
        difficulty: "Easy"
      },
      {
        id: 2,
        question: "Explain CSS Flexbox layout.",
        answer: "Flexbox is a one-dimensional layout method for arranging items in rows or columns. It distributes space and aligns items efficiently, providing powerful tools for responsive layouts.",
        difficulty: "Medium"
      },
      {
        id: 3,
        question: "What is CSS Grid?",
        answer: "CSS Grid is a two-dimensional layout system that allows you to create complex layouts and designs with rows and columns. It's powerful for creating both small and large-scale layouts.",
        difficulty: "Medium"
      },
      {
        id: 4,
        question: "What is the purpose of semantic HTML?",
        answer: "Semantic HTML uses meaningful tags that clearly describe their purpose and content (like <article>, <section>, <header>) improving accessibility, SEO, and code readability.",
        difficulty: "Easy"
      },
      {
        id: 5,
        question: "Explain the CSS Box Model.",
        answer: "The Box Model consists of content, padding, border, and margin. It determines how elements are sized and how space around them is calculated. It's fundamental to layout.",
        difficulty: "Medium"
      },
      {
        id: 6,
        question: "What is the difference between inline, inline-block, and block elements?",
        answer: "Block elements take full width and start on new lines. Inline elements flow with text and don't force line breaks. Inline-block combines both behaviors, allowing width/height on inline elements.",
        difficulty: "Medium"
      },
      {
        id: 7,
        question: "What is the purpose of CSS specificity?",
        answer: "Specificity determines which CSS rule applies when multiple rules target the same element. It's calculated using ID, class, and element selectors. Inline styles override external stylesheets.",
        difficulty: "Medium"
      },
      {
        id: 8,
        question: "Explain CSS media queries.",
        answer: "Media queries allow you to apply different CSS styles based on device characteristics like screen width, height, and orientation. They're essential for responsive design.",
        difficulty: "Easy"
      }
    ]
  },
  {
    name: 'Programming Fundamentals',
    emoji: '📖',
    description: 'Core programming concepts applicable to all languages',
    cards: [
      {
        id: 1,
        question: "What is a variable?",
        answer: "A variable is a named container for storing data values. It has a name, type, and value. Variables allow you to store, retrieve, and manipulate data in your programs.",
        difficulty: "Easy"
      },
      {
        id: 2,
        question: "Explain the difference between == and ===.",
        answer: "== performs type coercion and may convert operands before comparison. === checks both value and type without coercion, making it stricter and more predictable.",
        difficulty: "Easy"
      },
      {
        id: 3,
        question: "What is a data structure?",
        answer: "A data structure is a specialized format for organizing, managing, and storing data that allows efficient access and modification. Examples: arrays, objects, linked lists, trees.",
        difficulty: "Medium"
      },
      {
        id: 4,
        question: "Explain the concept of recursion.",
        answer: "Recursion is when a function calls itself to solve a problem by breaking it into smaller subproblems. A base case is needed to stop the recursion and prevent infinite loops.",
        difficulty: "Medium"
      },
      {
        id: 5,
        question: "What is the difference between a function and a method?",
        answer: "A function is a standalone block of code. A method is a function that belongs to an object and can access that object's properties through 'this'.",
        difficulty: "Easy"
      },
      {
        id: 6,
        question: "Explain the concept of scope.",
        answer: "Scope defines where a variable or function is accessible in your code. Global scope is accessible everywhere. Local scope is within functions or blocks. Scope prevents naming conflicts.",
        difficulty: "Medium"
      },
      {
        id: 7,
        question: "What is an algorithm?",
        answer: "An algorithm is a step-by-step procedure for solving a problem or accomplishing a task. It should be finite, well-defined, and produce a desired output from given inputs.",
        difficulty: "Easy"
      },
      {
        id: 8,
        question: "Explain Big O notation.",
        answer: "Big O notation describes how an algorithm's runtime or space complexity grows as input size increases. Common notations: O(1), O(n), O(n²), O(log n), O(n log n).",
        difficulty: "Hard"
      }
    ]
  }
];

function App() {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [stats, setStats] = useState({ correct: 0, incorrect: 0 });
  const [markedCards, setMarkedCards] = useState(new Set());
  const [showStats, setShowStats] = useState(false);

  // Load stats from localStorage on mount
  useEffect(() => {
    if (selectedTopic !== null) {
      const topicId = selectedTopic;
      const saved = localStorage.getItem(`stats_topic_${topicId}`);
      if (saved) setStats(JSON.parse(saved));
      const savedMarked = localStorage.getItem(`marked_topic_${topicId}`);
      if (savedMarked) setMarkedCards(new Set(JSON.parse(savedMarked)));
    }
  }, [selectedTopic]);

  // Save stats to localStorage
  useEffect(() => {
    if (selectedTopic !== null) {
      localStorage.setItem(`stats_topic_${selectedTopic}`, JSON.stringify(stats));
    }
  }, [stats, selectedTopic]);

  useEffect(() => {
    if (selectedTopic !== null) {
      localStorage.setItem(`marked_topic_${selectedTopic}`, JSON.stringify(Array.from(markedCards)));
    }
  }, [markedCards, selectedTopic]);

  if (selectedTopic === null) {
    return (
      <TopicSelector
        topics={TOPICS}
        onSelectTopic={(index) => {
          setSelectedTopic(index);
          setCurrentIndex(0);
          setIsFlipped(false);
          setStats({ correct: 0, incorrect: 0 });
          setMarkedCards(new Set());
          setShowStats(false);
        }}
      />
    );
  }

  const topic = TOPICS[selectedTopic];
  const currentCard = topic.cards[currentIndex];
  const progressPercent = ((currentIndex + 1) / topic.cards.length) * 100;

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
    if (currentIndex < topic.cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setShowStats(true);
    }
  };

  const resetStudy = () => {
    setCurrentIndex(0);
    setIsFlipped(false);
    setShowStats(false);
    setStats({ correct: 0, incorrect: 0 });
    setMarkedCards(new Set());
  };

  const backToTopics = () => {
    setSelectedTopic(null);
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
    return (
      <ResultsScreen
        stats={stats}
        markedCount={markedCards.size}
        topicName={topic.name}
        onReset={resetStudy}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-800 to-emerald-900 flex flex-col items-center justify-center font-sans overflow-hidden p-4">
      
      <div className="w-full max-w-2xl">
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={backToTopics}
            className="text-emerald-200 hover:text-white transition text-sm font-semibold flex items-center gap-2"
          >
            ← Back to Topics
          </button>
          <span className="text-emerald-300 font-bold text-sm">{topic.emoji} {topic.name}</span>
        </div>

        <Header
          title={topic.name}
          subtitle={topic.description}
          currentIndex={currentIndex}
          totalCards={topic.cards.length}
          progressPercent={progressPercent}
        />

        <div className="flex flex-col items-center">
          <FlashcardCard
            card={currentCard}
            isFlipped={isFlipped}
            onFlip={() => setIsFlipped(!isFlipped)}
            onMark={handleMark}
            isMarked={markedCards.has(currentCard.id)}
            getDifficultyColor={getDifficultyColor}
          />

          <ActionButtons
            onIncorrect={handleIncorrect}
            onMark={handleMark}
            onCorrect={handleCorrect}
            isMarked={markedCards.has(currentCard.id)}
          />

          <StatsPanel
            correct={stats.correct}
            incorrect={stats.incorrect}
            marked={markedCards.size}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
