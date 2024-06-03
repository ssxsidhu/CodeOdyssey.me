
import { allRoles } from "contentlayer/generated";
import Timeline from './timeline';
import { notFound } from "next/navigation";
import { Mdx } from "@/app/components/mdx";
import { Navigation } from "../components/nav";



export default async function TimelinePage() {
    
    return (
        <div className="container relative">
            
            <Navigation blur = {false} />
            <Timeline useClient />
            
        </div>
    );
    
}












































