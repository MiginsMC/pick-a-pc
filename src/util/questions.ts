enum Tags {
  Laptop,
  Desktop,
  HighRam,
  MidRam,
  LowRam,
  HighSSD,
  MidSSD,
  LowSSD,
  Heavy,
  Light,
  Gaming,
  Work,
}

const {
  Laptop,
  Desktop,
  HighRam,
  MidRam,
  LowRam,
  HighSSD,
  MidSSD,
  LowSSD,
  Heavy,
  Light,
  Gaming,
  Work,
} = Tags;

interface Question {
  question: string;
  help?: string;
  options: {
    option: string;
    tags: {
      ram?: Tags.LowRam | Tags.MidRam | Tags.HighRam,
    }[];
  }[];
}

const QUESTIONS: Question[] = [
  {
    question: "How much ram do you want",
    help: "Ram is speed of computer",
    options: [
      {
        option: "Question 1",
        tags: [
          {
            ram: LowRam,
          },
        ],
      },
    ],
  },
];

export default QUESTIONS;
