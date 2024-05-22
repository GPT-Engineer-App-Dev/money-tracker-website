import { Box, Container, Flex, Heading, HStack, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Box as="nav" bg="gray.800" color="white" py={4}>
        <Flex justify="space-between" align="center" maxW="container.xl" mx="auto" px={4}>
          <Heading as="h1" size="lg">Financial Times</Heading>
          <HStack spacing={8}>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Home</Link>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>News</Link>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Markets</Link>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Opinion</Link>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Contact</Link>
          </HStack>
        </Flex>
      </Box>

      {/* Main Headline Section */}
      <Box as="section" py={10} px={4}>
        <Heading as="h2" size="2xl" mb={4}>Main Headline: Featured Article</Heading>
        <Text fontSize="lg" mb={6}>
          This is the main headline article. It is prominently featured at the top of the page to capture the reader's attention.
        </Text>
      </Box>

      {/* Additional Articles Grid */}
      <Box as="section" py={10} px={4}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          <Box bg="gray.100" p={6} borderRadius="md">
            <Heading as="h3" size="lg" mb={4}>Article 1</Heading>
            <Text>This is a brief description of the first article.</Text>
          </Box>
          <Box bg="gray.100" p={6} borderRadius="md">
            <Heading as="h3" size="lg" mb={4}>Article 2</Heading>
            <Text>This is a brief description of the second article.</Text>
          </Box>
          <Box bg="gray.100" p={6} borderRadius="md">
            <Heading as="h3" size="lg" mb={4}>Article 3</Heading>
            <Text>This is a brief description of the third article.</Text>
          </Box>
          <Box bg="gray.100" p={6} borderRadius="md">
            <Heading as="h3" size="lg" mb={4}>Article 4</Heading>
            <Text>This is a brief description of the fourth article.</Text>
          </Box>
          <Box bg="gray.100" p={6} borderRadius="md">
            <Heading as="h3" size="lg" mb={4}>Article 5</Heading>
            <Text>This is a brief description of the fifth article.</Text>
          </Box>
          <Box bg="gray.100" p={6} borderRadius="md">
            <Heading as="h3" size="lg" mb={4}>Article 6</Heading>
            <Text>This is a brief description of the sixth article.</Text>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" py={10} px={4}>
        <Flex direction={{ base: "column", md: "row" }} justify="space-between" align="center" maxW="container.xl" mx="auto">
          <Text mb={{ base: 4, md: 0 }}>© 2023 Financial Times. All rights reserved.</Text>
          <HStack spacing={4}>
            <Link href="#" _hover={{ color: "gray.400" }}><FaFacebook size="24px" /></Link>
            <Link href="#" _hover={{ color: "gray.400" }}><FaTwitter size="24px" /></Link>
            <Link href="#" _hover={{ color: "gray.400" }}><FaLinkedin size="24px" /></Link>
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;