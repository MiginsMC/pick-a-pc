export enum Tags {
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

export type TagTypes = Tags;
// In case it needs to be modified later

export type Computer = {
	name: string;
	link: string;
	tags: TagTypes[];
	image: string;
};
