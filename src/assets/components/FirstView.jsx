import React from "react";
import image from "../images/background.jpg";

const FirstView = () => {
  return (
    <>
      <div
        className="relative w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        {" "}
        {/*./assets/images/background.jpg*/}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
        {/* Optionally, you can add content inside the div here */}
        <div className="w-full absolute top-1/2 transform -translate-y-1/2 text-center text-white">
          <h1 className="text-7xl mt-20">CAPTURE YOURSELF</h1>
          <p className="mt-5 mx-auto font-light leading-6 w-auto">
            In the heart of a bustling city, where skyscrapers pierce the sky
            and the hum of activity never ceases, <br />
            lies a hidden gem of tranquility. Amid the concrete jungle, a small
            park serves as an oasis for those seeking <br />
            a moment of respite. Shaded by ancient oak trees and adorned with
            vibrant flowerbeds, the park is a haven for <br />
            both city dwellers and wildlife. On any given day, you'll find a
            diverse tapestry of people—joggers winding along <br />
            the gravel paths, children laughing as they chase bubbles, and
            elderly couples sharing stories on weathered <br />
            benches. The air is filled with the sweet scent of blossoms and the
            melodious chirping of birds, creating a<br />
            symphony of nature that contrasts sharply with the surrounding urban
            chaos. This park, though modest in size,
            <br />
            represents a sanctuary where the rhythm of life slows down, offering
            a brief but cherished escape from the
            <br />
            relentless pace of the city.
          </p>
          <div className="mt-6">
            <button className="relative w-48 mx-3 my-5 px-0 py-3 text-center font-bold text-white border-2 border-teal-500 rounded-full bg-transparent cursor-pointer overflow-hidden group hover:border-none">
              <span className="absolute inset-0 bg-teal-500 rounded-full z-[-1] transition-all duration-300 hidden group-hover:block"></span>
              Sign In as Creator
            </button>
            <button className="relative w-48 mx-3 my-5 px-0 py-3 text-center font-bold text-white border-2 border-teal-500 rounded-full bg-transparent cursor-pointer overflow-hidden group hover:border-none">
              <span className="absolute inset-0 bg-teal-500 rounded-full z-[-1] transition-all duration-300 hidden group-hover:block"></span>
              Sign Up as Creator
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstView;
