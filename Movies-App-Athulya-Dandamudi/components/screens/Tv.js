import { Text, View, Center, Box, Select, CheckIcon } from "native-base";
import React, { useState, useEffect } from "react";
import TvDropDown from "../layout/TvDropDown";
import TvList from "../lists/TvList";
// import { getMoviesData } from "../../services/api";
import axios from "axios";
import { API_KEY } from "../../services/api_config";

const Tv = () => {
    const [sortTV, setSortTV] = React.useState("popular");
    const [dataTV, setDataTV] = useState([]);

    const handleSortTVChange = (value) => {
        setSortTV(value);

    }

    useEffect(function fetchData() {
       
        fetch(`https://api.themoviedb.org/3/tv/${sortTV}?api_key=${API_KEY}`)
        .then((response) => response.json())
        .then((data) => {
            setDataTV(data.results);
        });
       
    }, [sortTV]);

    return (
        <View >
            <TvDropDown sortTV={sortTV} handleSortTVChange={handleSortTVChange} />
            <TvList dataTV={dataTV}  />

        </View>
    )
}


export default Tv;