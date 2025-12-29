"use client";

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Pricing from '@/components/Pricing';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

import React from 'react'

const page = () => {
  return (
  
    <div>
    <Navbar/>
    <Hero />
    <Services/>
    <About/>
    <Pricing/>
    <CTA/>
    <Footer/>


      
      
    </div>
  )
}

export default page