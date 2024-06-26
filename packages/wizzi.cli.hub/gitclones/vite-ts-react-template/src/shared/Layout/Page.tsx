import { ReactNode } from "react";

import { Box, ChakraProps } from "@chakra-ui/react";

interface IProps {
  children: ReactNode;
  maxW?: ChakraProps["maxW"];
}

const Page = ({ children, maxW = "1000px" }: IProps) => {
  return (
    <Box
      px={{ base: 3, md: 4 }}
      maxW={maxW}
      m="0 auto"
      pt={{ base: 20, md: 24 }}
      pb={{ base: 4, md: 6 }}
    >
      {children}
    </Box>
  );
};

export { Page };
