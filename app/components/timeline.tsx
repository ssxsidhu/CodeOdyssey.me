// components/Timeline.tsx
"use client";
import React from "react";
import { allRoles } from "contentlayer/generated";
import { useEffect, useState } from 'react';
import { Article } from "../roles/article";
import { Mdx } from "./mdx";

interface Props {
    useClient?: boolean;
}

const Timeline = ({ useClient }: Props) => {
    // Check if useClient prop is provided and render conditionally
    if (!useClient) {
        return null;
    }
    const role = allRoles.at(0)
    // Rest of the component logic
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Return the component JSX
    return (
         <div className="relative min-h-screen" style={{ marginLeft: '-25%' }}>
            <div className="absolute inset-0 flex justify-center">
                <div className="w-0.5 bg-gray-300 h-full"></div>
            </div>

            {/* Circle Sections */}

            <div className="h-screen flex items-center justify-center">
                <div className="relative w-1/2 h-1/2">
                    
               <Article role = {role} />
               </div>
               <div className="relative w-2 h-1/2 text-white">
                <Mdx  code={role?.body.code} />
               
               
                </div>
                        <div className="absolute">
                            <div
                                className="bg-gray-100 h-6 w-6 rounded-full border-3 border-gray-300"
                                style={{
                                    boxShadow: '0 0 20px #ffffff'
                                }}
                            ></div>
                        </div>
            </div>
            


            <div className="h-screen flex items-center justify-center">
                        <div className="relative">
                            <div
                                className="bg-gray-100 h-6 w-6 rounded-full border-3 border-gray-300"
                                style={{
                                    boxShadow:
                                        typeof window !== 'undefined' &&
                                        scrollY > window.innerHeight * 0.25 &&
                                        scrollY < window.innerHeight * 1.25
                                            ? '0 0 20px #ffffff'
                                            : 'none',
                                }}
                            ></div>
                        </div>
                    </div>
                        
            
        </div>
    );
};

export default Timeline;
