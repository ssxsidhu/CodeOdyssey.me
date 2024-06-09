// components/Timeline.tsx
"use client";
import React from "react";
import { allRoles } from "contentlayer/generated";
import { useRef, useEffect, useState } from 'react';
import { TimelineRight, TimelineLeft, TimelineCard } from "./article";
import { Card } from "../components/card";
import useMediaQuery from "./useMediaQuery";


interface Props {
    useClient?: boolean;
}

export const Timeline = ({ useClient }: Props) => {
    const circleRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [glowingCircleIndex, setGlowingCircleIndex] = useState<number | null>(null);
    const isSmallScreen = useMediaQuery('(max-width: 768px)');
    
    const sortedRoles = allRoles.sort((a, b) => a.order - b.order);

 
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

    if (isSmallScreen) {
        return <TimelineMin />;
      }

    return (
        <div className="relative min-h-screen" style={{ marginLeft: '-25%' }}>
            <div className="absolute inset-0 flex justify-center">
                <div className="w-0.5 bg-gray-300 h-full"></div>
            </div>

            {/* Circle Sections */}
            {sortedRoles.map((role, index) => (
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


export const TimelineMin = () => {
    const sortedRoles = allRoles.sort((a, b) => a.order - b.order);
    return (
        <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">

        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
          <div className="grid grid-cols-1 gap-4">
            {sortedRoles
              .filter((_, i) => i % 3 === 0)
              .map((role) => (
                <Card key={role.slug}>
                  <TimelineCard role={role} />
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {sortedRoles
              .filter((_, i) => i % 3 === 1)
              .map((role) => (
                <Card key={role.slug}>
                  <TimelineCard role={role} />
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {sortedRoles
              .filter((_, i) => i % 3 === 2)
              .map((role) => (
                <Card key={role.slug}>
                  <TimelineCard role={role} />
                </Card>
              ))}
          </div>
      </div>
      </div>
    )
}



