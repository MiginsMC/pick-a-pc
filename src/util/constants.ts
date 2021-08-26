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

export interface TagTypes {
	ram?: Tags.LowRam | Tags.MidRam | Tags.HighRam;
} // this will need to be a list
