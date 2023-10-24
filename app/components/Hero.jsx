import Link from 'next/link'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import HeroImage from './Hero_image';
import Image from 'next/image';

export default function HeroPage() {
  return (
    <>
      <div className="w-full h-full bg-gradient-to-r from-bg-blue-950/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center lg:pt-40 lg:text-left h-full container mx-auto">
          <h1 className="capitalize lg:text-6xl md:text-4xl text-2xl text-white">
            transforming ideas <br /> into{" "}
            <span className="text-red-600 font-mono">digital reality</span>
          </h1>
          <p className="max-w-sm lg:max-w-xl mx-auto lg:mx-0 mb-10 lg:mb-16">
            As a Fontend dev i am specializes in creating and managing the user
            interface and user experience of websites and web applications.{" "}
          </p>
          <div className="flex justify-center lg:hidden relative">
            <button className="mx-auto lg:mx-0">
              <Link href="/project" className="group main_btn">
                <Image
                  src="https://res.cloudinary.com/dtrqikle5/image/upload/v1697828145/rounded-text_gznfi5.png"
                  alt=""
                  width={148}
                  height={148}
                  class="animate-spin-slow w-full h-full max-w-[141px] max-h-[148px]"
                />
                <BsArrowRight
                  size={22}
                  className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300"
                />
              </Link>
            </button>
          </div>
          {/*  */}
          <div className="hidden lg:block relative">
            <button className="mx-auto lg:mx-0">
              <Link href="/project" className="group main_btn">
                <Image
                  src="https://res.cloudinary.com/dtrqikle5/image/upload/v1697828145/rounded-text_gznfi5.png"
                  alt=""
                  width={148}
                  height={148}
                  class="animate-spin-slow w-full h-full max-w-[141px] max-h-[148px]"
                />
                <BsArrowRight
                  size={22}
                  className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300"
                />
              </Link>
            </button>
          </div>
        </div>
        <div className="absolute right-0 top-[18%] animate-pulse-slow md:right-0">
          <HeroImage />
        </div>
      </div>
    </>
  );
}
