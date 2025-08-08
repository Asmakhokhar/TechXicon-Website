import React from 'react'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import About from '../components/About'
import Services from '../components/Services'
import AppDevelopment from '../components/AppDevelopment'
import Ecommerce from '../components/Ecommerce'
import Team from '../components/Team'
import Testimonial from '../components/Testimonial'
import Faq from '../components/Faq'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Main />
      <About />
      <Services />
      <AppDevelopment />
      <Ecommerce />
      <Team />
      <Testimonial />
      <Faq />
      <Contact />
      <Footer />
    </div>
  )
}
