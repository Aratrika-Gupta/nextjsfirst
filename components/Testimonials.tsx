"use client";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
const musicSchoolTestimonials = [
    {
      quote:
        'The Vanguard Museum is a gem! The rotating exhibits are always thought-provoking and beautifully curated. I attended the digital art workshop and learned so much about modern techniques. Highly recommend to all art lovers!',
      name: 'Alex Johnson',
      title: '',
    },
    {
      quote:
        "Incredible experience! The museum's collection of modern art is both eclectic and inspiring. The interactive installations were a hit with my kids, and the staff was friendly and knowledgeable. Can't wait to visit again.",
      name: 'Samantha Lee',
      title: '',
    },
    {
      quote:
        "A wonderful place to spend an afternoon. The guided tour was informative and engaging. I particularly loved the sculpture garden. The only downside was the cafe being a bit crowded. Overall, a fantastic museum.",
      name: 'Michael Chen',
      title: '',
    },
    {
      quote:
        'The Vanguard Museum of Modern Art stands out with its innovative exhibitions and diverse collection. The museum\'s commitment to showcasing both established and emerging artists makes it a dynamic place to visit. Their educational workshops offer a hands-on experience that is both enriching and enjoyable.',
      name: 'The Art Review',
      title: '',
    },
    {
      quote:
        'A must-visit for anyone interested in contemporary art. The Vanguard Museum not only displays cutting-edge artwork but also engages visitors through interactive exhibits and workshops. The museum\'s ability to blend traditional art forms with modern technology is truly impressive."',
      name: 'Cultural Traveller',
      title: '',
    },
  ];

export default function Testimonials(){
    return(
        <div className="text-white h-[40rem] w-full bg-black bg-grid-white/[0.2]">
            <h2 className="text-3xl font-bold text-center py-20">.HeAr ouR HArmOnIcal Art of SuccEsS.</h2>
            <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <InfiniteMovingCards
                items={musicSchoolTestimonials}
                direction="right"
                speed="slow" />
            </div>
            </div>
    )
}