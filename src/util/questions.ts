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
	canDisplay?: (t: TagTypes[]) => boolean; // DO NOT display question if condition is false
	help?: string;
	options: {
		option: string;
		tag?: TagTypes;
	}[];
}

// TODO: Make questions conditional on current Tags
const QUESTIONS: Question[] = [
		{
		question: 'Desk or Lap - top',
		options: [
			{
				option: 'Laptop',
				tag: Laptop,
			},
			{
				option: 'Desktop',
				tag: Desktop
			}
		]
	},
	{
		question: 'Weight?',
		canDisplay: (t) => t?.includes(Laptop),
		options: [
			{
				option: 'Weight is not a problem',
				// No tag
			},
			{
				option: 'I need light',
				tag: Light,
			}
		]
	},
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
			{
				option: 'mid ram',
				tag: MidRam,
			},
			{
				option: 'answer',
				tag: LowRam,
			}
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
