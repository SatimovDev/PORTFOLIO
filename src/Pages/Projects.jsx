import React from "react";
import img from "./img.png";
import img2 from './img2.png'

const variants = {
  initial: {
    x: "-100%",
  },
  open: {
    x: 0,
  },
  exit: {
    x: "100%",
  },
};

export const Projects = () => {
  return (
    <div className="w-4/5 m-auto">
      <h1 className="text-5xl text-white mt-14">Projects 💡</h1>
      <p className="text-2xl text-gray-500 mt-10 mb-16">
        Some things i’ve been working on in the past few years:{" "}
      </p>
      <div className="flex mb-36">
        <div className="w-2/5 mr-36">
          <h3 className="text-3xl text-white mt-14">Remotely</h3>
          <p className="text-2xl text-gray-500 mt-10 mb-10">
            Remotely is a remote friendly-company — with our headquarters in San
            Francisco, a second office in LA, and a strong commitment to
            ensuring people can do great work here and thrive without having to
            live near an office. This role is open to candidates across the U.S.
          </p>
          <button class="btn btn-outline btn-secondary">View project</button>
        </div>

        <div>
          <img src={img} alt="" />
        </div>
      </div>

      <div className="flex">
      <div>
          <img src={img2} alt="" />
        </div>
        <div className="w-2/5 mr-36">
          <h3 className="text-3xl text-white mt-14">Remotely</h3>
          <p className="text-2xl text-gray-500 mt-10 mb-10">
            Remotely is a remote friendly-company — with our headquarters in San
            Francisco, a second office in LA, and a strong commitment to
            ensuring people can do great work here and thrive without having to
            live near an office. This role is open to candidates across the U.S.
          </p>
          <button class="btn btn-outline btn-secondary">View project</button>
        </div>
      </div>
    </div>
  );
};
