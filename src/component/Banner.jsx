import React, { useState, useEffect } from "react";
import { Box, Stack } from "@mui/material";
function Banner() {
  const images = [
    "src/assets/banner1.png", // Your 30% offer Indian food
    "src/assets/banner2.png", // Your 50% off Chinese food
    "src/assets/banner3.png", // Your food-only banner
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((pre) => (pre + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <Box className=" justify-center flex items-center relative ">
      <Box
        component="img"
        src={images[index]}
        className="w-5/6 h-96 rounded-xl transition-opacity duration-500 ease-in-out"
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
