import React from "react"
import style from './contact.module.scss'

const Contact = () => (
  <section className={style.wrapper}>
    <h3 className={style.title}>Contacto</h3>
    <div class="vcard">
      <div class="name">Jorge Andres Suarez</div>
      <div class="title">Técnico Jardinero</div>
      <div class="location">Sant Cugat del Vallès</div>
      <a href="mailto:jorge@kipojardineria.com" class="email">jorge@kipojardineria.com</a>
      <a href="tel:+34608563482" class="tel phone">608 56 34 82</a>
    </div>
  </section>
)

export default Contact
