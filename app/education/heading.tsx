export default function Heading() {
    const project_title = "Education 📚";
    
    return (
        <div className='flex flex-col'>
            <div className='flex flex-row md:flex-row lg:flex-row justify-center md:justify-center lg:justify-center'>
                <div className='flex flex-row md:flex-row lg:flex-row my-20 justify-center md:justify-centerlg:justify-center'>
                    <h1 className='animate-zoomIn font-semibold font-sans text-black dark:text-white text-5xl'>{project_title}</h1>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <p className='text-base font-semibold text-zinc-600 dark:text-zinc-400 animate-fadeIn delay-4s text-center sm:text-center'>I actively participate in hackathons and other tech-related activities.</p>
                <p className='text-base font-semibold text-zinc-600 dark:text-zinc-400 animate-fadeIn delay-4s text-center sm:text-center'>See my Degrees received below 🎉</p>
            </div>
        </div>
    );
}