import Root from './divider.svelte';

import { tv, type VariantProps } from "tailwind-variants";

const divideVariants = tv({
	variants: {
		variant: {
			default: "w-[90%] mx-auto grid place-items-center"
		},
		size: {
			sm: "h-[3rem]",
			lg: "h-[5rem]",
			xl: "h-[7rem]",
			xxl: "h-[10rem]"
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
};

export {
	Root,
	type Props,
	//
	Root as Divider,
	type Props as ButtonProps,
	divideVariants
};
