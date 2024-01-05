import React from 'react';
import Link from "next/link";

export default function NavigationBar() {
    return (
        <div className='flex flex-row items-center justify-center p-8'>
            <div className='border_top_div bg-zinc-800'>
                <div className="flex flex-row space-x-6 mx-5">
                    <div>
                        <Link className='top_horizontal_div' href={'/about'}>About</Link>
                    </div>
                    <div>
                        <Link className='top_horizontal_div' href={'/experience'}>Experience</Link>
                    </div>
                    <div>
                        <Link className='top_horizontal_div' href={'/projects'}>Projects</Link>
                    </div>
                    <div>
                        <Link className='top_horizontal_div' href={'/education'}>Education</Link>
                    </div>
                    <div>
                        <Link className='top_horizontal_div' href={'/contact'}>Contact</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}