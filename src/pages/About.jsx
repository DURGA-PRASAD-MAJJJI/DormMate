import React from 'react';

const About = () => {
  return (
    <div className="px-6 md:px-12">
      <div className="text-center text-3xl md:text-5xl font-bold pt-10 text-gray-700">
        <p>
          About <span className="text-primary">US</span>
        </p>
      </div>

      <div className="my-12 flex flex-col-reverse md:flex-row items-center gap-10">
        <div className="md:w-1/2 flex flex-col justify-center gap-6 text-lg text-gray-700">
          <p className="text-xl leading-relaxed">
            Welcome to <b className="text-gray-900">Medication</b>, your trusted partner in managing your healthcare needs conveniently and efficiently. At Medication, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.
          </p>
          <p className="text-xl leading-relaxed">
            <b className="text-gray-900">Medication</b> is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Medication is here to support you every step of the way.
          </p>
          <b className="text-gray-900 text-3xl">Our Vision</b>
          <p className="text-xl leading-relaxed">
            Our vision at <b className="text-gray-900">Medication</b> is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.
          </p>
        </div>

        <div>
          <img className="w-full max-w-xs sm:max-w-sm md:max-w-[520px] h-[620px] rounded-3xl shadow-xl object-cover" src="" alt="About Us" />
        </div>
      </div>
    </div>
  );
};

export default About;
