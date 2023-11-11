
export interface clubCreationInfo {
	name: string;
	type: string;
	schoolId: number;
	logo?: File;
	introduction: string;
	explanation: string;
	// category: string;
	// tag: string;
	poster?: File;
};

export type clubCategory = {
	id: string;
	name: string;
	sub: clubCategory[];
}

export interface clubCategoryStep {
	first: clubCategory;
	second: clubCategory;
	third: clubCategory;
};
