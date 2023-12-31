import FAQs from '@/components/FAQs'
import Contact from '@/components/contact'
import About from '@/components/about'
import CoursesOffered from '@/components/coursesoffered'
import Banner from '../components/banner'
import BestChoiceContainer from "../components/BestChoice"
// import Carousel from '@/components/Carousel'
import TestimonialsContainer from '@/components/Testimonials'
import AdCarousal from '@/components/AdCarousal'
import Footer from '@/components/footer'
import Achieve from '@/components/achievers'
import Modal from '@/components/DetailCollector'

export default function Home() {
  return (
    <main>
      <AdCarousal />
      <Banner />
      <Modal/>
      {/* <Carousel /> */}
      <Achieve />
      {/* <CheckoutForm /> */}
      <CoursesOffered />
      <BestChoiceContainer />
      <FAQs />
      <About />
      <TestimonialsContainer />
      <Contact />
      <Footer />
    </main>
  )
}
