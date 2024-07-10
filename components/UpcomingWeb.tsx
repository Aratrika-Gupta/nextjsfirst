"use client";
import { HoverEffect } from "./ui/card-hover-effect";
export default function Webinars(){
    const featuredWebinars = [
        {
          title: 'Street Art and Graffiti',
          description:
          "Learn about the history and techniques of street art and graffiti. Participants can create their own street art pieces in a controlled environment.",
          slug: 'understanding-music-theory',
          isFeatured: true,
        },
        {
          title: 'Interactive and Installation Art',
          description:
            'Study the concepts behind interactive and installation art. Participants can design and build their own installations using various materials and technology.',
          slug: 'the-art-of-songwriting',
          isFeatured: true,
        },
        {
          title: 'Art Therapy and Mindfulness',
          description:
            'Use art as a form of therapy and mindfulness practice. Participants can explore their emotions and thoughts through creative expression.',
          slug: 'mastering-your-instrument',
          isFeatured: true,
        },
        {
          title: 'Art History and Critique',
          description:
            'Gain a deeper understanding of modern art history and develop skills in art critique. This workshop can include lectures, discussions, and hands-on activities.',
          slug: 'music-production-essentials',
          isFeatured: true,
        },
        // Added two more webinars
        {
          title: 'Abstract Painting Techniques',
          description:
            'Explore different techniques and styles in abstract painting. Participants can experiment with color, texture, and composition to create their own unique pieces.',
          slug: 'live-performance-techniques',
          isFeatured: true,
        },
        {
            title: 'Mixed Media Art',
            description:
              'Encourage creativity by combining different art forms such as painting, collage, and sculpture. Participants can experiment with various materials and techniques to create mixed media artworks.',
            slug: 'digital-music-marketing',
            isFeatured: true,
          },
        ];
      
    return(
        <div className="p-12 bg-#5A639C text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center">
                    <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">Transform Your Imagination into Masterpieces</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-yellow-200 sm:text-4xl">Dive into the Vanguard Museum's Dynamic Art Workshops</p>
                </div>
                <div className="mt-10">
                    <HoverEffect items={featuredWebinars.map(webinar => (
                        {
                            title:webinar.title,
                            description: webinar.description,
                            link:'/'
                        }
                    ))} />
                </div>
            </div>
        </div>
    )
}