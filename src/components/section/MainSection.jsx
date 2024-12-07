import React from "react";
import { Box, Container, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

function MainSection() {
  return (
    <Container
      padding="0"
      flex="3"
      backgroundSize="100%"
      bgAttachment="fixed"
      bgImage="url('https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/Desktop.jpg?updatedAt=1698223781539')"
      display={{ base: "none", xl: "block" }}
    >
      <Box bg="blackAlpha.400" width="100%" height="100%">
        <Container p="50px">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Text textStyle="xl" fontWeight="extrabold" letterSpacing="widest">
              WEDDING ANNOUNCEMENT
            </Text>
          </motion.div>
          <Text fontSize="100px" fontWeight="light">
            TIFFANY &
          </Text>
          <Text fontSize="100px" fontWeight="light">
            JARED
          </Text>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Text fontStyle="italic" fontSize="20px">
              "Aku ingin mencintaimu dengan sederhana; dengan kata yang tak
              sempat diucapkan kayu kepada api yang menjadikannya abu. Aku ingin
              mencintaimu dengan sederhana; dengan isyarat yang tak sempat
              disampaikan awan kepada hujan yang menjadikannya tiada."
            </Text>
            <Text fontStyle="italic" fontSize="20px">
              — Sapardi Djoko Damono
            </Text>
          </motion.div>
        </Container>
      </Box>
      <Box
        bg="blackAlpha.700"
        width="12px"
        opacity="0.4"
        position="absolute"
        backdropBlur="md"
        right="0"
        top="0"
        bottom="0"
      ></Box>
    </Container>
  );
}

export default MainSection;
