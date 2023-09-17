import React, { useState, useEffect } from "react";
import { LuTriangle, LuSquare, LuHexagon } from "react-icons/lu";
import { TbPentagon } from "react-icons/tb";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { BiSolidPlusSquare } from "react-icons/bi";
import { AiFillMinusSquare } from "react-icons/ai";

const VitContainer = ({
  moveToBlack,
  outputArr,
  establishColor,
  taskRunning,
  reset,
  setUserObject,
  userObject,
}) => {
  const [shapeColor, setShapeColor] = useState({
    3: "W",
    4: "W",
    5: "W",
    6: "W",
  });

  useEffect(() => {
    if (outputArr.length > 0) {
      let value = outputArr[outputArr.length - 1][0];
      setShapeColor({
        ...shapeColor,
        [value]: outputArr[outputArr.length - 1][2],
      });
    } else {
      setShapeColor({
        3: "W",
        4: "W",
        5: "W",
        6: "W",
      });
    }
  }, [outputArr]);

  return (
    <div className="h-1/2 border  w-full flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-12">
        <div className="flex justify-between items-start gap-8">
          <LuTriangle
            className={`w-20 h-20 ${establishColor(shapeColor[3])}`}
          />
          <LuSquare className={`w-20 h-20 ${establishColor(shapeColor[4])}`} />
          <TbPentagon
            className={`w-20 h-20 ${establishColor(shapeColor[5])}`}
          />
          <LuHexagon className={`w-20 h-20 ${establishColor(shapeColor[6])}`} />
        </div>
        <div className="flex justify-center items-center gap-4">
          {!taskRunning && (
            <AiFillMinusSquare className="h-10 w-10  hover:cursor-pointer hover:scale-105" />
          )}
          {outputArr.length > 0 && !taskRunning ? (
            <div
              onClick={() => reset()}
              className="border flex justify-center items-center rounded-lg px-5 py-2 bg-black text-white shadow-lg hover:scale-105 hover:cursor-pointer transition-all w-[15rem] h-[3rem]"
            >
              <span className="font-bold">RESET</span>
            </div>
          ) : (
            <button
              onClick={() => !taskRunning && moveToBlack()}
              disabled={taskRunning}
              className={`border flex justify-center items-center rounded-lg px-5 py-2 bg-black text-white shadow-lg   transition-all w-[15rem] h-[3rem] ${
                !taskRunning && "hover:scale-105"
              }`}
            >
              {taskRunning ? (
                <AiOutlineLoading3Quarters className="animate-spin " />
              ) : (
                <span className="font-bold">SWAP TO BLACK</span>
              )}
            </button>
          )}
          {!taskRunning && (
            <BiSolidPlusSquare className="h-10 w-10 hover:scale-105 hover:cursor-pointer transition-all" />
          )}
        </div>
      </div>
    </div>
  );
};

export default VitContainer;
