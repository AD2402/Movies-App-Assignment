import { Text, View, Center, Box, Select, CheckIcon } from "native-base";
import React, { useState, useEffect } from "react";
import DropDown from "../layout/DropDown";
import List from "../lists/List";
import axios from "axios";
import { API_KEY } from "../../services/api_config";

const Movies = () => {
    const [sort, setSort] = React.useState("popular");
    const [data, setData] = useState([]);

    const handleSortChange = (value) => {
        setSort(value);

    }
    console.log(data)
    useEffect(function fetchData() {
       
        fetch(`https://api.themoviedb.org/3/movie/${sort}?api_key=${API_KEY}`)
        .then((response) => response.json())
        .then((data) => {
            setData(data.results);
        });
       
    }, [sort]);

    return (
        <View >
            <DropDown sort={sort} handleSortChange={handleSortChange} />
            <List data={data} />

        </View>
    )
}


export default Movies;