import { Container, Flex, Heading, Box, useColorMode, Button, Switch, Spacer, Image } from "@chakra-ui/react";
import { ConnectWallet } from "@thirdweb-dev/react";


export default function Navbar() {
    
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode ==='dark'
    return (
        <Container maxW={"1200px"} py={4}>
            <Flex direction={"row"} justifyContent={"space-between"}>
            <Image src='https://i.ibb.co/vZbzjSN/FORK3-1024x207.webp' alt='Logo'></Image>
            <Flex
                gap={2}
                align="center">
                    <Flex>
                    <Switch
                        isChecked={isDark}
                        onChange={toggleColorMode}
                        />
                    </Flex>
                <ConnectWallet />
            </Flex>
            </Flex>
        </Container>
    )
    }