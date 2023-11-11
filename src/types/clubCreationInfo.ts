
export interface clubCreationInfo {
	name: string;
	type: string;
	schoolId: number;
	logo?: File;
	introduction: string;
	explanation: string;
	// catagory: string;
	// tag: string;
	poster?: File;
};

export type clubCatagory = {
	id: string;
	name: string;
	sub: Array<clubCatagory>;
}

export interface clubCatagoryStep {
	first: clubCatagory;
	second: clubCatagory;
	third: clubCatagory;
};
