import React, { useState, useEffect } from "react";
import VitContainer from "./VitContainer";
import Output from "./Output";
import Stats from "./Stats";

const Task = () => {
  const [outputArr, setOutputArr] = useState([]);
  const [taskRunning, setTaskRunning] = useState(false);

  const establishColor = (color, message = "none") => {
    let returnColor = "";
    switch (color) {
      case "B":
        returnColor = "fill-black";
        break;
      case "G":
        returnColor = "fill-black/40";
        break;
    }

    return returnColor;
  };

  const reset = () => {
    setOutputArr([]);
  };

  const moveToBlack = () => {
    setOutputArr([]);
    setTaskRunning(true);
    let iteration = 0;
    let initialObj = {
      W: [3, 4, 5, 6],
      G: [],
      B: [],
    };
    let taskComplete = false;
    let previousMovedNum = 0;

    const canMoveToTarget = (from, to) => {
      let maxiFrom = 0;
      let maxiTo = 0;
      if (from[from.length - 1] > 0) {
        maxiFrom = from[from.length - 1];
      }
      if (to[to.length - 1] > 0) {
        maxiTo = to[to.length - 1];
      }
      let canMove = maxiFrom > maxiTo && previousMovedNum != maxiFrom;
      return canMove;
    };

    const arrayActions = (from, fromKey, to, toKey) => {
      let moving = from.pop();
      to.push(moving);
      setOutputArr((prevOutputArr) => [
        ...prevOutputArr,
        [moving, fromKey, toKey],
      ]);
      previousMovedNum = moving;
    };

    const startSort = () => {
      let { B, G, W } = initialObj;
      if (canMoveToTarget(W, B)) {
        arrayActions(W, "W", B, "B");
      } else if (canMoveToTarget(G, B)) {
        arrayActions(G, "G", B, "B");
      } else if (canMoveToTarget(W, G)) {
        arrayActions(W, "W", G, "G");
      } else if (canMoveToTarget(G, W)) {
        arrayActions(G, "G", W, "W");
      } else if (canMoveToTarget(B, W)) {
        arrayActions(B, "B", W, "W");
      } else if (canMoveToTarget(B, G)) {
        arrayActions(B, "B", G, "G");
      } else {
        taskComplete = true;
        setTaskRunning(false);
        return; // Exit the recursion
      }

      if (!taskComplete) {
        setTimeout(() => {
          startSort();
        }, 1000);
      }
    };

    startSort();
  };

  return (
    <div className="flex flex-col justify-start items-center border w-full h-full relative">
      <VitContainer
        moveToBlack={moveToBlack}
        outputArr={outputArr}
        establishColor={establishColor}
        taskRunning={taskRunning}
        reset={reset}
      />
      <Output outputArr={outputArr} establishColor={establishColor} />
      <Stats outputArr={outputArr} />
    </div>
  );
};

export default Task;
