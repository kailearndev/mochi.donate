/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: HeroParticles.jsx
   Version: I
   Creation: 02/06/2023
   Last modification: 03/06/2023
*/

import ParticlesComponent from "./ParticlesComponent";
import { heroOptions } from "./particlesOptions";

const HeroParticles = () => {
  return (
    <div className="w-full h-[60svh] min-h-[200px]">
      <ParticlesComponent
        id="hero-particles"
        className="w-full h-[60svh] z-0 min-h-[800px]"
        particlesOptions={heroOptions}
      />
    </div>
  );
};

export default HeroParticles;
