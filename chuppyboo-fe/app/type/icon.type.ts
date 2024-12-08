import { JSX } from "react"

export type IconItem = {
    name: string,
    icon: JSX.Element | string
}

export type TokenCard = {
	name: string;
	image: string;
	total: string;
	value: string;
	profit: string;
	isIncreased: boolean;
};

export type NFT = {
	name: string;
	image: string;
};