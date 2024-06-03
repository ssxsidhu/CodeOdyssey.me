import type { Role } from "@/.contentlayer/generated";
import Link from "next/link";
import { Eye, View } from "lucide-react";
import { Mdx } from "../components/mdx";

type Props = {
	role?: Role;
	// views: number;
};

export const TimelineRight: React.FC<Props> = ({role}) => {
	return (
			<article className="p-4 md:p-8">
				<h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
					{role?.title}
				</h2>
				<div className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
					{/* {role?.description} */}
					<Mdx  code={role?.body.code} />
				</div>

			</article>
		
	);
};

export const TimelineLeft: React.FC<Props> = ({role}) => {
	return (
			<article className="p-4 md:p-8">
				{/* <div className="flex justify-between gap-2 items-center">
					<span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
						{project. ? (
							<time dateTime={new Date(project.date).toISOString()}>
							{Intl.DateTimeFormat(undefined, { year: "numeric" , timeZone: "UTC" }).format(
							  new Date(project.date),
							)}
						  </time>						  
						) : (
							<span>SOON</span>
						)}
					</span>
					<span className="text-zinc-500 text-xs  flex items-center gap-1">
						<Eye className="w-4 h-4" />{" "}
						{Intl.NumberFormat("en-US", { notation: "compact" }).format(views)}
					</span>
				</div> */}
				<h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
					{role?.company}
				</h2>
				<p className="z-20 mt-4 text-xl  duration-1000 text-zinc-400 group-hover:text-zinc-200">
					{role?.timeperiod}
				</p>
			</article>
		
	);
};