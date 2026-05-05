import React from 'react';
import { useQuizLogic } from './hooks/useQuizLogic';
import { questions } from './data/questions';
import QuestionModal from './components/QuestionModal';
import './index.css';

const App: React.FC = () => {
  const { 
    score, 
    currentQuestion, 
    selectQuestion, 
    closeQuestion, 
    answerQuestion, 
    showFeedback, 
    lastResult 
  } = useQuizLogic();

  return (
    <div className="container">
      {/* Header & Scoreboard */}
      <header className="card-premium" style={{ 
        marginBottom: '2rem', 
        textAlign: 'center', 
        backgroundColor: 'var(--color-primary-bg)',
        borderBottom: '4px solid rgba(0,0,0,0.2)'
      }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', letterSpacing: '-1px' }}>Jogo Bíblico</h1>
        <p style={{ opacity: 0.9, fontWeight: 300 }}>Teste seus conhecimentos das Sagradas Escrituras</p>
        
        <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'center' }}>
          <div className="card-premium" style={{ 
            padding: '1rem 3rem', 
            background: 'rgba(0,0,0,0.3)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <span style={{ fontSize: '0.8rem', opacity: 0.7, letterSpacing: '2px', fontWeight: 700 }}>SCORE GLOBAL</span>
            <span style={{ fontSize: '3rem', fontWeight: 900, lineHeight: 1 }}>{score}</span>
          </div>
        </div>
      </header>

      {/* References Grid */}
      <main className="card-premium" style={{ minHeight: '400px' }}>
        <h2 style={{ 
          marginBottom: '2rem', 
          opacity: 0.8, 
          fontSize: '1rem', 
          textTransform: 'uppercase', 
          letterSpacing: '0.2em',
          borderBottom: '1px solid var(--glass-border)',
          paddingBottom: '1rem'
        }}>
          Selecione um Livro / Capítulo
        </h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', 
          gap: '1.5rem' 
        }}>
          {questions.map((q) => (
            <button
              key={q.id}
              className="btn-legacy"
              onClick={() => selectQuestion(q.id)}
              disabled={!!currentQuestion}
              style={{ 
                opacity: !!currentQuestion ? 0.3 : 1,
                cursor: !!currentQuestion ? 'not-allowed' : 'pointer',
                height: '80px',
                fontSize: '1.1rem'
              }}
            >
              {q.reference}
            </button>
          ))}
        </div>
      </main>

      {/* Modal Integration */}
      {currentQuestion && (
        <QuestionModal
          question={currentQuestion}
          showFeedback={showFeedback}
          lastResult={lastResult}
          onAnswer={answerQuestion}
          onClose={closeQuestion}
        />
      )}
    </div>
  );
};

export default App;
