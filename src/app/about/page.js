import React from "react";
import Abtpage from "../../../public/abtPage.jpg";
import Image from "next/image";
import Footer from "@/components/footer";
export default function aboutPage() {
  return (
    <>
      <div className="container mx-auto max-w-screen-xl px-4 py-8 mt-10">

        <div className="flex lg:flex-row flex-col lg:gap-8 sm:gap-10 gap-12 mt-8">
          <div className="w-full lg:w-6/12">
            <h2 className="w-full font-bold lg:text-5xl text-3xl lg:leading-10 leading-9 font-inter">ABOUT PHARMACAD</h2>
            <p className="font-light font-montserrat text-xl leading-7 text-justify text-gray-600 mt-6">
              Founded in 2016, Pharmacad is a leading coaching institute for GPAT, NIPER, and other M pharmacy, and MBA entrance exams that provide industrial training, B pharmacy / D pharmacy semester coaching, customized library, and relevant certificate courses via online and offline platforms.

              Our team at Pharmacad are united by a common desire to work towards grooming pharmaceutical students. We believe that the right direction and excellent comprehensive study materials will help a student in breaking every success record. Following this belief, we have nurtured the best pharmacy coaching classes to offer high-quality education to the aspirants in today’s highly competitive environment.</p>
          </div>

          <div className="w-full lg:w-6/12">
            <Image className="lg:block hidden w-full" src={Abtpage} alt="people discussing on board" />
            <Image className="lg:hidden sm:block hidden w-full" src={Abtpage} alt="people discussing on board" />
            <Image className="sm:hidden block w-full" src={Abtpage} alt="people discussing on board" />
          </div>
        </div>
        <div className="border-t border-gray-700 mt-10"></div>

        <div className="flex md:gap-14 gap-16 justify-between lg:mt-10 mt-10">
          <div className="w-full">
            <h2 className="font-bold lg:text-4xl text-2xl lg:leading-9 leading-7 text-gray-800 font-inter">Our Mission & Vision</h2>
            <p className="font-normal text-lg leading-6 text-gray-600 mt-6 w-full text-justify font-montserrat">We possess strong tie-ups and partnerships with leading industry professionals for certificate courses, job placements, and internship opportunities.</p>
            <p className="font-normal text-lg leading-6 text-gray-600 w-full mt-2 text-justify font-montserrat">We aim to deepen and extend knowledge in the field of pharmacy by creating a one-stop solution for all pharmacy students to help them achieve academic excellence and professional leadership.</p>
          </div>

        </div>

        <div className="container mx-auto py-8">
          <div className="flex items-center my-4">
            <div className="flex-grow bg-gray-500 h-px"></div>
            <p className="mx-4 text-black font-bold text-xl font-raleway">Coaching</p>
            <div className="flex-grow bg-gray-500 h-px"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#f2fff0] rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2 ">Specialized Team of Experts</h3>
              <p className="text-gray-600 font-montserrat">
                Our coaching services are provided by a dedicated team of industry experts. They have extensive knowledge and experience to help you prepare for your semester, entrance, and competitive examinations.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Comprehensive Exam Preparation</h3>
              <p className="text-gray-600 font-montserrat">
                We offer comprehensive coaching programs that cover all the essential topics and concepts required for your exams. Our goal is to equip you with the knowledge and skills necessary for success.
              </p>
            </div>

            <div className="bg-[#f2fff0] rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Personalized Approach</h3>
              <p className="text-gray-600 font-montserrat">
                We understand that each student has unique learning needs. Our coaching sessions are tailored to address your specific requirements, allowing you to learn at your own pace and focus on areas that require additional attention.
              </p>
            </div>
          </div>
        </div>


        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center my-8">
            <div className="flex-grow bg-gray-500 h-px"></div>
            <p className="mx-4 text-black text-xl font-bold">Certification</p>
            <div className="flex-grow bg-gray-500 h-px"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Industry Certificates</h3>
              <p className="text-gray-600 font-montserrat">
                Earn industry-recognized certificates in areas such as programming, design, digital marketing, and more. Enhance your skills and boost your resume with valuable certifications.
              </p>
            </div>

            <div className="bg-[#f2fff0] rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Job Placements</h3>
              <p className="text-gray-600 font-montserrat">
                Benefit from our strong partnerships with leading companies for job placements and internships. Gain practical experience and kickstart your career in your desired field.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Internship Opportunities</h3>
              <p className="text-gray-600 font-montserrat">
                Explore a wide range of internship opportunities with renowned organizations. Apply your knowledge, gain real-world exposure, and build valuable connections.
              </p>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center my-8">
            <div className="flex-grow bg-gray-500 h-px"></div>
            <p className="mx-4 text-black text-xl font-bold">Counseling</p>
            <div className="flex-grow bg-gray-500 h-px"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#f2fff0] rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Student-Centric Approach</h3>
              <p className="text-gray-600 font-montserrat">
                Our counseling services prioritize the needs and aspirations of students. We provide personalized guidance to help you choose a suitable career path and make informed decisions.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Feedback-Driven Mechanism</h3>
              <p className="text-gray-600 font-montserrat">
                We value your feedback and continuously improve our counseling process. We believe in creating a supportive environment where you can freely express your thoughts and concerns.
              </p>
            </div>

            <div className="bg-[#f2fff0] rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Career Path Guidance</h3>
              <p className="text-gray-600 font-montserrat">
                Our experienced counselors provide expert advice and guidance to help you explore different career paths in India and abroad. We help you align your goals and interests with suitable opportunities.
              </p>
            </div>
          </div>
        </div>



        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center my-8">
            <div className="flex-grow bg-gray-500 h-px"></div>
            <p className="mx-4 text-black text-xl font-bold">Co-Curricular</p>
            <div className="flex-grow bg-gray-500 h-px"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Club Activities</h3>
              <p className="text-gray-600 font-montserrat">
                Engage in various club activities such as debating, music, art, photography, and more. Explore your interests and develop new skills through club participation.
              </p>
            </div>

            <div className="bg-[#f2fff0] rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Sports Events</h3>
              <p className="text-gray-600 font-montserrat">
                Take part in exciting sports events and competitions, including football, basketball, cricket, and more. Stay active, enhance teamwork, and showcase your sporting abilities.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Workshops and Seminars</h3>
              <p className="text-gray-600 font-montserrat">
                Attend workshops and seminars conducted by industry experts and professionals. Gain valuable insights, learn new skills, and stay updated with the latest trends and advancements.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

