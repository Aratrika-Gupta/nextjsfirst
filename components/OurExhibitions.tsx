"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
    {
      title: "Digital Dreams: The Future of Art",
      description:
        "This exhibit showcases mesmerizing works from renowned digital artists around the globe. Experience immersive virtual reality installations, interactive projections, and AI-generated art pieces that blur the lines between technology and creativity. Don’t miss the highlight: a VR journey through a surreal, ever-changing landscape that responds to your movements.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        </div>
      ),
    },
    {
      title: "Surreal Worlds: A Journey Beyond Reality",
      description:
        "Explore the fantastical and bizarre in \"Surreal Worlds,\" an exhibit featuring works from legendary surrealists like Salvador Dalí, René Magritte, and contemporary artists who push the boundaries of imagination. This exhibit invites you to question reality and dive into dreamlike landscapes, unexpected juxtapositions, and symbolic imagery.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
        </div>
      ),
    },
    {
      title: "Sculpting Time: Modern Kinetics",
      description:
        "This exhibit features dynamic sculptures and installations that move and change, powered by natural elements, motors, and even visitor interaction. Witness the fluidity and motion of works by artists like Alexander Calder and Theo Jansen. One of the must-see pieces is Jansen’s \"Strandbeest,\" a wind-powered walking sculpture.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        </div>
      ),
    },
    {
      title: "Echoes of Nature: Environmental Art",
      description:
        "This exhibit features eco-friendly art installations, recycled sculptures, and multimedia pieces that address environmental issues and celebrate nature’s beauty. Highlights include a massive installation made entirely of ocean plastic and a series of living plant sculptures.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        </div>
      ),
    },
  ];
export default function OurExhibitions(){
    return(
        <div>
            <StickyScroll content={content}/>
        </div>
    )
}