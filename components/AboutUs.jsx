import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import { aboutusbanner, carbackground, carbackground2 } from '../src/assets';
import { FaBuilding, FaSmile, FaHandshake, FaCity, FaCar } from 'react-icons/fa';
import 'aos/dist/aos.css';

const AboutUs = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 2000 });

    const video = videoRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play();
        } else {
          video.pause();
        }
      },
      {
        threshold: 0.5, // Adjust this threshold as needed
      }
    );

    if (video) {
      observer.observe(video);
    }

    return () => {
      if (video) {
        observer.unobserve(video);
      }
    };
  }, []);

  const values = [
    {
      title: 'Integrity',
      description: 'We uphold the highest standards of integrity in all our actions.',
    },
    {
      title: 'Customer Commitment',
      description: 'We develop relationships that make a positive difference in our customers’ lives.',
    },
    {
      title: 'Quality',
      description: 'We provide outstanding products and unsurpassed service that, together, deliver premium value to our customers.',
    },
  ];

  const teamMembers = [
    {
      name: 'John Doe',
      role: 'CEO',
      imageUrl: 'team-member-1.jpg',
      description: 'John is the visionary behind our company, leading us towards new heights with his expertise and dedication.',
    },
    {
      name: 'Jane Smith',
      role: 'CTO',
      imageUrl: 'team-member-2.jpg',
      description: 'Jane is responsible for overseeing all technical aspects of our company, ensuring we stay ahead of the curve.',
    },
    {
      name: 'Alice Johnson',
      role: 'CFO',
      imageUrl: 'team-member-3.jpg',
      description: 'Alice manages our finances with precision and care, making sure we are on a solid financial footing.',
    },
  ];

  return (
    <>
      <div>
        <link
          rel="stylesheet"
          // href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
      </div>


      {/* About TRIPC */}
      <div
        className="relative isolate overflow-hidden px-6 py-12 sm:py-16 lg:py-32 lg:px-0 bg-gray-500/50 backdrop-blur-lg"
        style={{
          backgroundImage: `url(${aboutusbanner})`
        }}
      >
        <div className="absolute inset-0 z-0"></div>
        <div className="relative z-10 mx-auto max-w-7xl lg:gap-8">
          <div className="">
            <div className="lg:col-span-1 lg:pr-8">
              <h1 className="text-center mt-8 text-xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white" data-aos="slide-left" data-aos-delay="100">
                About TRIP-C
              </h1>
              <p className="text-center mt-4 text-sm sm:text-lg md:text-xl leading-8 font-bold text-white" data-aos="slide-right" data-aos-delay="200">
                At Trip-C.com, we believe that travel should be an <br /> enriching and enjoyable experience.
                Founded in [Year], <br /> we have been dedicated to providing top-quality travel services to
                our clients.
              </p>
              <p className="text-center mt-6 text-sm sm:text-lg md:text-xl leading-8 text-white" data-aos="slide-left" data-aos-delay="300">
                Our mission is to make travel easy, affordable, and accessible for everyone.
                Our team of experienced professionals is passionate about travel and committed to
                delivering exceptional service. Meet our team and learn more about the people who
                make Trip-C.com the preferred choice for travelers around the world.
              </p>
            </div>
          </div>
        </div>
      </div>


      {/* About Company People Information */}
      <div className=" min-h-screen py-10 bg-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900">About Us</h1>
            <p className="mt-4 text-gray-600">
              Learn more about our mission, values, and the team behind our success.
            </p>
          </div>

          {/* About Ceo */}
          <div className="mt-10 text-center ">
            <h2 className="text-3xl font-semibold text-gray-800">Our Team</h2>
            <div className="mt-8 flex flex-wrap justify-center">
              <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
                <div className="bg-gray-400 rounded-lg shadow-lg p-6" data-aos="flip-right" data-aos-delay="200">
                  <img className="w-24 h-24 rounded-full mx-auto" src={carbackground} alt="Team Member 1" />
                  <h2 className="text-xl font-semibold text-gray-900 mt-4">Sivananda KM</h2>
                  <p className="text-gray-800">Proprietor</p>
                </div>
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
                <div className="bg-gray-400 rounded-lg shadow-lg p-6" data-aos="flip-left" data-aos-delay="200">
                  <img className="w-24 h-24 rounded-full mx-auto" src={carbackground2} alt="Team Member 2" />
                  <h2 className="text-xl font-semibold text-gray-900 mt-4">Unknown</h2>
                  <p className="text-gray-800">CTO</p>
                </div>
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
                <div className="bg-gray-400 rounded-lg shadow-lg p-6" data-aos="flip-up" data-aos-delay="800">
                  <img className="w-24 h-24 rounded-full mx-auto" src={aboutusbanner} alt="Team Member 3" />
                  <h2 className="text-xl font-semibold text-gray-900 mt-4">Unknown</h2>
                  <p className="text-gray-800">CFO</p>
                </div>
              </div>
            </div>
          </div>

          {/* Our Values Section */}
          <div className="mt-10">
            <h2 className="text-3xl font-semibold text-gray-800 text-center">Our Values</h2>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value) => (
                <div key={value.title} className="bg-gray-700 rounded-lg shadow-lg p-6 text-center" data-aos="flip-up" data-aos-delay="200">
                  <h3 className="text-2xl font-semibold text-gray-100">{value.title}</h3>
                  <p className="mt-2 text-white">{value.description}</p>
                </div>
              ))}
            </div>
          </div>



        </div>
      </div>

      {/* Why Choose Us Section with Video */}
      <div className="relative isolate overflow-hidden bg-gray-300 px-6 py-12 sm:py-16 lg:overflow-visible lg:px-0">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="lg:col-span-1 lg:pr-8">
            <div className="lg:max-w-lg">
              <h1 className="mt-2 text-3xl font-semibold tracking-tight text-gray-700 sm:text-4xl">
                Why Choose Us?
              </h1>
              <p className="mt-8 text-lg leading-8 text-gray-500">
                Reliable Services: We offer a range of services tailored to your needs, ensuring a
                smooth and hassle-free travel experience.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-500">
                Experienced Team: Our team of professionals is dedicated to providing the best
                possible service.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-500">
                Customer Satisfaction: We prioritize your comfort and satisfaction, with a focus on
                delivering exceptional value.
              </p>
            </div>
          </div>
          <div className="lg:col-span-1 lg:pl-8 flex items-center justify-center">
            <div className="lg:max-w-lg w-full">
              <div className="aspect-w-16 aspect-h-9">
                <video src="/aboutuscarvideo.mp4" className="w-full rounded-lg shadow-lg" type="video/mp4" loop autoPlay muted></video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
