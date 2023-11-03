import Root from './divider.svelte';

import { tv, type VariantProps } from "tailwind-variants";

const divideVariants = tv({
	variants: {
		variant: {
			default: "w-[90%] mx-auto grid place-items-center"
		},
		size: {
			ss: "h-[1.5rem]",
			sm: "h-[3rem]",
			md: "h-[5rem]",
			lg: "h-[7rem]",
			xl: "h-[10rem]"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "sm"
	}
});

type Variant = VariantProps<typeof divideVariants>["variant"];
type Size = VariantProps<typeof divideVariants>["size"];

type Props = {
	variant?: Variant;
	size?: Size;
	class?: string;
};

export {
	Root,
	type Props,
	//
	Root as Divider,
	type Props as ButtonProps,
	divideVariants
};
