import React from 'react'
import Image from 'next/image';

export default function HeroImage() {
  return (
    <div className="hidden lg:flex lg:max-w-none">
      <Image
        src="https://res.cloudinary.com/dtrqikle5/image/upload/v1697804202/avatar_vyl0yq.png"
        alt="avater"
        className="translate-z-0"
        width={637}
        height={100}
      />
    </div>
  );
}
