import { TagTypes } from './constants';
interface Computer {
	name: string;
	link: string;
	tags: TagTypes[];
	image: string;
}

const COMPUTERS: Computer[] = [
	{
		name: '',
		link: '',
		tags: [{}],
		image: '',
	},
	{
		name: '',
		link: '',
		tags: [{}],
		image: '',
	},
];

export default COMPUTERS;
