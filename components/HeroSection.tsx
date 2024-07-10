import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
export default function HeroSection(){
    return(
        <div className="h-full md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0" style={{color: 'white'}}>
            <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="red"/>
            <div className="p-20 relative z-10 w-full text-center">
                <h1 className="mt-30 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">VanGuard Art Pavilion</h1>
                <p className="mt-20 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">Our pavilion offers a dynamic space that challenges conventions and sparks creativity. Experience the pulse of contemporary art and be inspired by the vibrant fusion of color, form, and expression.</p>
            </div>
            <div className="mt-4">
                <Button borderRadius="1.75rem" className="bg-black text-black text-white border-neutral-200 border-slate-800">
                Scroll Down to Discover the Magic
                </Button>
            </div>
        </div>
    )
}