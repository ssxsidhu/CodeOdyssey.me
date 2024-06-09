import type { Role } from "@/.contentlayer/generated";
import { Mdx } from "../components/mdx";

type Props = {
	role?: Role;
	
};

export const TimelineRight: React.FC<Props> = ({role}) => {
	return (
			<article className="p-4 md:p-8">
				<h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
					{role?.title}
				</h2>
				<div className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
					<Mdx  code={role?.body.code} />
				</div>

			</article>
		
	);
};

export const TimelineLeft: React.FC<Props> = ({role}) => {
	return (
			<article className="p-4 md:p-8">
			
				<h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
					{role?.company}
				</h2>
				<p className="z-20 mt-4 text-xl  duration-1000 text-zinc-400 group-hover:text-zinc-200">
					{role?.timeperiod}
				</p>
			</article>
		
	);
};

export const TimelineCard: React.FC<Props> = ({role}) => {
	return (
			<article className="p-4 md:p-8">
				<h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
					{role?.company}
				</h2>
				<h3 className="z-20 mt-4 text-m  duration-1000 text-zinc-300 group-hover:text-zinc-200">
					{role?.title}
				</h3>
				<p className="z-20 mt-4 text-xs  duration-1000 text-zinc-300 group-hover:text-zinc-200">
					{role?.timeperiod}
				</p>
				<div className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
					<Mdx  code={role?.body.code} />
				</div>

			</article>
		
	);
};