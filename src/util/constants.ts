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
} // this will need to modified as it is assumed a list, maybe have the tag types just Tags
