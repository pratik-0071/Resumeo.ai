import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Restem from '../restem.jpg';
import { FaCloudDownloadAlt } from "react-icons/fa";
import { IoShareOutline } from "react-icons/io5";




const Manual = () => {
  return (
    <div>
        <Navbar/>

        <h2 className='text-3xl font-medium text-left p-5 mt-5'>One step closer, Let's begin !</h2>

        <div className="buttons flex justify-end mr-10">
            <div className="download-btn btn flex justify-end mr-5">
                <FaCloudDownloadAlt />
                <p >Download</p>
            </div>

            <div className="share-btn btn flex justify-end  ">
            <IoShareOutline />

                <p >Share</p>
            </div>
        </div>


        <div className="builder bg-gray-400 h-fit rounded-lg w-screen  mb-10 mt-5">
            <div className="template flex-grow ">
                <img src={Restem} alt="Template" className='ml-40' />
            </div>

           

        <div className=" flex-grow collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium">Personal Info</div>
            <div className="collapse-content">
                <p className='font-medium'>Name</p>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs mt-2" />

                <p className='font-medium mt-2'>Email ID</p>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs mt-2" />

                <p className='font-medium mt-2'>Email ID</p>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs mt-2" />

                <p className='font-medium mt-2'>Github Link</p>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs mt-2" />

                <p className='font-medium mt-2'>Linkedin Profile Link</p>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs mt-2" />

                <p className='font-medium mt-2'>Contact number</p>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs mt-2" />

            </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">Education</div>
            <div className="collapse-content">
                
            <p className='font-medium'>Name of the College</p>
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs mt-2" />

            <p className='font-medium'>Degree Name !</p>
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs mt-2" />
            
            <p className='font-medium'>Started in (Year)</p>
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs mt-2" />

            <p className='font-medium'>Finished in (Year)</p>
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs mt-2" />


            </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">Work Experience</div>
            <div className="collapse-content">
                
            <p className='font-medium'>Company Name</p>
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs mt-2" />

            <p className='font-medium'>Your Position</p>
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs mt-2" />

            <p className='font-medium'>Started on</p>
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs mt-2" />

            <p className='font-medium'>Finished on </p>
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs mt-2" />

            <p className='font-medium'>Description</p>
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs mt-2" />

            </div>
        </div>



        </div>


        <Footer/>
    </div>
  )
}

export default Manual


 {/* <div className="inputs flex-grow text-left bg-sky-700 px-24 py-10">

                <h1 className='font-bold text-xl mb-2'>Personal Info</h1>

                <p className='font-medium'>Name</p>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs mt-2" />

                <p className='font-medium mt-2'>Email ID</p>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs mt-2" />

                <p className='font-medium mt-2'>Github Link</p>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs mt-2" />

                <p className='font-medium mt-2'>Linkedin Profile Link</p>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs mt-2" />

                <p className='font-medium mt-2'>Contact number</p>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs mt-2" />

            </div> */}