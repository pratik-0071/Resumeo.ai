import React from 'react'
import Navbar from '../Components/Navbar.jsx';
import Footer from '../Components/Footer.jsx';
import Wallpaper from '../fav_wallpaper.jpg';

const Aboutus = () => {
  return (
    <div>
        <Navbar/>

        <div className="image px-10">
          <img src={Wallpaper} className='h-96 w-screen rounded-xl pxy-10'/>
        </div>

        <div className="content content-center p-10 font-normal text-xl">
        <p>Lorem ipsum dolor sit amet. Quo eligendi illum et quas dolorem a doloremque deleniti ab eveniet officiis eum voluptatem incidunt et animi inventore. Et necessitatibus labore sed maiores Quis ut illo enim ut explicabo aspernatur? Est necessitatibus harum et quia minus aut iure unde qui optio sequi At provident iste. Est fugiat eveniet est libero voluptas ad laudantium sapiente sed commodi culpa est blanditiis quam qui aliquid molestiae.

Non maiores veritatis in quos perspiciatis in amet amet quo fugiat vitae non sapiente consequatur ut voluptatibus maiores aut laborum molestias. Et repudiandae necessitatibus ut accusamus voluptatem At repellat neque. Quo magni velit hic obcaecati quis aut veritatis sapiente ea architecto facilis.

Id adipisci vero non totam reiciendis vel enim optio ea doloremque voluptatibus. Ut neque totam At delectus eaque et animi dolore ea assumenda suscipit? Ab explicabo recusandae qui Quis dolor in sint blanditiis eos numquam adipisci qui sint beatae non aspernatur provident.</p>

    <p>Lorem ipsum dolor sit amet. Quo eligendi illum et quas dolorem a doloremque deleniti ab eveniet officiis eum voluptatem incidunt et animi inventore. Et necessitatibus labore sed maiores Quis ut illo enim ut explicabo aspernatur? Est necessitatibus harum et quia minus aut iure unde qui optio sequi At provident iste. Est fugiat eveniet est libero voluptas ad laudantium sapiente sed commodi culpa est blanditiis quam qui aliquid molestiae.

Non maiores veritatis in quos perspiciatis in amet amet quo fugiat vitae non sapiente consequatur ut voluptatibus maiores aut laborum molestias. Et repudiandae necessitatibus ut accusamus voluptatem At repellat neque. Quo magni velit hic obcaecati quis aut veritatis sapiente ea architecto facilis.

Id adipisci vero non totam reiciendis vel enim optio ea doloremque voluptatibus. Ut neque totam At delectus eaque et animi dolore ea assumenda suscipit? Ab explicabo recusandae qui Quis dolor in sint blanditiis eos numquam adipisci qui sint beatae non aspernatur provident.</p>
 </div>

        <Footer/>
    </div>
  )
}

export default Aboutus