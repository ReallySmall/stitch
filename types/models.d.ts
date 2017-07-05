declare interface ProjectDetails {
  fields: any;
}

declare type ProjectDetailsStoreState = ProjectDetails;

declare interface BlockType {
	fields: any;
}

declare type BlockTypeStoreState = BlockType[];

declare interface PageType {
	fields: any;
}

declare type PageTypeStoreState = PageType[];

declare interface Create {
	processing: boolean;
	minDataEntered: boolean;
}

declare type CreateStoreState = Create;