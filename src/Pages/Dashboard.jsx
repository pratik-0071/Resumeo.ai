import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Components/Navbar.jsx';
import Footer from '../Components/Footer.jsx';
import { FaPlus } from "react-icons/fa6";


const Dashboard = () => {
  return (
    <div>
        <Navbar/>

        <div className="header text-4xl text-left p-10 font-medium">Your resumes</div>


        <div className="cards flex justify-start space-x-7">
            <div className="card w-96 h-200 bg-base-100 shadow-xl ml-10" onClick={()=>document.getElementById('my_modal_2').showModal()}>
                <div className="card-body place-items-center">
                <FaPlus className='h-100 w-100 '/>
                <p>Create a new resume</p>
                <p className='text-gray-400'>create your new resume by either manually or with AI</p>

                <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
            <h3 className="font-bold text-lg text-left">Select either one !</h3>
            {/* <p className="py-4">Press ESC key or click outside to close</p> */}
            <Link to='/manualbuild' className='btn mt-5' >Create Manually</Link> <br></br>
           

            <Link to='AIbuild' className='btn mt-5'>Create with AI</Link>

        </div>
        <form method="dialog" className="modal-backdrop">
            <button>close</button>
        </form>
        </dialog>
            </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">Frontend Developer Resume</h2>
                <p className='text-gray-400 text-left'>Created on : 15/06/2024</p>
                <p className='text-gray-400 text-left'>Size : 12.46 MB</p>
                <div className="card-actions justify-end"></div>
            </div>
        </div>

        
        </div>
    </div>
  )
}

export default Dashboard