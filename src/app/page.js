'use client'
import Image from "next/image";
import sab from "@/assets/oo.png";
import Typewriter from 'typewriter-effect';
import { Box } from "@mui/material";
import About from "@/components/About";
import Education from "@/components/Education";
const HomePage = () => {
  return (
    <div>
      <div className="hero  min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image width={600} height={800} alt='sabrinaImage' src={sab} />
          <div>
            <h1 className="md:text-5xl text-xl font-bold">This is</h1>
            <h1 className="md:text-5xl text-xl font-bold">
              <Typewriter
                options={{
                  strings: [' Sabrina Islam Trina'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>

            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <a href="https://drive.google.com/file/d/11oNqa7OiqLcb7iKTy4dg0QCKP9Sug8JF/view">
              <button className="btn btn-primary bg-blue-600 border-0">View My CV</button>
            </a>
          </div>
        </div>
      </div>
     <About></About>
     <Education></Education>
    </div>
  );
};

export default HomePage;