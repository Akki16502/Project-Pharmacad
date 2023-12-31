"use client";
import { useEffect, useState } from "react";
import privacyPolicyData from "./privacy-policy.json";
import Footer from "@/components/footer";

const PrivacyPolicy = () => {
  const [privacyPolicy, setPrivacyPolicy] = useState({});

  useEffect(() => {
    setPrivacyPolicy(privacyPolicyData);
  }, []);

  return (
    <div className="">
      <main className="container mx-auto max-w-screen-xl px-4 py-20">
        <h1 className="text-4xl font-bold mb-8 font-inter">
          {privacyPolicy.title}
        </h1>
        {privacyPolicy.sections &&
          privacyPolicy.sections.map((section, index) => (
            <div key={index}>
              <h2 className="text-2xl font-bold mb-4 font-inter">
                {section.heading}
              </h2>
              <div className="prose font-montserrat text-justify">
                {section.subsections &&
                  section.subsections.map((subsection, idx) => (
                    <div key={idx}>
                      <h3 className="text-light font-normal mb-2 font-montserrat">
                        {subsection.heading}
                      </h3>
                      <p className="text-light mb-4 font-montserrat">
                        {subsection.content}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          ))}
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
