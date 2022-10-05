import { Box, Button, Center, Divider, Heading, Image, Text, VStack, HStack } from "native-base";
import { useNavigation } from '@react-navigation/native';

const Card = props => {
    const { id, title, image, popularity, release } = props;
    const navigation = useNavigation();
    const type = 'movie';

    return (
        <Box  >
            <Box ml={4} mr={4} pt='15px' pb='15px'>
            <HStack space={2} alignItems="center"  >

                    {title && image ? <Image alt={title} source={{ uri: `https://image.tmdb.org/t/p/w500/${image}` }} size='xl'/>: <></>}  
                
                    <VStack space={2} px={3} width="70%">
                        <Box>
                        <Text fontWeight="bold">{title}</Text>
                        <Text >Popularity: {popularity}</Text>
                        <Text >Release Date: {release}</Text>
                        </Box>
                        <Button size="md" borderWidth="1"  borderRadius="4" variant="solid"   width={200} onPress={() => {
                                navigation.navigate('Details', {
                                id, title, type
                            })
                        }}> More Details</Button>
                    </VStack>

            </HStack>
            </Box>
            <Box borderBottomColor='rgba(158, 150, 150, .5)'  borderBottomWidth='1'></Box>
        </Box>
        
    );
};

export default Card;