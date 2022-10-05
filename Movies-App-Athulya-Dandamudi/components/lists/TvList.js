import Card from "../listitems/Card";
import { FlatList } from "native-base";


const TvList = (props) => {
    const { dataTV } = props;
 return (
<FlatList
            data={dataTV}
            renderItem={({ item }) => (
                <Card id={item.id}
                title={item.original_name}
                image={item.poster_path}
                popularity={item.popularity}
                release={item.release_date}
                
                />
            )} />
  )
};

export default TvList;