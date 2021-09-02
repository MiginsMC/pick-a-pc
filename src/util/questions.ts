import { Tags, TagTypes } from './constants';

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
		tag: TagTypes;
	}[];
}

// TODO: Make questions conditional on current Tags
const QUESTIONS: Question[] = [
	{
		question: 'How much ram do you want',
		help: 'Ram is speed of computer',
		options: [
			{
				option: 'Eh nah',
				tag: LowRam,
			},
			{
				option: 'Big ram',
				tag: HighRam,
			},
		],
	},
	{
		question: 'Storage',
		options: [
			{
				option: 'Eh nah',
				tag: LowSSD,
			},
			{
				option: 'Big storage',
				tag: HighSSD,
			},
		],
	},
];

export default QUESTIONS;
