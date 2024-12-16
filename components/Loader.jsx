import Image from "next/image";
import React from "react";

const Loader = () => {
  return (
    <div>
      <Image
        src="https://wpamelia.com/wp-content/uploads/2018/11/ezgif-2-6d0b072c3d3f.gif"
        width={500}
        height={500}
        alt="loading..."
      />
    </div>
  );
};

export default Loader;
