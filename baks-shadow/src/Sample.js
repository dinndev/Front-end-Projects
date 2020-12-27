import React from "react";
import Shadew from "./Shadew";

function Sample() {
  return (
    <div>
      <Shadew
        blur="60px"
        offset={{ top: "50px", left: "50px", bottom: "0px", right: "0px" }}
        src="https://picsum.photos/536/354"
      />
    </div>
  );
}

export default Sample;
