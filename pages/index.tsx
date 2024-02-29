import { ConnectWallet } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import { NextPage } from "next";
import { Container, Flex, SimpleGrid, Image, Box } from "@chakra-ui/react";
import { useAddress } from "@thirdweb-dev/react";
import StakeToken from "../component/StakeToken";
import RewardToken from "../component/RewardToken";
import Stake from "../component/stake";

const Home: NextPage = () => {
  const address = useAddress();

  if(!address) {
    return (
      <Container maxW={"1200px"}>
        <Flex h={"50vh"} justifyContent={"center"} alignItems={"center"}>
          <Box boxSize='xxxxxl'>
            <Image src='https://i.ibb.co/m9j9TsP/xfgdfgd.png" border="0"></a>' alt='error' />
          </Box>
        </Flex>
      </Container>
    )
  }
  
  return (
    <Container maxW={"1200px"}>
      <SimpleGrid columns={2} spacing={4} mt={10}>
        <StakeToken />
        <RewardToken />
      </SimpleGrid>
      <Stake />
    </Container>
  );
};

export default Home;