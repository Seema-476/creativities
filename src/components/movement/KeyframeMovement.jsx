import React from "react";
import { CARD_ANIMATION_DATA_LIST } from "../../utils/helper";

const KeyframeMovement = () => {
  return (
    <div className="h-screen flex w-full items-center justify-center">
      <div className="container mx-auto px-5">
        <h1 className="lg:text-5xl text-2xl font-bold text-blue-300 text-center">
          HOVER ON CARDS
        </h1>
        <div className="flex gap-5 justify-center items-center pt-10 flex-wrap">
          {CARD_ANIMATION_DATA_LIST.map((obj, i) => (
            <div key={i}>
              <div className="relative overflow-hidden rounded-xl w-full border hover:border-blue-500">
                {/* Outer Image */}
                <img
                  className="max-w-[429px] max-sm:max-w-[300px] lg:min-h-[357px] w-full bg-white object-cover relative z-40 hover:z-0 duration-500 hover:opacity-0 cursor-pointer"
                  width={429}
                  height={357}
                  src={obj.outerImg}
                  alt="outerImg"
                />
                {/* Continuous Scrolling Images */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden shadow-2xl">
                  <div className="image-slider">
                    {obj.images.concat(obj.images).map((image, index) => (
                      <img
                        key={index}
                        className="w-full h-full object-cover"
                        src={image}
                        alt={`innerImg-${index}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeyframeMovement;
