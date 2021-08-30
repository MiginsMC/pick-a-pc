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
		tags: TagTypes;
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
				tags: {
					ram: LowRam,
				},
			},
			{
				option: 'Big ram',
				tags: {
					ram: HighRam,
				},
			},
		],
	},
	{
		question: 'Storage',
		options: [
			{
				option: 'Eh nah',
				tags: {
					ram: LowRam,
				},
			},
			{
				option: 'Big storage',
				tags: {
					ram: HighRam,
				},
			},
		],
	},
];

export default QUESTIONS;
