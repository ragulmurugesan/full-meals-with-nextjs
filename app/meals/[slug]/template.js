'use client';

import { useEffect } from "react";
import { usePathname } from 'next/navigation';

export default function Template({ children, params }) {

    const pathName = usePathname();

    useEffect(() => {
        console.log('use effect frrom the meals template');
    })

    return (
        <div>
            <h1>Hey I am from template for the meal {pathName} </h1>
            <>
                {children}
            </>
        </div>
    );
}
