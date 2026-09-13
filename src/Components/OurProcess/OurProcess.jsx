// import React from 'react'
// import { TbCircleNumber1Filled, TbCircleNumber2Filled, TbCircleNumber3Filled, TbCircleNumber4Filled } from "react-icons/tb";

// const OurProcess = () => {
  
//   const RenderSteps= steps.map(item=>{
//     return(
//      <div className={`flex-1 basis-75 ${item.id % 2 === 0 ? "md:-mt-100" : ""}` } >
      
//         <span className='flex justify-center items-center mx-auto bg-zinc-800 text-white w-18 h-18 rounded-full text-8xl outline-[3px] outline-offset-7 outline-zinc-800 outline-dashed '>{item.number} </span>
//         <div className='flex-1'>
//           <h4 className='text-2xl'>{item.title} </h4>
//           <p className='mt-2'>{item.para} </p>
//         </div>
//       </div>

//     )
//   }
//   )
//   return (
//     <div className='  w-full h-screen py-10  bg-stone-100'>
//       <h1 className='flex justify-center text-4xl  text-black font-semibold '>How We Deliver Results</h1>
//      <div className='flex flex-wrap  gap-y-10 md:-m-30 justify-center items-center md:mt-20 mt-10 md:p-50'>
//         {RenderSteps}
//       </div>

      
//     </div>
//   )
// }

// export default OurProcess

// const steps = [
//   {
//     id: "1",
//     number: <TbCircleNumber1Filled />,
//     title: "Discover & Plan",
//     para: "We understand your business goals, audience, and requirements to create the right digital strategy.",
//   },
//    {
//     id: "2",
//     number: <TbCircleNumber2Filled />,
//     title: "Design & Develop",
//     para: "We create modern UI/UX designs and build fast, responsive, and scalable digital solutions.",
//   },
//    {
//     id: "3",
//     number: <TbCircleNumber3Filled />,
//     title: "Optimize & Analyze",
//     para: "We improve performance through SEO optimization and data-driven insights to maximize growth.",
//   },
//    {
//     id: "4",
//     number: <TbCircleNumber4Filled />,
//     title: "Launch & Support",
//     para: "We test, deploy, and continuously support your website and digital platforms for long-term success.",
//   },
// ]
import React from "react";
import {
  TbCircleNumber1Filled,
  TbCircleNumber2Filled,
  TbCircleNumber3Filled,
  TbCircleNumber4Filled,
} from "react-icons/tb";

const OurProcess = () => {
  const RenderSteps = steps.map((item) => {
    return (
      <div
        key={item.id}
        className={`basis-75 ${
          item.id % 2 === 0 ? "md:-mt-100" : ""
        }`}
      >
        {/* Circle */}
        <span
          className="
            flex
            justify-center
            items-center
            mx-auto
            bg-zinc-800
            text-white
            w-18
            h-18
            rounded-full
            text-8xl
            outline-[3px]
            outline-offset-7
            outline-zinc-800
            outline-dashed
          "
        >
          {item.number}
        </span>

        {/* Heading + Paragraph */}
        <div className="text-center mt-8">
          <h4 className="text-2xl font-semibold text-zinc-900">
            {item.title}
          </h4>

          <p className="mt-2 text-zinc-600">
            {item.para}
          </p>
        </div>
      </div>
    );
  });

  return (
    <div className="w-full min-h-screen py-10 bg-stone-100">

      {/* Heading */}
      <h1 className="flex  justify-center text-4xl text-black font-semibold text-center">
        How We Deliver Results
      </h1>

      {/* Steps */}
      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-4
          gap-y-20
          md:gap-x-8
          justify-center
          items-center
          mt-10
          md:mt-50
          md:p-20
        "
      >
        {RenderSteps}
      </div>
    </div>
  );
};

export default OurProcess;

const steps = [
  {
    id: 1,
    number: <TbCircleNumber1Filled />,
    title: "Discover & Plan",
    para: "We understand your business goals, audience, and requirements to create the right digital strategy.",
  },
  {
    id: 2,
    number: <TbCircleNumber2Filled />,
    title: "Design & Develop",
    para: "We create modern UI/UX designs and build fast, responsive, and scalable digital solutions.",
  },
  {
    id: 3,
    number: <TbCircleNumber3Filled />,
    title: "Optimize & Analyze",
    para: "We improve performance through SEO optimization and data-driven insights to maximize growth.",
  },
  {
    id: 4,
    number: <TbCircleNumber4Filled />,
    title: "Launch & Support",
    para: "We test, deploy, and continuously support your website and digital platforms for long-term success.",
  },
];