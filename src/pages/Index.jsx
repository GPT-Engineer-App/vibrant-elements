import { Box, Container, Flex, Heading, Text, Button, VStack, Link } from "@chakra-ui/react";
import { FaInfoCircle, FaEnvelope, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex direction="column" minH="100vh">
        <Box as="header" bg="white" w="full" py={4} px={8} boxShadow="sm">
          <Flex justify="space-between" align="center">
            <Heading as="h1" size="lg" color="brand.700">BrandName</Heading>
            <Flex as="nav">
              <Link px={3} py={2} href="#features" fontWeight="bold">Features</Link>
              <Link px={3} py={2} href="#pricing" fontWeight="bold">Pricing</Link>
              <Link px={3} py={2} href="#about" fontWeight="bold">About</Link>
            </Flex>
          </Flex>
        </Box>
        <Flex flexGrow={1} align="center" justify="center" bg="gray.50">
          <VStack spacing={5} textAlign="center" w="full" maxW="md" px={6}>
            <Heading as="h2" size="2xl" fontWeight="bold" color="brand.800">Welcome to BrandName</Heading>
            <Text fontSize="xl" color="gray.600">Discover our services and how they can help you achieve your goals.</Text>
            <Button colorScheme="blue" size="lg">Get Started</Button>
          </VStack>
        </Flex>
        <Box as="footer" bg="white" w="full" py={4} px={8} borderTop="1px" borderColor="gray.200">
          <Flex justify="space-between" align="center">
            <Text fontSize="sm">© 2023 BrandName. All rights reserved.</Text>
            <Flex>
              <Link href="https://twitter.com" isExternal mx={2}><FaTwitter /></Link>
              <Link href="https://instagram.com" isExternal mx={2}><FaInstagram /></Link>
              <Link href="mailto:info@brandname.com" mx={2}><FaEnvelope /></Link>
              <Link href="#about" mx={2}><FaInfoCircle /></Link>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;