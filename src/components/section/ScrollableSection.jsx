import React, { useState, useEffect } from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import EmblaCarousel from "../EmblaCarousel";
import { motion } from "framer-motion";

const slide_url = {
  0: "https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/Slideshow/Slideshow-Cover-1.jpg?updatedAt=1698222442642",
  1: "https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/Slideshow/Slideshow-Cover-2.jpg?updatedAt=1698222443322",
  2: "https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/Slideshow/Slideshow-Cover-3.jpg?updatedAt=1698222442828",
  3: "https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/Slideshow/Slideshow-Cover-4.jpg?updatedAt=1698222541497",
  4: "https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/Slideshow/Slideshow-Cover-5.jpg?updatedAt=1698222444372",
};

function ScrollableSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Object.keys(slide_url).length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const OPTIONS = { loop: true };
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  return (
    <Box
      minW="625px"
      maxW="625px"
      overflowY="auto"
      mx={{ base: "auto", xl: "0" }}
    >
      <Box
        h="vh"
        backgroundPositionY="top"
        bgAttachment="local"
        backgroundSize="100%"
        bgRepeat="no-repeat"
        bgImage={`url('${slide_url[currentSlide]}')`}
        transition="background-image 2s ease-in-out"
      >
        <Box
          bg="blackAlpha.400"
          width="100%"
          height="100%"
          p="100px"
          display="flex"
          alignContent="center"
          flexDirection="column"
        >
          <Text
            width="100%"
            textStyle="xl"
            fontWeight="extrabold"
            letterSpacing="widest"
            textAlign="center"
          >
            WEDDING ANNOUNCEMENT
          </Text>
          <Text
            width="100%"
            fontSize="50px"
            fontWeight="light"
            textAlign="center"
            mt="200px"
          >
            TIFFANY & JARED
          </Text>
          <Text
            width="100%"
            fontSize="50px"
            fontWeight="light"
            textAlign="center"
            fontStyle="italic"
          >
            #TImetoshaRE
          </Text>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          bg="white"
          width="100%"
          height="400px"
          alignItems="center"
          color="black"
          p="50px"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Text fontWeight="bolder" letterSpacing="wider" textAlign="center">
              DEAR MR-MRS-MS,
            </Text>
            <Text fontWeight="bolder" letterSpacing="wider" textAlign="center">
              FAMILY AND FRIENDS
            </Text>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Text
              fontSize="45px"
              fontWeight="medium"
              fontFamily="serif"
              textAlign="center"
            >
              Welcome to
            </Text>
            <Text
              fontSize="45px"
              fontWeight="medium"
              fontFamily="serif"
              textAlign="center"
            >
              Tiffany & Jared's
            </Text>
            <Text
              fontSize="45px"
              fontWeight="medium"
              fontFamily="serif"
              textAlign="center"
            >
              Wedding Website
            </Text>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Text
              fontSize="20px"
              fontWeight="medium"
              fontFamily="serif"
              fontStyle="italic"
              textAlign="center"
            >
              Together with joyful hearts and the grace of God, we joyfully
              announce the upcoming of our marriage.
            </Text>
          </motion.div>
        </Box>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </Box>
    </Box>
  );
}

export default ScrollableSection;
