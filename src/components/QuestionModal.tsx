import React from 'react';
import { Question } from '../data/questions';
import FeedbackBanner from './FeedbackBanner';

interface QuestionModalProps {
  question: Question;
  showFeedback: boolean;
  lastResult: { isCorrect: boolean; confirmationVerse: string } | null;
  onAnswer: (index: number) => void;
  onClose: () => void;
}

const QuestionModal: React.FC<QuestionModalProps> = ({ 
  question, 
  showFeedback, 
  lastResult, 
  onAnswer, 
  onClose 
}) => {
  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.85)',
      backdropFilter: 'blur(10px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '1.5rem'
    }}>
      <div className="card-premium" style={{ 
        maxWidth: '700px', 
        width: '100%', 
        position: 'relative',
        animation: 'modalZoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)'
      }}>
        <div style={{ 
          backgroundColor: 'var(--color-button-bg)', 
          margin: '-2rem -2rem 2rem -2rem',
          padding: '1.5rem',
          borderRadius: '16px 16px 0 0',
          textAlign: 'center'
        }}>
          <span style={{ fontSize: '0.8rem', opacity: 0.8, letterSpacing: '0.1rem' }}>QUESTÃO</span>
          <h2 style={{ fontSize: '1.2rem' }}>{question.reference}</h2>
        </div>

        {!showFeedback ? (
          <>
            <h3 style={{ 
              fontSize: '1.8rem', 
              lineHeight: 1.4, 
              marginBottom: '2.5rem',
              textAlign: 'center' 
            }}>
              {question.statement}
            </h3>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: '1fr 1fr', 
              gap: '1rem' 
            }}>
              {question.options.map((opt, idx) => (
                <button 
                  key={idx} 
                  className="btn-legacy btn-option"
                  style={{ 
                    padding: '1.5rem', 
                    fontSize: '1.1rem',
                    height: 'auto',
                    minHeight: '80px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  onClick={() => onAnswer(idx)}
                >
                  {opt.text}
                </button>
              ))}
            </div>
          </>
        ) : lastResult && (
          <FeedbackBanner 
            isCorrect={lastResult.isCorrect} 
            confirmationVerse={lastResult.confirmationVerse}
            onContinue={onClose}
          />
        )}

        <style>{`
          @keyframes modalZoom {
            from { opacity: 0; transform: scale(0.9); }
            to { opacity: 1; transform: scale(1); }
          }
        `}</style>
      </div>
    </div>
  );
};

export default QuestionModal;
