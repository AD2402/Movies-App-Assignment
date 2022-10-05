import { Button, FormControl, HStack, Icon, Input, VStack, Box, Select, CheckIcon, WarningOutlineIcon, Center } from "native-base";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from "react";

const Form = (props) => {

    const { value, type, handleValueChange, handleTypeChange, onSubmit } = props;

    return <Box mt={2}>
        <Center>
            <VStack  my="1" space={5} w="100%" maxW="300px">
            <FormControl isRequired >
                <FormControl.Label >Search Movie/TV Show Name</FormControl.Label>

                <Input  value={value} w="100%" placeholder="i.e. James Bond, CSI"
                    onChangeText={ value => {handleValueChange(value);} }
                    InputLeftElement={ <Icon size={5} ml={2} color='gray.400' as={<Ionicons name='ios-search' />} />} 
                />

                <HStack>
                    <VStack >
                        <FormControl.Label>Choose Search Type</FormControl.Label>
                        <Select selectedValue={type} minWidth="200" _selectedItem={{
                            bg: "teal.600",
                            endIcon: <CheckIcon size="5" />
                        }} mt={1} onValueChange={itemValue => handleTypeChange(itemValue)}>

                            <Select.Item label="movie" value="movie" />
                            <Select.Item label="multi" value="multi" />
                            <Select.Item label="tv" value="tv" />
                        </Select>
                        <FormControl.ErrorMessage _text={{ color: "gray.700" }}>
                           Please select a search type
                        </FormControl.ErrorMessage>
                    </VStack>
                    <Button height='54%' px={4} py='0'mt='10%' ml='3' colorScheme="cyan" onPress={onSubmit} startIcon={<Icon as={<Ionicons name='ios-search' />} />}>Search</Button>

                </HStack>
                <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                    Movie/ TV Show name is required
                </FormControl.ErrorMessage>
                </FormControl>
            </VStack>
       
            </Center>
    </Box>;
};




export default Form;