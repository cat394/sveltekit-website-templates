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

const dayNames = {
	monday: 'Monday',
	tuesday: 'Tuesday',
	wednesday: 'Wednesday',
	thursday: 'Thursday',
	friday: 'Friday',
	saturday: 'Saturday',
	sunday: 'Sunday'
} as const;

type DayNamesValue = (typeof dayNames)[keyof typeof dayNames];

export { dayNames }
export type { HeadingLevel, Info, ImageData, Stuff, DayNamesValue };
