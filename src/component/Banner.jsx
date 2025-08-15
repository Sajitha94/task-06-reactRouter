import React, { useState, useEffect } from "react";
import { Box, Stack } from "@mui/material";
import banner1 from "../assets/banner1.png";
import banner2 from "../assets/banner2.png";
import banner3 from "../assets/banner3.png";
function Banner() {
  const images = [
   banner1,banner2,banner3
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((pre) => (pre + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <Box className=" justify-center flex items-center relative " sx={{py:12}}>
      <Box
        component="img"
        src={images[index]}
        className="w-5/6 md:h-96 h-56 rounded-xl transition-opacity duration-500 ease-in-out"
      />

      <Stack
        className="absolute bottom-2 transform -translate-x-1/2 flex gap-2"
        sx={{ flexDirection: "row" }}
      >
        {images.map((item, idx) => (
          <Box
            className="w-3 h-3 rounded-full cursor-pointer"
            sx={{ backgroundColor: index===idx?"white": "rgba(255,255,255,0.5)" }}
            onClick={() => setIndex(idx)}
            key={idx}
          />
        ))}
      </Stack>
    </Box>
  );
}
export default Banner;
