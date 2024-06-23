import React from 'react'
import { Link } from 'react-router-dom';
import restem from '../restem.jpg';

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={restem} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Your Resume, Your Story: Start Here</h1>
      <p className="py-6">Welcome to Resumeo.ai, where your career aspirations take shape. Whether you're aiming to land your dream job or advance in your current career, our platform offers you two powerful ways to create a compelling resume. With our intuitive manual entry option, you can customize every detail to showcase your unique skills and experiences. Alternatively, harness the power of AI to generate a polished resume instantly, tailored to industry standards.</p>
      <Link to='/login'><button className="btn btn-primary">Get Started</button></Link>
    </div>
  </div>
</div>
  )
}

export default Hero