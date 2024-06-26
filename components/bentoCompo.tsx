"use client"
import { link } from 'fs';
import Image from 'next/image';
import React from 'react';

import koinx from '@/public/koinx.png';
import { cn } from '@/utils/cn';
import {
	IconArrowWaveRightUp, IconBoxAlignRightFilled, IconBoxAlignTopLeft, IconClipboardCopy,
	IconFileBroken, IconSignature, IconTableColumn
} from '@tabler/icons-react';

import blogPic from '../public/blogPic.png';
import { BentoGrid, BentoGridItem } from './ui/bento-grid';

export function BentoGridDemo() {
	return (
		<BentoGrid className="max-w-4xl mx-auto">
			{items.map((item, i) => (
				<BentoGridItem
					key={i}
					title={item.title}
					description={item.description}
					header={item.header}
					icon={item.icon}
					link={item.link}
					className={i === 3 || i === 6 ? "md:col-span-2" : ""}
				/>
			))}
		</BentoGrid>
	);
}
const Skeleton = () => (
	<div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
	{
		title: "Blogging application",
		description: "Exploring fast blogging experience with cloudflare.",
		header: <Image src={blogPic} alt='test' className=' object-cover ' />,
		icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
		link: "https://medium-frontend-gamma.vercel.app/"
	},
	{
		title: "Koinx Challenge",
		description: "A pixel perfect frontend challenge",
		header: <Image src={koinx} alt='test' className=' object-cover ' />,
		icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
		link: "https://koinx-black.vercel.app/"
	},
	{
		title: "The Art of Design",
		description: "Discover the beauty of thoughtful and functional design.",
		header: <Skeleton />,
		icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
	},
	{
		title: "The Power of Communication",
		description:
			"Understand the impact of effective communication in our lives.",
		header: <Skeleton />,
		icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
	},
	{
		title: "The Pursuit of Knowledge",
		description: "Join the quest for understanding and enlightenment.",
		header: <Skeleton />,
		icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
	},
	// {
	// 	title: "The Joy of Creation",
	// 	description: "Experience the thrill of bringing ideas to life.",
	// 	header: <Skeleton />,
	// 	icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
	// },
	// {
	// 	title: "The Spirit of Adventure",
	// 	description: "Embark on exciting journeys and thrilling discoveries.",
	// 	header: <Skeleton />,
	// 	icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
	// },
];
