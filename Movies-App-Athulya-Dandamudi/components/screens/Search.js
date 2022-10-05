import { Text, View } from "native-base";
import Form from "../forms/Form";
import { useState, useEffect } from "react";
import SearchList from "../lists/SearchList";
import { API_KEY } from "../../services/api_config";



const Search = () => {

    const [value, setValue] = useState("");
    const [type, setType] = useState("multi");
    const [display, setDisplay] = useState(false);
    const handleValueChange = text => setValue(text);
    const handleTypeChange = text => setType(text);
    const [data, setData] = useState([]);
    const [sentType, setSentType] = useState("multi");

    const onSubmit = () => {
        console.log(`value:${value}, type:${type}`);
        if (value !== "") {
            setDisplay(true);
            fetchData();
        }

    };

    console.log(data)
    function fetchData() {
        fetch(`https://api.themoviedb.org/3/search/${type}?api_key=${API_KEY}&query=${value}`)
            .then((response) => response.json())
            .then((data) => {
                setData(data.results);
                setSentType(type);
            });
        setValue("");
    };


    return (
        <View >
            <Form value={value} type={type} handleValueChange={handleValueChange} handleTypeChange={handleTypeChange} onSubmit={onSubmit} />
            {display ? <SearchList data={data} sentType={sentType} /> : <Text>Please Initiate a Search</Text>}
        </View>
    )
}


export default Search;