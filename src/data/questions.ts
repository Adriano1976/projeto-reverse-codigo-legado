export interface Option {
  text: string;
  isCorrect: boolean;
}

export interface Question {
  id: string;
  reference: string;
  statement: string;
  options: Option[];
  confirmationVerse: string;
}

export const questions: Question[] = [
  {
    id: "geneses_4125",
    reference: "Gênesis 4:1-25",
    statement: "Quem eram os pais de Caim, Abel e Sete?",
    options: [
      { text: "Isaque e Rebeca", isCorrect: false },
      { text: "Davi e Mical", isCorrect: false },
      { text: "Adão e Eva", isCorrect: true },
      { text: "Maria e Jó", isCorrect: false },
    ],
    confirmationVerse: "Gênesis 4:1-25",
  },
  {
    id: "tiago_514",
    reference: "Tiago 5:14",
    statement: "O que deve fazer o cristão que está doente?",
    options: [
      { text: "Chamar os presbíteros da igreja", isCorrect: true },
      { text: "Ficar em casa esperando", isCorrect: false },
      { text: "Ir ao médico apenas", isCorrect: false },
      { text: "Não fazer nada", isCorrect: false },
    ],
    confirmationVerse: "Tiago 5:14",
  },
  {
    id: "joao_148",
    reference: "João 14:8",
    statement: "Qual o discípulo que pediu para Jesus mostrar o Pai?",
    options: [
      { text: "Filipe", isCorrect: true },
      { text: "Pedro", isCorrect: false },
      { text: "Tiago", isCorrect: false },
      { text: "João", isCorrect: false },
    ],
    confirmationVerse: "João 14:8",
  },
];
