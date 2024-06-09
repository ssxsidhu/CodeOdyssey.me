import {Timeline} from './timeline';
import { Navigation } from "../components/nav";

export default async function TimelinePage() {
    
  
    return (
      <div className="relative pb-16">
        <Navigation blur={false} />
        <Timeline useClient />
      </div>
    );
}












































