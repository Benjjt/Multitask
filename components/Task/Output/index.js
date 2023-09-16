import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { LuTriangle, LuSquare, LuHexagon } from "react-icons/lu";
import { TbPentagon } from "react-icons/tb";

const Output = ({ outputArr, establishColor }) => {
  return (
    <div className="h-1/2 border border-black bg-black w-full flex justify-start items-start p-10 gap-8">
      {outputArr.length > 0 && (
        <>
          <div className="w-1/2 h-full border-black bg-white rounded-lg border-4 flex justify-start items-start gap-4 p-10 flex-wrap overflow-scroll">
            {outputArr.map((item) => {
              return (
                <div className="flex p-2 justify-center items-center gap-2 h-[2rem] w-[8rem] border rounded-lg">
                  <span>{item[0]}</span>
                  <span>{item[1]}</span>
                  <BsFillArrowRightCircleFill />
                  <span>{item[2]}</span>
                </div>
              );
            })}
          </div>
          <div className="w-1/2 h-full bg-white flex justify-center items-center border-4  border-black rounded-lg">
            <div className="flex justify-center items-center gap-8">
              {outputArr[outputArr.length - 1][0] === 3 && (
                <LuTriangle
                  className={`w-20 h-20 ${establishColor(
                    outputArr[outputArr.length - 1][1]
                  )}`}
                />
              )}
              {outputArr[outputArr.length - 1][0] === 4 && (
                <LuSquare
                  className={`w-20 h-20 ${establishColor(
                    outputArr[outputArr.length - 1][1]
                  )}`}
                />
              )}
              {outputArr[outputArr.length - 1][0] === 5 && (
                <TbPentagon
                  className={`w-20 h-20 ${establishColor(
                    outputArr[outputArr.length - 1][1]
                  )}`}
                />
              )}
              {outputArr[outputArr.length - 1][0] === 6 && (
                <LuHexagon
                  className={`w-20 h-20 ${establishColor(
                    outputArr[outputArr.length - 1][1]
                  )}`}
                />
              )}
              <BsFillArrowRightCircleFill className="w-12 h-12" />
              {outputArr[outputArr.length - 1][0] === 3 && (
                <LuTriangle
                  className={`w-20 h-20 ${establishColor(
                    outputArr[outputArr.length - 1][2]
                  )}`}
                />
              )}
              {outputArr[outputArr.length - 1][0] === 4 && (
                <LuSquare
                  className={`w-20 h-20 ${establishColor(
                    outputArr[outputArr.length - 1][2]
                  )}`}
                />
              )}
              {outputArr[outputArr.length - 1][0] === 5 && (
                <TbPentagon
                  className={`w-20 h-20 ${establishColor(
                    outputArr[outputArr.length - 1][2]
                  )}`}
                />
              )}
              {outputArr[outputArr.length - 1][0] === 6 && (
                <LuHexagon
                  className={`w-20 h-20 ${establishColor(
                    outputArr[outputArr.length - 1][2]
                  )}`}
                />
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Output;
