import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";

function SecondSection({ isOpen, setOpen }) {
  return (
    <Box
      flex="2"
      minW="625px"
      maxW="625px"
      backgroundPositionY="top"
      bgAttachment="local"
      backgroundSize="100%"
      bgRepeat="no-repeat"
      bgImage="url('https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/1.%20Cover.jpg?updatedAt=1698222296920')"
      mx={{ base: "auto", xl: "0" }}
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
        <Button
          mt="50px"
          width="130px"
          bgColor="white"
          rounded="none"
          variant="solid"
          alignSelf="center"
          fontStyle="italic"
          fontWeight="lighter"
          fontSize="20px"
          onClick={() => setOpen((isOpen = true))}
        >
          Open
        </Button>
      </Box>
    </Box>
  );
}

export default SecondSection;
