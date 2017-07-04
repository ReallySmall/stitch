declare interface ProjectDetails {
  fields: any;
}

declare type ProjectDetailsStoreState = ProjectDetails;

declare interface BlockType {
	id: string;
	fields: any;
}

declare type BlockTypeStoreState = BlockType[];

declare interface PageType {
	id: string;
	fields: any;
}

declare type PageTypeStoreState = PageType[];

declare interface Create {
	processing: boolean
}

declare type CreateStoreState = Create;