import React from 'react'
import Image from 'next/image';

export default function Aboutpage() {
  return (
    <main className="main_3 h-screen">
      <div class="absolute top-0 left-0 mix-blend-color-dodge z-10 w-[200px] lg:w-[400px] opacity-50">
        <Image
          src="https://res.cloudinary.com/dtrqikle5/image/upload/v1697800064/top-left-img_wvbny5.png"
          alt="top-left"
          width={600}
          height={600}
        />
      </div>
      <div class="absolute bottom-0 right-0 mix-blend-color-dodge z-10 w-[300px] lg:w-[400px] opacity-50">
        <Image
          src="https://res.cloudinary.com/dtrqikle5/image/upload/v1697800031/circles_gdp5rv.png"
          className="animate-pulse-slow"
          alt="top-left"
          width={600}
          height={600}
        />
      </div>
      <div class="absolute bottom-0 xl:left-[-16%] hidden lg:block lg:left-[-19%] md:  z-10 w-[400px] lg:w-[500px] opacity-50">
        <Image
          src="https://res.cloudinary.com/dtrqikle5/image/upload/v1697804202/avatar_vyl0yq.png"
          className=""
          alt="top-left"
          width={600}
          height={600}
        />
      </div>
    </main>
  );
}

// https://res.cloudinary.com/dtrqikle5/image/upload/v1697800031/circles_gdp5rv.png