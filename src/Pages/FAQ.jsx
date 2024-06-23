import React from 'react'
import Navbar from '../Components/Navbar.jsx';
import Footer from '../Components/Footer.jsx';

const FAQ = () => {
  return (
    <div>
        <Navbar/>

        <p className='text-3xl text-left p-10'>Frequently Asked Questions</p>

        <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" defaultChecked /> 
            <div className="collapse-title text-xl font-medium text-left ml-10">
                Why created resumeo ?
            </div>
            <div className="collapse-content text-left ml-10"> 
                <p>Because I was bored</p>
            </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" /> 
            <div className="collapse-title text-xl font-medium text-left ml-10">
                You didnt have a job ? 
            </div>
            <div className="collapse-content text-left ml-10"> 
                <p>As of now, i dont. JOBLESS</p>
            </div>
        </div>

        <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" /> 
            <div className="collapse-title text-xl font-medium text-left ml-10">
                Why should you use Resumeo.ai ?
            </div>
            <div className="collapse-content text-left ml-10"> 
                <p>I dont care if you use this or not. </p>
            </div>
        </div>

        <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" /> 
            <div className="collapse-title text-xl font-medium text-left ml-10">
                WHo are you ?
            </div>
            <div className="collapse-content text-left ml-10"> 
                <p>Fuck off</p>
            </div>
        </div>

        <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" /> 
            <div className="collapse-title text-xl font-medium text-left ml-10">
                Did MIT gave you Job ?
            </div>
            <div className="collapse-content text-left ml-10"> 
                <p>It gave me depression </p>
            </div>
        </div>

        <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" /> 
            <div className="collapse-title text-xl font-medium text-left ml-10">
                One thing you learned ? 
            </div>
            <div className="collapse-content text-left ml-10"> 
                <p>should've studied in 12th </p>
            </div>
        </div>

        <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" /> 
            <div className="collapse-title text-xl font-medium text-left ml-10">
                Best thing about MIT ?
            </div>
            <div className="collapse-content text-left ml-10"> 
                <p>Shwarma</p>
            </div>
        </div>

        <Footer/>
    </div>
  )
}

export default FAQ