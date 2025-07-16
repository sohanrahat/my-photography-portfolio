import React from 'react';

const AboutPageContent = () => {
    return (
        <div className="flex flex-col" style={{ backgroundColor: 'rgba(235,234,230,1)' }}>
            {/* Main Content - Full Screen Split */}
            <div className="flex flex-col lg:flex-row min-h-screen">
                {/* Left Column - Text Sections (1/3 of screen) */}
                <div className="w-full lg:w-1/3 flex flex-col border-r border-t border-b border-black">
                    {/* About Me Section */}
                    <div className="flex-1 border-b border-black p-8 lg:p-12">
                        <h2 className="text-[12px] font-mono uppercase tracking-wider text-black mb-8 -ml-4">
                            ABOUT ME
                        </h2>
                        <p className="text-[12px] font-mono uppercase tracking-wider text-black leading-[1.4] text-justify">
                            AUDREY WOLLER IS A GIFTED PHOTOGRAPHER KNOWN FOR HER EXCEPTIONAL ABILITY TO CAPTURE THE BEAUTY AND ESSENCE OF HER SUBJECTS THROUGH HER LENS. WITH A KEEN EYE FOR DETAIL AND A DEEP APPRECIATION FOR NATURAL LIGHT, SHE CREATES IMAGES THAT TELL COMPELLING STORIES AND EVOKE POWERFUL EMOTIONS. HER WORK SPANS VARIOUS GENRES, FROM INTIMATE PORTRAITS TO SWEEPING LANDSCAPES, EACH PIECE REFLECTING HER UNIQUE PERSPECTIVE AND ARTISTIC VISION. AUDREY'S PHOTOGRAPHS HAVE THE POWER TO TRANSPORT VIEWERS TO DIFFERENT WORLDS AND INSPIRE THEM TO SEE THE BEAUTY IN EVERYDAY MOMENTS. HER COMMITMENT TO EXCELLENCE AND PASSION FOR STORYTELLING MAKE HER A REMARKABLE TALENT IN THE PHOTOGRAPHY WORLD.
                        </p>
                    </div>

                    {/* Professional Life Section */}
                    <div className="flex-1 border-b border-black p-8 lg:p-12">
                        <h2 className="text-[12px] font-mono uppercase tracking-wider text-black mb-8 -ml-4">
                            PROFESSIONAL LIFE
                        </h2>
                        <p className="text-[12px] font-mono uppercase tracking-wider text-black leading-[1.4] text-justify">
                            WITH OVER A DECADE OF EXPERIENCE IN THE PHOTOGRAPHY INDUSTRY, AUDREY HAS WORKED WITH PRESTIGIOUS CLIENTS AND PUBLICATIONS WORLDWIDE. HER PROFESSIONAL JOURNEY BEGAN WITH A FOCUS ON PORTRAIT PHOTOGRAPHY, WHERE SHE DEVELOPED HER SIGNATURE STYLE OF CAPTURING AUTHENTIC MOMENTS AND GENUINE EMOTIONS. THROUGHOUT HER CAREER, SHE HAS EXPANDED HER EXPERTISE TO INCLUDE COMMERCIAL PHOTOGRAPHY, EDITORIAL WORK, AND FINE ART PROJECTS. HER COMMITMENT TO CONTINUOUS LEARNING AND INNOVATION HAS EARNED HER RECOGNITION IN THE INDUSTRY AND A LOYAL FOLLOWING OF CLIENTS WHO VALUE HER ARTISTIC VISION AND PROFESSIONALISM.
                        </p>
                    </div>

                    {/* Passions Section */}
                    <div className="flex-1 p-8 lg:p-12 border-b border-black lg:border-b-0">
                        <h2 className="text-[12px] font-mono uppercase tracking-wider text-black mb-8 -ml-4">
                            PASSIONS
                        </h2>
                        <p className="text-[12px] font-mono uppercase tracking-wider text-black leading-[1.4] text-justify">
                            MY PASSIONS ARE LONG WALKS ON THE ICY COLD CONNECTICUT ATLANTIC IN FEBRUARY AND I REVEL IN CAPTURING THE PERFECT DUO SHOTS ALONE. QUIET HOURS SPENT WITH SOFT CLASSICAL MUSIC AND SIMPLE AESTHETIC EXPERIENCES THROUGH HAND-CRAFTED DESIGN ELEMENTS. THERE IS SOMETHING BEAUTIFUL ABOUT FINDING PEACE IN SILENCE AND SOLITUDE, AND I STRIVE TO BRING THIS SENSE OF TRANQUILITY INTO MY PHOTOGRAPHIC WORK. MY PASSION FOR DETAIL AND AESTHETIC PERFECTION DRIVES ME TO CREATE IMAGES THAT RESONATE WITH VIEWERS ON A DEEP EMOTIONAL LEVEL.
                        </p>
                    </div>
                </div>

                {/* Right Column - Image (2/3 of screen) */}
                <div className="w-full lg:w-2/3 relative h-64 lg:h-full">
                    <img
                        src="https://picsum.photos/800/1200?grayscale"
                        alt="Artistic portrait photograph"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default AboutPageContent;