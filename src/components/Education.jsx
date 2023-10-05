import React from 'react';

const Education = () => {
  const educationData = [
    {
      id: 1,
      institution: 'Saraswati Shishu Vidya Mandir High School',
      qualification: 'Class 10',
      duration: '2015 - 2017',
    },
    {
      id: 2,
      institution: 'Sai Higher Secondary School',
      qualification: 'Class 12',
      duration: '2017 - 2019',
    },
    {
      id: 3,
      institution: 'C.V. Raman Global University',
      qualification: 'B.Tech',
      duration: '2019 - 2023',
    },
  ];

  return (
    <div
      name="education"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8 mt-16">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
            Education
          </p>
          <p className="py-6">Presenting my Higher Education details:</p>
        </div>

        <div className="grid gap-8 w-full max-w-lg">
        {educationData.map(({ id, institution, qualification, duration }) => (
          <div key={id} className="flex items-center hover:bg-gray-800 rounded-lg p-4 transition duration-300 ease-in-out">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-4">
              <div className="w-4 h-4 bg-black rounded-full"></div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-1">{institution}</h3>
              <p className="text-gray-300">{qualification} | {duration}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

  

export default Education;
