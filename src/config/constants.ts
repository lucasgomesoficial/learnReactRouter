type developersType = {
  cep: string;
  nome: string;
  apelido: string;
  avatar: string;
  formacao: {
    escola: string;
    curso: string;
    tempo: string;
    inicio: string;
  };
  xp: {
    empresa: string;
    cargo: string;
    descricao: string[];
    stacks: string[];
  };
  hobbies: string[];
};

export const developers: developersType[] = [
  {
    cep: "14090082",
    nome: "Lucas Gomes",
    apelido: "Lucas",
    avatar: "https://avatars.githubusercontent.com/u/66390420?v=4",
    formacao: {
      escola: "FIAP",
      curso: "Sistema para internet",
      tempo: "4 semestres",
      inicio: "janeiro/2023",
    },
    xp: {
      empresa: "Compass.Uol",
      cargo: "Desenvolvedor",
      descricao: [
        "Desenvolver soluções",
        "Participação em planejamento e criação das tasks junto ao time",
        "Desenvolvimento de novas features",
      ],
      stacks: [
        "JavaScript",
        "Jest",
        "Next.js",
        "ReactJS",
        "Styled components",
        "TypeScript",
        "sassCSS",
        "Design Systems",
        "Redux",
      ],
    },
    hobbies: [
      "Gosto de tocar alguns instrumentos",
      "Participar de grupos de jogos online",
      "Assistir séries e filmes",
    ],
  },
  {
    cep: "05171500",
    nome: "Julia de Souza",
    apelido: "Julia",
    avatar: "https://avatars.githubusercontent.com/u/116672196?v=4",
    formacao: {
      escola: "FIAP",
      curso: "Sistema para internet",
      tempo: "4 semestres",
      inicio: "janeiro/2023",
    },
    xp: {
      empresa: "Github",
      cargo: "Desenvolvedora",
      descricao: [
        "Desenvolver soluções",
        "Participação em planejamento e criação das tasks junto ao time",
        "Desenvolvimento de novas features",
      ],
      stacks: [
        "JavaScript",
        "Jest",
        "Next.js",
        "ReactJS",
        "Styled components",
        "TypeScript",
        "sassCSS",
        "Design Systems",
        "Redux",
      ],
    },
    hobbies: [
      "Gosta de escrever",
      "Participar de eventos",
      "Assistir séries e filmes",
    ],
  },
  {
    cep: "77825822",
    nome: "Fernanda Viana",
    apelido: "Fernanda",
    avatar: "https://avatars.githubusercontent.com/u/115362124?v=4",
    formacao: {
      escola: "FIAP",
      curso: "Sistema para internet",
      tempo: "4 semestres",
      inicio: "janeiro/2023",
    },
    xp: {
      empresa: "Instagran",
      cargo: "Desenvolvedora",
      descricao: [
        "Desenvolver soluções",
        "Participação em planejamento e criação das tasks junto ao time",
        "Desenvolvimento de novas features",
      ],
      stacks: [
        "JavaScript",
        "Jest",
        "Next.js",
        "ReactJS",
        "Styled components",
        "TypeScript",
        "sassCSS",
        "Design Systems",
        "Redux",
      ],
    },
    hobbies: [
      "Gosta de cantar",
      "Participar de festivais de música",
      "Assistir séries e filmes",
    ],
  },
  {
    cep: "72016280",
    nome: "Flaviane Alves",
    apelido: "Flaviane",
    avatar: "https://avatars.githubusercontent.com/u/126427108?v=4",
    formacao: {
      escola: "FIAP",
      curso: "Sistema para internet",
      tempo: "4 semestres",
      inicio: "janeiro/2023",
    },
    xp: {
      empresa: "Google",
      cargo: "Desenvolvedora",
      descricao: [
        "Desenvolver soluções",
        "Participação em planejamento e criação das tasks junto ao time",
        "Desenvolvimento de novas features",
      ],
      stacks: [
        "JavaScript",
        "Jest",
        "Next.js",
        "ReactJS",
        "Styled components",
        "TypeScript",
        "sassCSS",
        "Design Systems",
        "Redux",
      ],
    },
    hobbies: [
      "Gosta de tirar fotos",
      "Participar de eventos de fotografia",
      "Assistir séries e filmes",
    ],
  },
  {
    cep: "57082025",
    nome: "Gabriela Alves",
    apelido: "Gabriela",
    avatar: "https://avatars.githubusercontent.com/u/100434997?v=4",
    formacao: {
      escola: "FIAP",
      curso: "Sistema para internet",
      tempo: "4 semestres",
      inicio: "janeiro/2023",
    },
    xp: {
      empresa: "Microsoft",
      cargo: "Desenvolvedora",
      descricao: [
        "Desenvolver soluções",
        "Participação em planejamento e criação das tasks junto ao time",
        "Desenvolvimento de novas features",
      ],
      stacks: [
        "JavaScript",
        "Jest",
        "Next.js",
        "ReactJS",
        "Styled components",
        "TypeScript",
        "sassCSS",
        "Design Systems",
        "Redux",
      ],
    },
    hobbies: [
      "Gosta de viajar",
      "Participar de cruzeiros",
      "Assistir séries e filmes",
    ],
  }
];
