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
              <h3 className="text-xl font-semibold text-gray-800 mb-2 ">Industrial Exposure with Expert Faculty</h3>
              <p className="text-gray-600 font-montserrat">
              Pharmacad offers unparalleled industrial exposure through our expert faculty, bringing real-world insights from the pharma industry to the classroom. Benefit from a curriculum enriched by professionals who guide you towards a practical understanding of pharmaceutical processes and challenges, enhancing your academic experience.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Semester Coaching for B Pharmacy and Diploma Students</h3>
              <p className="text-gray-600 font-montserrat">
              Elevate your academic performance in B Pharmacy or Diploma in Pharmacy semesters with Pharmacad's specialized coaching. Our dedicated team provides personalized coaching both at our Dadar branch and through our online platform. Excel in your coursework with targeted guidance tailored to your individual needs.
              </p>
            </div>

            <div className="bg-[#f2fff0] rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Personal Development Beyond Entrance Exams</h3>
              <p className="text-gray-600 font-montserrat">
              Pharmacad goes beyond entrance exam preparation, focusing on comprehensive personal development. Students are groomed to be industry-ready through soft skill programs and essential practices like email writing. Enrich your journey at Pharmacad with holistic development that goes hand-in-hand with academic excellence, preparing you for success in the pharmaceutical industry.
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
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Pharmacovigilance Certification</h3>
              <p className="text-gray-600 font-montserrat">
              Pharmacad provides a specialized Pharmacovigilance Certification, equipping individuals with essential skills for effective drug safety monitoring and regulatory compliance. Enhance your professional profile and contribute to pharmaceutical safety with our industry-recognized certification program.
              </p>
            </div>

            <div className="bg-[#f2fff0] rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">IPR Certification - Safeguarding Innovation</h3>
              <p className="text-gray-600 font-montserrat">
              Dive into the world of Intellectual Property Rights (IPR) through Pharmacad's certification program. Gain expertise in protecting pharmaceutical innovations and navigating the legal intricacies of the industry. Our comprehensive certification opens doors to a deeper understanding of intellectual property in the pharmaceutical sector.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Internship Opportunities - Real-world Exposure</h3>
              <p className="text-gray-600 font-montserrat">
              Pharmacad extends valuable internship opportunities, providing practical, hands-on experience in the pharmaceutical domain. Explore and apply your theoretical knowledge in a real-world setting, gaining practical skills that contribute to your professional growth.
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
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Unlock Your Potential</h3>
              <p className="text-gray-600 font-montserrat">
              Pharmacad empowers you with free counseling sessions. Book your initial session at zero cost, receiving personalized guidance aligned with your interests. Propel yourself towards a career path that resonates with your passion, guided by our experts.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Global Insights with Abroad Counseling</h3>
              <p className="text-gray-600 font-montserrat">
              Explore international opportunities through Pharmacad's Abroad Counseling. Benefit from personalized advice tailored to your aspirations, guiding you toward a global pharmaceutical career. Expand your horizons and make informed decisions with our expert assistance.
              </p>
            </div>

            <div className="bg-[#f2fff0] rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Strategic MBA Guidance for Pharma Professionals</h3>
              <p className="text-gray-600 font-montserrat">
              Navigate the intersection of pharmaceutical expertise and business acumen with Pharmacad's MBA Counseling. We guide you in choosing the right MBA—Core or Pharma specialization. From college selection to GD PI preparation, trust us to streamline your MBA admissions journey for a successful career fusion.
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
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Leadership Lab </h3>
              <p className="text-gray-600 font-montserrat">
              Pharmacad's Leadership Lab guides pharmacy students in choosing the right career path, offering holistic insights from industry experts. Gain a comprehensive view of the pharmaceutical landscape to excel in your career. Join Leadership Lab for transformative mentorship and success in the dynamic field of pharmacy.
              </p>
            </div>

            <div className="bg-[#f2fff0] rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Pharmocracy</h3>
              <p className="text-gray-600 font-montserrat">
              Team Pharmocracy consists of a student cum professional body wherein, professionals from the industry highlight certain issues, and students from different pharmacy colleges work towards solving the same. It is also involved in community service activities (CSR) and promoting Pharmacy as a first-choice career
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Agonist</h3>
              <p className="text-gray-600 font-montserrat">
              A monthly Pharma Magazine started in 2020, curated by the teachers and students at Pharmacad which aims to connect academia with the industry. The Agonist magazine primarily focuses to help students create a network with industry professionals across the globe. It also serves as a platform for pharmacy professionals to express their views and share knowledge with peers and students.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

