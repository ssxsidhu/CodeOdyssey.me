
import { allRoles } from "contentlayer/generated";
import Timeline from '../components/timeline';
import { notFound } from "next/navigation";
import { Mdx } from "@/app/components/mdx";
import { Navigation } from "../components/nav";

// type Props = {
//     params: {
//       slug: string;
//     };
//   };

// export async function generateStaticParams(): Promise<Props["params"][]> {
//     return allRoles
//       .map((p) => ({
//         slug: p.slug,
//       }));
//   }

export default async function TimelinePage() {
    
    return (
        <div className="container relative">
            {/* Marking this component as a client-side component */}
            {/* <Navigation /> */}
            <Timeline useClient />
            
        </div>
    );
    
}

{/* <div className="absolute inset-0 px-5 py-12 prose prose-slate prose-quoteless"> */}
                {/* Render Mdx components dynamically */}
                // {allRoles.map((role, index) => (
                    // <Mdx key={index} code={role.body.code} h2={role.description} />
                // ))}
            // </div>
// const Page = () => {
//     const slug = params?.slug;
//     const project = allRoles.find((project) => project.slug === slug);
  
//     if (!project) {
//       notFound();
//     }
//     return (
//         <div className="container">
//             {/* Marking this component as a client-side component */}
//             <Timeline useClient />
            
//         </div>
//     );
// };

// export default Page;











































