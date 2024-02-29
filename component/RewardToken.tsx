import { Card, Heading, Skeleton, Stack, Text, Image, Box, Flex } from "@chakra-ui/react";
import { useAddress, useContract, useTokenBalance } from "@thirdweb-dev/react";
import { REWARD_TOKEN_ADDRESSES } from "../constants/addresses";

export default function StakeToken() {
    const address = useAddress();
    const { contract: stakeTokenContract, isLoading: loadingStakeToken } = useContract(REWARD_TOKEN_ADDRESSES);

    const { data: tokenBalance, isLoading: loadingTokenBalance } = useTokenBalance(stakeTokenContract, address);
    
    return (
        <Card 
        p={5}
        overflow='hidden'
        variant='outline'>
            <Stack color='blue.500'>
                <Flex justifyContent={"center"} alignItems={"center"}>
                    <Box boxSize={{base: '150px', lg: '350px'}}>
                    <Image boxSize= {{base: '150px', lg: '350px'}} src='https://i.ibb.co/M5jhb4b/blue-wojak-full-with-game-pad-no-bg.png' alt='Play' />
                    </Box>
                </Flex>
                <Heading>Earn $PLAY</Heading>
                <Skeleton h={4} w={"50%"} isLoaded={!loadingStakeToken && !loadingTokenBalance}>
                    <Text fontSize={"large"} fontWeight={"bold"}>${tokenBalance?.symbol}</Text>
                </Skeleton>
                <Skeleton h={4} w={"100%"} isLoaded={!loadingStakeToken && !loadingTokenBalance}>
                    <Text>{tokenBalance?.displayValue}</Text>
                </Skeleton>
            </Stack>
        </Card>
    )
}