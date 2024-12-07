import { Box, Text, Separator } from "@chakra-ui/react";
import { useState } from "react";
import {
  DrawerBackdrop,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { FaAlignJustify, FaXmark } from "react-icons/fa6";

const Drawer = () => {
  const [open, setOpen] = useState(false);
  return (
    <DrawerRoot size="md" open={open} onOpenChange={(e) => setOpen(e.open)}>
      <DrawerBackdrop />
      <DrawerTrigger asChild>
        <Box
          display="flex"
          position="absolute"
          left="0"
          bottom="0"
          height="40px"
          width="40px"
          borderRadius="50%"
          m="20px"
          bgColor="yellow.400"
          alignItems="center"
          justifyContent="center"
          _hover={{ cursor: "pointer", bg: "yellow.700" }}
        >
          {!open ? <FaAlignJustify /> : <FaXmark />}
        </Box>
      </DrawerTrigger>
      <DrawerContent
        style={{
          backgroundColor: "#FFFEF9",
          display: "flex",
          padding: "20px",
        }}
      >
        <DrawerHeader>
          <DrawerTitle
            style={{
              marginTop: "20px",
              color: "black",
              fontSize: "45px",
              fontWeight: "100",
              fontFamily: "serif",
              fontStyle: "italic",
              textAlign: "right",
            }}
          >
            #TImetoshaRE
          </DrawerTitle>
        </DrawerHeader>
        <DrawerBody mt="50px">
          <Box _hover={{ cursor: "pointer" }}>
            <Text
              width="100%"
              color="black"
              textAlign="right"
              fontSize="17px"
              fontFamily="body"
              letterSpacing="5px"
              mb="10px"
            >
              BRIDE & GROOM
            </Text>
          </Box>
          <Separator opacity="0.7" mb="30px" />
          <Box _hover={{ cursor: "pointer" }}>
            <Text
              width="100%"
              color="black"
              textAlign="right"
              fontSize="17px"
              fontFamily="body"
              letterSpacing="5px"
              mb="10px"
            >
              LIVE STREAMING
            </Text>
          </Box>
          <Separator opacity="0.7" mb="30px" />
          <Box _hover={{ cursor: "pointer" }}>
            <Text
              width="100%"
              color="black"
              textAlign="right"
              fontSize="17px"
              fontFamily="body"
              letterSpacing="5px"
              mb="10px"
            >
              WEDDING GIFT
            </Text>
          </Box>
          <Separator opacity="0.7" mb="30px" />
        </DrawerBody>
        <DrawerFooter flexDirection="column" alignItems="end">
          <Text color="black">INVITATO Software Engineer Test</Text>
          <Text color="black">Alfian Rizki Mughni Aziz</Text>
        </DrawerFooter>
      </DrawerContent>
    </DrawerRoot>
  );
};

export default Drawer;
