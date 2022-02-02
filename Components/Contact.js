import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from '@chakra-ui/react';
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from 'react-icons/md';
import { BsPerson } from 'react-icons/bs';
import { FaLinkedin, FaTwitter, FaDiscord } from 'react-icons/fa';

export default function Contact() {
  return (
    <Container maxW="full" mt={0} centerContent overflow="hidden">
      <Flex justifyContent={'center'}>
        <Box
          style={{ backdropFilter: "blur(10px)" }}
          shadow={'lg'}
          color="white"
          borderRadius="lg"
          p={10}  
          >
          <Box p={4}>
            <Flex spacing={{ base: 20, sm: 3, md: 5, lg: 20 }} justifyContent={'center'} flexWrap={'wrap'}>
              <Flex justifyContent={'center'} mx={5}>
                <Box>
                  <Heading>Contact</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.300">
                    Fill up the form below to contact
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="white"
                        _hover={{ border: '2px solid #682ae9' }}
                        leftIcon={<MdPhone color="#682ae9" size="20px" />}>
                        +91-988888888
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="white"
                        _hover={{ border: '2px solid #682ae9' }}
                        leftIcon={<MdEmail color="#682ae9" size="20px" />}>
                        hello@abc.com
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="white"
                        _hover={{ border: '2px solid #682ae9' }}
                        leftIcon={<MdLocationOn color="#682ae9" size="20px" />}>
                        Karnavati, India
                      </Button>
                    </VStack>
                  </Box>
                  <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={5}
                    alignItems="flex-start">
                    <IconButton
                      aria-label="facebook"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _focus={{ border: "none" }}
                      _hover={{ bg: 'purple.500' }}
                      icon={<FaLinkedin size="28px" />}
                    />
                    <IconButton
                      aria-label="github"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _focus={{ border: "none" }}
                      _hover={{ bg: 'purple.500' }}
                      icon={<FaTwitter size="28px" />}
                    />
                    <IconButton
                      aria-label="discord"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _focus={{ border: "none" }}
                      _hover={{ bg: 'purple.500' }}
                      icon={<FaDiscord size="28px" />}
                    />
                  </HStack>
                </Box>
              </Flex>
              <Flex>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={5}>
                      <FormControl id="name">
                        <FormLabel>Your Name</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<BsPerson color="gray.800" />}
                          />
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Mail</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<MdOutlineEmail color="gray.800" />}
                          />
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Message</FormLabel>
                        <Textarea
                          borderColor="gray.300"
                          _hover={{
                            borderRadius: 'gray.300',
                          }}
                          placeholder="message"
                        />
                      </FormControl>
                      <FormControl id="name" float="right">
                        <Button
                          variant="solid"
                          bg="purple.500"
                          color="white"
                          _hover={{
                            bg: "purple.600"
                          }}
                          _focus={{
                            border: "none",
                          }}
                        >
                          Send Message
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </Flex>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}