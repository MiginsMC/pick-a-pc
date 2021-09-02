import { Computer, Tags } from './constants';

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

const COMPUTERS: Computer[] = [
	{
		name: 'good wam',
		link: 'https://google.com',
		tags: [HighRam, LowSSD],
		image: '',
	},
	{
		name: 'eh wam',
		link: '',
		tags: [LowRam, HighSSD],
		image: '',
	},
];

export default COMPUTERS;
