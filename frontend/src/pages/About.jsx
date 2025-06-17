import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Welcome to Forever – your one-stop destination for quality, value, and convenience!</p>
          <p>At Forever, we believe shopping should be simple, enjoyable, and trustworthy. Our mission is to bring you a wide range of carefully curated products at affordable prices, all from the comfort of your home. Whether you're searching for the latest fashion trends, essential home goods, or everyday lifestyle products, we’ve got you covered.</p>
          <p>Founded with a passion for excellence, Forever is more than just a store — it's a promise of quality, customer satisfaction, and a seamless shopping experience. We are constantly updating our catalog with new and trending items to ensure that our customers have access to the best and most reliable products on the market.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>At Forever, our mission is to make online shopping simple, accessible, and enjoyable for everyone. We are committed to offering high-quality products at fair prices while delivering exceptional service at every step. We aim to create a shopping platform that not only meets your needs but exceeds your expectations — a place where trust, value, and customer satisfaction come first. Every product we offer and every decision we make is guided by our goal to bring convenience, innovation, and care to your shopping experience.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'> At Forever, we prioritize quality above all else. Every product listed on our platform undergoes a rigorous quality check process to ensure it meets our high standards.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>At Forever, we believe shopping should be simple and stress-free. Our user-friendly interface, secure payment options, and fast checkout process are designed to save you time and effort.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Customer satisfaction is at the heart of everything we do at Forever. Our dedicated support team is always ready to assist you with any questions, concerns, or feedback.</p>
        </div>
      </div>

      <NewsletterBox />

    </div>
  )
}

export default About
