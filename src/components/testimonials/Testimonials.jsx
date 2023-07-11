import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Feedbacks dos clientes</h5>
      <h2>Depoimentos</h2>

      <div className="container testimonials__container">
        <article className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar 1" />
          </div>
          <h5 className='client__name'>Ernest Achiever</h5>
          <small className='client__review'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga quia, ullam optio, laudantium architecto, facilis voluptates iusto repudiandae esse ex quibusdam quod
          </small>
        </article>

        <article className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR2} alt="Avatar 2" />
          </div>
          <h5 className='client__name'>Michael Jhonson</h5>
          <small className='client__review'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga quia, ullam optio, laudantium architecto, facilis voluptates iusto repudiandae esse ex quibusdam quod
          </small>
        </article>

        <article className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR3} alt="Avatar 3" />
          </div>

          <h5 className='client__name'>Logan Smith</h5>
          <small className='client__review'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga quia, ullam optio, laudantium architecto, facilis voluptates iusto repudiandae esse ex quibusdam quod
          </small>
        </article>

        <article className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR4} alt="Avatar 4" />
          </div>

          <h5 className='client__name'>Zofia Nagan</h5>
          <small className='client__review'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga quia, ullam optio, laudantium architecto, facilis voluptates iusto repudiandae esse ex quibusdam quod
          </small>
        </article>
      </div>
    </section>
  )
}

export default Testimonials