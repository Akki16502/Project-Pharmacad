import React from "react";

const BlogHero = () => {
  return (
    <div className="container mx-auto max-w-screen-xl px-4 py-8 mt-10">
      <div className="text-black font-inter font-bold text-4xl mt-8">Blogs</div>
      <div className="text-black font-inter text-xl my-2 lg:text-black lg:font-inter lg:text-lg sm:text-[##4F4F4F] flex flex-row">
        {" "}
        <span className="px-2">━━ </span>{" "}
        <span id="heroid">
          {" "}
          Welcome to our blog. Stay updated with the latest articles from our
          classes.
        </span>
      </div>
    </div>
  );
};

export default BlogHero;
