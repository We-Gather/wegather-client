export interface clubProfile {
	id: number;
	name: string;
	image: string;
	description: string;
	url: string;
	tag: Array<Tag>;
}
export interface Tag {
	text: string;
}
