import { Card, Heading, Skeleton, Stack, Text, Image, Flex, Box } from "@chakra-ui/react";
import { useAddress, useContract, useTokenBalance} from "@thirdweb-dev/react";
import { STAKE_TOKEN_ADDRESSES } from "../constants/addresses";

export default function StakeToken() {
    const address = useAddress();
    const { contract: stakeTokenContract, isLoading: LoadingStakeToken } = useContract(STAKE_TOKEN_ADDRESSES);

    const { data: tokenBalance, isLoading: loadingTokenBalance } = useTokenBalance(stakeTokenContract, address);

    return (
        <Card 
        p={5}
        overflow='hidden'
        variant='outline'>
            <Stack color='pink.300'>
                <Flex justifyContent={"center"} alignItems={"center"}>
                    <Box boxSize={{base: '150px', lg: '350px'}}>
                        <Image boxSize={{base: '150px', lg: '350px'}} src='https://i.ibb.co/58gmQng/FORK1-200x200.png' alt='Work' />
                    </Box>
                </Flex>
                <Heading>Stake $WORK</Heading>
                <Skeleton h={4} w={"50%"} isLoaded={!LoadingStakeToken && !loadingTokenBalance}>
                    <Text fontSize={"large"} fontWeight={"bold"}>${tokenBalance?.symbol}</Text>
                </Skeleton> 
                <Skeleton h={4} w={"50%"} isLoaded={!LoadingStakeToken && !loadingTokenBalance}>
                    <Text>{tokenBalance?.displayValue}</Text>
                </Skeleton>
            </Stack>

        </Card>
    )
}