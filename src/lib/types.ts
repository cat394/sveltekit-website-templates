type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type ImageData = {
	src: string;
	width?: number;
	height?: number;
	alt: string;
};

type Info = {
	title: string;
	subTitle?: string;
	description: string;
	image?: Omit<ImageData, 'width' | 'height'>;
};

type Stuff = {
	image: string;
	name: string;
	description: string;
};

export type { HeadingLevel, Info, ImageData, Stuff };
