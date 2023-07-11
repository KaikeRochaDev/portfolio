import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

const data = [
  {
    avatar: AVTR1,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi quidem nobis omnis beatae incidunt  accusamus quasi, aut reiciendis eum dolore eaque optio nemo. Modi porro facere atque non.",
  },
  {
    avatar: AVTR2,
    name: "Shata Wale",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi quidem nobis omnis beatae incidunt quibusdam laudantium accusamus quasi, aut reiciendis eum dolore eaque optio nemo.  non.",
  },
  {
    avatar: AVTR3,
    name: "Kwame Despite",
    review:
      "Lorem ipsum, consectetur adipisicing elit. Modi quidem nobis omnis beatae incidunt quibusdam laudantium accusamus quasi, aut reiciendis eum dolore eaque optio nemo. Modi porro facere atque non.",
  },
  {
    avatar: AVTR4,
    name: "Zofia Nagan",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi quidem nobis omnis beatae incidunt quibusdam laudantium accusamus quasi, aut reiciendis eum dolore eaque optio nemo.",
  },
];

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Feedbacks dos clientes</h5>
      <h2>Depoimentos</h2>

      <div className="container testimonials__container">
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <article key={index} className='testimonial'>
                <div className="client__avatar">
                  <img src={avatar}/>
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>
                  {review}
                </small>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Testimonials