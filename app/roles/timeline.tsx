// components/Timeline.tsx
"use client";
import React from "react";
import { allRoles } from "contentlayer/generated";
import { useRef, useEffect, useState } from 'react';
import { TimelineRight, TimelineLeft } from "./article";

interface Props {
    useClient?: boolean;
}

const Timeline = ({ useClient }: Props) => {
    const circleRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [glowingCircleIndex, setGlowingCircleIndex] = useState<number | null>(null);
    useEffect(() => {
        if (!useClient) return;

        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5, // 0.5 means when 50% of the circle is in view
        };

        const handleIntersection = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Find the index of the intersecting circle
                    const index = circleRefs.current.findIndex((ref) => ref === entry.target);
                    setGlowingCircleIndex(index);
                }
            });
        };
        const observer = new IntersectionObserver(handleIntersection, options);
        circleRefs.current
    .filter((ref) => ref !== null) // Filter out null refs
    .forEach((ref) => observer.observe(ref!)); // Use ! to assert that ref is not null


        return () => {
            observer.disconnect();
        };
    }, [useClient]);
    return (
        <div className="relative min-h-screen" style={{ marginLeft: '-25%' }}>
            <div className="absolute inset-0 flex justify-center">
                <div className="w-0.5 bg-gray-300 h-full"></div>
            </div>

            {/* Circle Sections */}
            {allRoles.map((role, index) => (
                <div key={index} className="h-screen flex items-center justify-center">
                    <div className="relative w-1/5" style={{ marginRight: '10%' }}>
                        <TimelineLeft role={role} />
                    </div>
                    <div className="relative w-1/3" style={{ marginRight: '-10%', marginTop: '5%' }}>
                        <TimelineRight role={role} />
                    </div>
                        {/* Circle */}
                        <div
                        ref={(ref) => {
                            if (ref) {
                                circleRefs.current[index] = ref;
                                if (glowingCircleIndex === index) {
                                    ref.classList.add('glowing-circle');
                                } else {
                                    ref.classList.remove('glowing-circle');
                                }
                            }
                        }}
                        className="absolute"
                    >
                        <div
                            className={`bg-gray-100 h-6 w-6 rounded-full border-3 border-gray-300 ${
                                glowingCircleIndex === index ? 'glow' : ''
                            }`}
                            style={{
                                boxShadow: glowingCircleIndex === index ? '0 0 20px #ffffff' : 'none',
                            }}
                        ></div>
                    
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Timeline;

// const Timeline = ({ useClient }: Props) => {
//     // Check if useClient prop is provided and render conditionally
//     if (!useClient) {
//         return null;
//     }
    
//     // Rest of the component logic
//     const [scrollY, setScrollY] = useState(0);

//     useEffect(() => {
//         const handleScroll = () => {
//             setScrollY(window.scrollY);
//         };

//         window.addEventListener('scroll', handleScroll);

//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);

//     // Return the component JSX
//     return (
//         <div className="relative min-h-screen" style={{ marginLeft: '-25%' }}>
//             <div className="absolute inset-0 flex justify-center">
//                 <div className="w-0.5 bg-gray-300 h-full"></div>
//             </div>

//             {/* Circle Sections */}

//             <div className="h-screen flex items-center justify-center ">

//                 <div className="relative" style={{ marginRight: '10%' }}>
//                     <TimelineLeft role={allRoles.at(0)} />
//                 </div>
//                 <div className="relative w-1/3" style={{ marginRight: '-10%', marginTop: '5%' }}>
//                     <TimelineRight role={allRoles.at(0)} />

//                 </div>
//                 <div className="absolute">
//                     <div
//                         className="bg-gray-100 h-6 w-6 rounded-full border-3 border-gray-300"
//                         style={{
//                             boxShadow: '0 0 20px #ffffff'
//                         }}
//                     ></div>
//                 </div>
//             </div>

//             <div className="h-screen flex items-center justify-center ">

//                 <div className="relative w-1/5" style={{ marginRight: '10%' }}>
//                     <TimelineLeft role={allRoles.at(1)} />
//                 </div>
//                 <div className="relative w-1/3" style={{ marginRight: '-10%', marginTop: '5%' }}>
//                     <TimelineRight role={allRoles.at(1)} />

//                 </div>
//                 <div className="absolute">
//                     <div
//                         className="bg-gray-100 h-6 w-6 rounded-full border-3 border-gray-300"
//                         style={{
//                             boxShadow: '0 0 20px #ffffff'
//                         }}
//                     ></div>
//                 </div>
//             </div>

//             <div className="h-screen flex items-center justify-center ">

//                 <div className="relative" style={{ marginRight: '10%' }}>
//                     <TimelineLeft role={allRoles.at(2)} />
//                 </div>
//                 <div className="relative w-1/3" style={{ marginRight: '-10%', marginTop: '5%' }}>
//                     <TimelineRight role={allRoles.at(2)} />

//                 </div>
//                 <div className="absolute">
//                     <div
//                         className="bg-gray-100 h-6 w-6 rounded-full border-3 border-gray-300"
//                         style={{
//                             boxShadow:'0 0 20px #ffffff'                   
//                         }}
//                     ></div>
//                 </div>
//             </div>


//         </div>
//     );
// };

// export default Timeline;
