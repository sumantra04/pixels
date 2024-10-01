import React from 'react';

const DisplayCards = ({ data }) => {
  return (
    <div
      className={`${
        data.flip ? "flex-row-reverse" : "flex-row"
      } flex w-11/12 h-auto max-h-[60vh] rounded-2xl mb-8 overflow-hidden transition-all duration-300 shadow-lg hover:shadow-xl ${
        data.flip ? "mr-4" : "ml-4"
      }`}
      data-info={data.id}
    >
      <div className="about flex flex-col items-center justify-between p-6 min-w-[250px] h-full">
        <div className="description max-h-[70%] overflow-hidden p-5">
          {data.about}
        </div>
        <div className="author text-xl font-sans">
          <a
            href={`userprofile.php?info=${encodeURIComponent(data.username)}`}
            className="uppercase text-black no-underline hover:text-teal-600"
          >
            {data.author}
          </a>
        </div>
      </div>
      <div className="img flex items-center justify-center w-1/2 h-full">
        <img src={data.path} alt=" " className="max-h-[60vh] max-w-full" />
      </div>
    </div>
  );
};

export default DisplayCards;
