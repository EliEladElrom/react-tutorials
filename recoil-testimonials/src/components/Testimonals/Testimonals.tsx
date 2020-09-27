import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import './Testimonals.scss'
import { useRecoilValue } from 'recoil'
import TestimonialsItem from './TestimonialsItem'
import { getTestimonialsPosts } from '../../recoil/selectors/testimonialsSelectors'

const Testimonials = () => {
  const testimonials: any = useRecoilValue(getTestimonialsPosts)
  return (
    <>
        <Carousel
         showArrows={true}
         infiniteLoop={true}
         showThumbs={false}
         showStatus={false}
         autoPlay={true}
         interval={6500}
       >
         {testimonials.map((testimonial: any) => (
           <TestimonialsItem testimonial={testimonial} />
         ))}
       </Carousel>
    </>
  )
}
export default Testimonials
