/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: About.jsx
   Version: I
   Creation: 02/06/2023
   Last modification: 03/06/2023
*/

import { LazyMotion, domAnimation, m } from "framer-motion";
import { introduction, memoji } from "../Constants/constants";

const About = () => {
  return (
    <div id="about" className="w-full flex justify-center overflow-hidden-web mt-10 flex-col">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-full md:w-[50%] flex h-full items-center justify-center">
          <div className="flex justify-center items-center ">
            <img src={memoji.image} className="rounded-3xl h-64 w-64  object-center shadow-2xl backdrop-blur-2xl	hover:rotate-3 hover:transition-all" />
          </div>
        </div>
        <div className="w-full ">
          <LazyMotion features={domAnimation} strict>
            <m.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 100,
                damping: 20,
              }}
              style={{ fontFamily: "Pacifico, sans-serif" }}
              className="text-grayscale-50 p-6 text-center flex flex-col gap-5"
            >

              <m.div
                className="flex flex-col"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 10000,
                  type: "spring",
                  stiffness: 100,
                  damping: 20,

                }}
              >
                <span className="text-[#fdfd97]" style={{ fontSize: '2.2em', fontWeight: '900' }}>{introduction.text[0]}</span>
                <span className="text-[#fdfd97]" style={{ fontSize: '1.2em', fontWeight: '500' }}>{introduction.text[1]}</span>
                <span className="text-[#fdfd97]" style={{ fontSize: '1.2em', fontWeight: '500' }}>{introduction.text[2]}</span>
                <span className="text-[#fdfd97]" style={{ fontSize: '1.2em', fontWeight: '500' }}>{introduction.text[3]}</span>
              </m.div>

            </m.div>
          </LazyMotion>
        </div>

      </div>
    </div>

  );
};

export default About;
