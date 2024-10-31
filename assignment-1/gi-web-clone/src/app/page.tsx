'use client'

import Image from "next/image";
import Navbar from "./components/Navbar/page";
import cover from '../../public/governorImage.png';
import Slider from 'react-slick';
import Footer from "./components/Footer/page";


const Images = [
  "https://www.governorsindh.com/_next/static/media/slideShow1.6f890b58.jpg",
  "https://www.governorsindh.com/_next/static/media/slideShow3.0006489a.jpg",
  "https://www.governorsindh.com/_next/static/media/slideShow2.ce4d5430.jpg",
  "https://www.governorsindh.com/_next/static/media/slideShow4.d9ba1e2d.jpg",
  "https://www.governorsindh.com/_next/static/media/slideShow5.b502aa01.jpg",
  "https://www.governorsindh.com/_next/static/media/slideShow6.03103579.jpg",
  "https://www.governorsindh.com/_next/static/media/slideShow8.4b79537a.jpg"
 ]

export default function Home() {

   const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
 
  return (
  <>
   <div className=" inset-0">
    <Navbar />
  </div>

<section className="relative w-full h-screen sm:h-[700px] mt-20 md:mt-0">
  <div className="absolute inset-0">
    <Image
      src="https://www.governorsindh.com/bg_house.jpg"
      width={400}
      height={400}
      alt="banner"
      className="w-full h-full opacity-30 object-cover"
    />
  </div>

  <div className="flex flex-col md:flex-row items-center justify-between ml-4 md:ml-10">
    <div className="py-8 md:py-16 relative h-fit w-full md:w-1/2 px-4 sm:px-8">
      <h1 className="text-[#06306bd2] font-extrabold text-3xl sm:text-4xl md:text-[3rem] lg:text-[4rem] mt-5 md:mt-10">
        Governor Sindh
      </h1>
      <h1 className="text-[#204c8a] font-normal text-2xl md:mt-8 sm:text-3xl md:text-[42px]">
        Kamran Khan Tessori
      </h1>
      <h1 className="text-sky-400 text-xl sm:text-2xl md:text-[40px] leading-7 sm:leading-[45px] font-extrabold my-5">
        Certified Cloud <br /> Applied Generative AI <br /> Engineer (GenEng)
      </h1>
      <h1 className="text-[#204c8a] text-xl sm:text-2xl font-extrabold">
        Earn up to $5,000 / month
      </h1>
      <h1 className="text-[#204c8a] text-lg sm:text-2xl font-extrabold mt-5">
        Now admissions are open in<br />Hyderabad
      </h1>
      <div className="flex flex-col sm:flex-row gap-5 sm:gap-20 items-center">
        <button className="bg-[#204c8a] text-white text-center px-8 sm:px-14 rounded-md py-3 sm:py-4 font-extrabold mt-5 md:mt-10 mb-8">
          Apply Now
        </button>
        <div className="total flex flex-col items-center mt-5 md:mt-10 mb-8">
          <h1 className="text-[#204c8a] text-2xl sm:text-4xl font-bold">562,143</h1>
          <h3 className="text-[#204c8a] text-center">Accepted Applications</h3>
        </div>
      </div>
    </div>
    <div className="flex w-full md:w-[30%] justify-center md:justify-end relative mt-5">
      <Image
        src={cover}
        alt="Cover Image"
        width={500}
        height={500}
        className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[640px] w-full md:w-[700px] object-cover ml-0 md:ml-20"
      />
    </div>
  </div>
</section>


<section id="next" className=" w-full h-auto p-4 flex flex-col gap-5 items-center justify-center">
        <div className="mt-16 mb-8 text-center text-wrap text-4xl text-[#204c8c] max-w-[2000px] font-bold ">
          <h1>
            Certified Cloud Applied Generative AI Engineer (GenEng) and
            Solopreneur Developing Billion-Dollar Valued Developers and
            Solopreneurs
          </h1>
        </div>
        <p className=" text-gray-700 text-[20px] leading-1 mx-2 mb-10">
          The pace of technological change is accelerating, big players like
          Microsoft, Amazon, Google, and OpenAI are winning by providing
          infrastructure, large AI foundation models, frameworks, 3D Metaverse
          experiences, and massive distribution networks. Solopreneurs trained
          in this program will win by automating work typically outsourced to
          employees, by directly connecting to customers by eliminating the
          middleman, and by developing vertical metaverses, thus paving the way
          for the first billion-dollar valued solopreneur businesses. This
          program has the objective to train this new breed of billion-dollar
          solopreneurs. These solopreneurs will adopt the ultra-lean business
          model and work independently and will not need to hire employees or
          other team members.
        </p>
        <div className="images mx-auto md:mx-0 w-full grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 gap-8">
          <Image
            src="https://www.governorsindh.com/_next/static/media/imageWebsite.5c6ae62f.jpg"
            alt="first"
            width={300}
            height={300}
            className=" rounded-md shadow-lg shadow-black w-full h-full"
          ></Image>
          <Image
            src="https://www.governorsindh.com/_next/static/media/imageWebsite2.a102c7b5.jpg"
            alt="first"
            width={300}
            height={300}
            className=" rounded-md shadow-lg shadow-black w-full h-full"
          ></Image>
          <Image
            src="https://www.governorsindh.com/_next/static/media/imageWebsite3.b845fe78.jpg"
            alt="first"
            width={300}
            height={300}
            className=" rounded-md shadow-lg shadow-black w-full h-full"
          ></Image>
        </div>
        </section>
      
         {/* Swiper Slider */}
         <section className="mt-16 mb-8 p-4 mx:auto md:mx-0">
         <div className="slider-container w-full">
           <Slider {...settings}>
             {Images.map((imgSrc, index) => (
               <div key={index} className="w-full h-[600px] relative"> 
                 <Image 
                   src={imgSrc} 
                   alt={`Slide ${index + 1}`} 
                   layout="fill" 
                   objectFit="cover" 
                   className="" 
                 />
               </div>
               
             ))}
           </Slider>
         </div>
       </section>
       

        <h1 className="mt-16 mb-8 text-wrap text-4xl text-[#204c8c] md:ml-10 font-bold text-center md:text-left">Advance Courses</h1>
        <div className="images w-full  grid sm:grid-cols-2 grid-cols-1 md:grid-cols-4 gap-8 md:mx-auto md:mb-10">
        <div className="max-w-xs bg-white rounded-lg shadow-lg shadow-slate-400 overflow-hidden mx-auto md:m-4 transform transition-transform duration-300 ease-in-out hover:scale-110">
      <Image src="https://www.governorsindh.com/_next/static/media/programming_fundamentals.49cca4e9.jpg" alt="" width={400} height={250} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl  text-center font-semibold text-gray-800"> Programming Fundementals</h3>
      </div>
    </div>
    <div className="max-w-xs bg-white rounded-lg shadow-lg shadow-slate-400 overflow-hidden mx-auto md:m-4 transform transition-transform duration-300 ease-in-out hover:scale-110">
      <Image src="https://www.governorsindh.com/_next/static/media/nextjs.3dff0f70.jpg" alt="" width={400} height={250} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl text-center font-semibold text-gray-800">Web 2 Using Next.js</h3>
      </div>
    </div>
    <div className="max-w-xs bg-white rounded-lg shadow-lg  shadow-slate-400 overflow-hidden mx-auto md:m-4 transform transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer">
      <Image src="https://www.governorsindh.com/_next/static/media/earn_as_your_learn.b8248a49.jpg" alt="" width={400} height={250} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl text-center p-2 font-semibold text-gray-800">Earn as You Learn</h3>
      </div>
    </div>
        </div>

        <h1 className="mt-16 mb-8 text-wrap text-4xl text-[#204c8c] md:ml-10 font-bold text-center md:text-left ">Advance Courses</h1>
        <div className="images w-full  grid sm:grid-cols-2 grid-cols-1 md:grid-cols-4 gap-4 md:mb-10">
    <div className="max-w-xs bg-white rounded-lg shadow-lg shadow-slate-400 overflow-hidden mx-auto md:m-4 transform transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer">
      <Image src="https://www.governorsindh.com/_next/static/media/AI.39397d24.jpg" alt="" width={400} height={250} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl text-center font-semibold text-gray-800">Artificial Intelligence</h3>
      </div>
    </div>
    <div className="max-w-xs bg-white rounded-lg shadow-lg  shadow-slate-400 overflow-hidden mx-auto md:m-4 transform transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer">
      <Image src="https://www.governorsindh.com/_next/static/media/metaverse.06eccb60.jpg" alt="" width={400} height={250} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl text-center p-2 font-semibold text-gray-800">Web 3 Mataverce</h3>
      </div>
      </div>
      <div className="max-w-xs bg-white rounded-lg shadow-lg  shadow-slate-400 overflow-hidden mx-auto md:m-4 transform transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer">
      <Image src="https://www.governorsindh.com/_next/static/media/cloudComputing.7260492c.jpg" alt="" width={400} height={250} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl text-center p-2 font-semibold text-gray-800">Cloud Computing</h3>
      </div>
    </div>
    <div className="max-w-xs bg-white rounded-lg shadow-lg  shadow-slate-400 overflow-hidden mx-auto md:m-4 transform transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer">
      <Image src="https://www.governorsindh.com/_next/static/media/iot.16f7b003.jpg" alt="" width={400} height={250} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl text-center p-2 font-semibold text-gray-800">Ambient Computing IoT</h3>
      </div>
    </div>
    <div className="max-w-xs bg-white rounded-lg shadow-lg  shadow-slate-400 overflow-hidden mx-auto md:m-4 transform transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer">
      <Image src="https://www.governorsindh.com/_next/static/media/genomics.b87789f1.jpg" alt="" width={400} height={250} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl text-center p-2 font-semibold text-gray-800">Genomics and Bioinformatics</h3>
      </div>
    </div>
    <div className="max-w-xs bg-white rounded-lg shadow-lg  shadow-slate-400 overflow-hidden mx-auto md:m-4 transform transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer">
      <Image src="https://www.governorsindh.com/_next/static/media/automation.a77dbbe8.jpg" alt="" width={400} height={250} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl text-center p-2 font-semibold text-gray-800">Network Programmablity and Automation</h3>
      </div>
    </div>
        </div>
    
    <Footer/>
  </>
  );
}
