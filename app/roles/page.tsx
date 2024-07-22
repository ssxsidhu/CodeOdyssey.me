import {Timeline} from './timeline';
import { Navigation } from "../components/nav";

export default async function TimelinePage() {
    
  
    return (
      <div className="relative">
        <Navigation blur={false} />
        <Timeline useClient />
      </div>
    );
}












































