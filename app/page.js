import Header from "./components/Header";
import HeroPage from "./components/Hero";
import Image from "next/image";


export default function Home() {
  return (
    <main className="main">
      <div class="absolute top-0 left-0 mix-blend-color-dodge z-10 w-[200px] lg:w-[400px] opacity-50">
        <Image src="https://res.cloudinary.com/dtrqikle5/image/upload/v1697800064/top-left-img_wvbny5.png" width={700} height={700} alt="top-left" />
      </div>
      <div className="py-6">
        <Header />
      </div>
      <div className="mt-24 lg:mt-0 lg:px-24">
        <HeroPage />
      </div>
    </main>
  );
}
