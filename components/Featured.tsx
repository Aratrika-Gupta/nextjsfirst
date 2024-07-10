"use client"
import artData from "@/data/music_courses.json";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";
interface Course{
    id: number,
    title: string
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,
}
export default function Featured(){
    const featured = artData.courses.filter((course:Course) => course.isFeatured)
    return(
        <div className="py-12 bg-black-900">
            <div>
                <div className="text-center py-10">
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl py-5">Discover the avant-garde at the Vanguard Art Pavilion, where modern art comes to life. Immerse yourself in groundbreaking exhibitions, captivating installations, and thought-provoking pieces from the world's most innovative artists. </p>
                </div>
            </div>
            <div className="mt-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {featured.map((course:Course) =>(
                        <div key={course.id}className="flex justify-center">
                            <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                            <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                                <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.title}</p>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{course.description}</p>
                            </div>
                            </BackgroundGradient>
                        </div>
                    ))}
                </div>
            </div>
            <div>3</div>
        </div>
    )
}