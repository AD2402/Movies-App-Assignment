import CardTV from "../listitems/CardTV";
import { FlatList } from "native-base";

const TvList = (props) => {
    const { dataTV } = props;
 return (
<FlatList
            data={dataTV}
            renderItem={({ item }) => (
                <CardTV 
                id={item.id}
                title={item.original_name}
                image={item.poster_path}
                popularity={item.popularity}
                release={item.release_date}     
                />
            )} 
            keyExtractor={item => item.id}/>
  )
};

export default TvList;