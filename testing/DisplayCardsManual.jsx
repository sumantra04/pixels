import React from "react";

const DisplayCards = ({ data }) => {
  const isFlipped=data.id%2==0?true:false;
  return (
    <div className="w-full mt-8">
      <div
        className={`${
          isFlipped ? "flex-row-reverse float-right" : "flex-row"
        } flex justify-between w-5/6 h-auto max-h-[60vh] rounded-2xl mb-8 overflow-hidden transition-all duration-300 shadow-md hover:shadow-2xl cursor-pointer ${
          isFlipped ? "mr-16" : "ml-16"
        }`}
        data-info={data.id}
      >
        <div className="about flex flex-col items-center justify-between m-12 min-w-[250px] h-inherit">
          <div className="description max-h-[70%] overflow-hidden p-5">
            {data.about}
          </div>
          <div className="author p-3 text-xl font-sans">
            <a
              href={`userprofile.php?info=${encodeURIComponent(data.username)}`}
              className="uppercase text-black no-underline hover:text-teal-600"
            >
              {data.author}
            </a>
          </div>
        </div>
        <div className={`"img flex items-center  w-1/2 h-full" ${isFlipped ? "justify-start":"justify-end"}`}>
          <img src={data.path} alt=" " className=" h-auto max-h-[60vh] max-w-full" />
        </div>
      </div>
    </div>
  );
};

export default DisplayCards;
