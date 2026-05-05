import React from 'react';

interface FeedbackBannerProps {
  isCorrect: boolean;
  confirmationVerse: string;
  onContinue: () => void;
}

const FeedbackBanner: React.FC<FeedbackBannerProps> = ({ isCorrect, confirmationVerse, onContinue }) => {
  return (
    <div className="card-premium" style={{
      marginTop: '2rem',
      backgroundColor: isCorrect ? 'var(--color-success)' : 'var(--color-error)',
      textAlign: 'center',
      animation: 'fadeInUp 0.4s ease-out',
      color: 'white',
      padding: '2.5rem'
    }}>
      <h2 style={{ 
        fontSize: '2.5rem', 
        marginBottom: '1rem', 
        textTransform: 'uppercase',
        fontWeight: 800,
        textShadow: '0 2px 4px rgba(0,0,0,0.3)'
      }}>
        {isCorrect ? '✨ Correto!' : '❌ Ops, Errado!'}
      </h2>
      
      <div style={{ marginBottom: '2rem' }}>
        <p style={{ opacity: 0.9, fontSize: '0.9rem', marginBottom: '0.5rem' }}>Confira a resposta em:</p>
        <p style={{ fontSize: '1.4rem', fontWeight: 600 }}>{confirmationVerse}</p>
      </div>

      <button 
        className="btn-legacy" 
        style={{ 
          backgroundColor: 'rgba(255,255,255,0.2)', 
          backdropFilter: 'blur(4px)',
          border: '1px solid rgba(255,255,255,0.3)',
          padding: '1.2rem 3rem'
        }}
        onClick={onContinue}
      >
        PRÓXIMA PERGUNTA
      </button>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default FeedbackBanner;
