import React from 'react'

const TestimonialsItem = (props: ITestimonialsItemProps) => {
  const shortenText = (text: string, startingPoint: number, maxLength: number) => {
    return text.length > maxLength ? text.slice(startingPoint, maxLength) : text
  }
  return (
    <>
      <div>
        <img src={props.testimonial.thumbnail} alt={props.testimonial.author} />
        <div className="myCarousel">
          <h3>{props.testimonial.author}</h3>
          <h4>{props.testimonial.jobTitle}</h4>
          <p>{`${shortenText(props.testimonial.content, 0, 370)} ...`}</p>
        </div>
      </div>
    </>
  )
}

interface ITestimonialsItemProps {
  testimonial: any
}

export default TestimonialsItem
