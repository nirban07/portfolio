import Link from 'next/link';

import { BentoGridDemo } from '@/components/bentoCompo';
import { LampDemo } from '@/components/lampDemo';
import { Spotlight } from '@/components/ui/spotlight';

export default function Home() {
  return (
    <div className='bg-black'>
      <div className="h-[30rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Nirban Roy
          </h1>
          <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
            Thinking. Building. Deploying.
          </p>
          <div className=' flex justify-center mt-8'>
            <Link target='_blank' href="https://drive.google.com/file/d/1FSsSt1-RoW421toytgp7PyhWcf509qXD/view?usp=sharing" className="relative inline-flex h-12 overflow-hidden rounded-lg p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                Resume
              </span>
            </Link>
          </div>
        </div>
      </div>
      <h1 className="p-4 text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
        Projects
      </h1>
      <BentoGridDemo />
      <LampDemo />
    </div>
  );
}
