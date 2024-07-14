"use client";

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import Nextjs from '@/public/nextjs.png';
import Nodejs from '@/public/Node.js.png';
import Reactjs from '@/public/React.png';
import Tailwind from '@/public/tailwind.png';
import Typescript from '@/public/typeScript.png';

export function InfiniteMovingCardsDemo() {
	return (
		<div className=" rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
			<div className='flex gap-4 p-1 items-center bg-white text-black animation-scroll'>
				{icons.map((items, index) => (
					<div key={items.name + index} className='flex items-center gap-2'>
						<span className='w-12 h-12'>{items.svg}</span>
						<span>{items.name}</span>
					</div>
				))}
			</div>
		</div>
	);
}

const icons = [
	{
		svg: <Image src={Nextjs} alt={'tailwind'} width={48} height={48} />,
		name: "Nextjs"

	},
	{
		svg: <Image src={Reactjs} alt={'react'} width={48} height={48} />,
		name: "Reactjs"
	},
	{
		svg: <Image src={Typescript} alt={'Typescript'} width={48} height={48} />,
		name: "Typescript"
	},
	{
		svg: <Image src={Nodejs} alt={'Nodejs'} width={48} height={48} />,
		name: "Nodejs"
	},
	{
		svg: <Image src={Tailwind} alt={'tailwind'} width={48} height={48} />,
		name: "TailwindCss"

	},
];
