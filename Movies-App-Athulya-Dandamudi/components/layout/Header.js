import { Box, HStack, Text, StatusBar } from "native-base"

const Header = () => (
<>
 <StatusBar backgroundColor='#2c3e50' barStyle='light-content'/>
 <Box safeAreaTop backgroundColor='#2c3e50'>
    <HStack backgroundColor='#2c3e50' px={1} py={3} alignItems='center' justifyContent='center'>
        <Text color='#fff' fontSize={20} fontWeight='bold'>Movie App</Text>
    </HStack>
 </Box>
</>
)

export default Header