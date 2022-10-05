import Card from "../listitems/Card";
import { FlatList } from "native-base";


const List = (props) => {
    const { data } = props;
 return (
<FlatList
            data={data}
            renderItem={({ item }) => (
                <Card 
                id={item.id}
                title={item.original_title}
                image={item.poster_path}
                popularity={item.popularity}
                release={item.release_date} 
                />
            )} 
            keyExtractor={item => item.id}/>
  )
};

export default List;