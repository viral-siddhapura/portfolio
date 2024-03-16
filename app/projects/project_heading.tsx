export default function ProjectHeading() {
    const project_title = "Projects 🎒";
    
    return (
        <div className='flex flex-col'>
            <div className='flex flex-row md:flex-row lg:flex-row justify-center md:justify-center lg:justify-center'>
                <div className='flex flex-row md:flex-row lg:flex-row my-20 justify-center md:justify-centerlg:justify-center'>
                    <h1 className='animate-zoomIn font-semibold font-sans text-black dark:text-white text-5xl'>{project_title}</h1>
                </div>
            </div>
        </div>
    );
}