import { promises as fs } from "fs";
import path from "path";
import React from "react";
import Slideshow from "./Slideshow";
import Profile from "./Profile";

const SlimeGallery = async () => {
  const imageDirectory = path.join(process.cwd(), '/public/assets/slime');
  const imageFilenames = await fs.readdir(imageDirectory);

  const profileImage = `/assets/slime/${imageFilenames[0]}`;
  const name = "khoi";
  const diamonds = 100;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <Profile img={profileImage} name={name} diamonds={diamonds} />
      <Slideshow images={imageFilenames} />
    </div>
  );
};

export default SlimeGallery;
