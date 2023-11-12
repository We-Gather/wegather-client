
export interface ClubCreationInfo {
	name: string;
	type: string;
	schoolId: number;
	logo?: File;
	introduction: string;
	explanation: string;
	// category: string;
	tag: string[];
	poster?: File;
};

export type ClubCategory = {
	id: string;
	name: string;
	sub: ClubCategory[];
}

export interface ClubCategoryStep {
	first: ClubCategory;
	second: ClubCategory;
	third: ClubCategory;
};
