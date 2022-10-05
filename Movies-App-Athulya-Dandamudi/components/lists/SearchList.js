import { FlatList } from "native-base";
import Card from "../listitems/Card";


const SearchList = (props) => {
    const { data, sentType } = props;

    return (
        <FlatList
            data={data}
            renderItem={({ item }) => (

                sentType == 'multi' ?
                    (item.media_type == 'movie' ? <Card 
                        id={item.id}
                        title={item.original_title}
                        image={item.poster_path}
                        popularity={item.popularity}
                        release={item.release_date} /> :
                        <Card 
                            id={item.id}
                            title={item.original_name}
                            image={item.poster_path}
                            popularity={item.popularity}
                            release={item.release_date} />
                    )
                    : (sentType == 'movie' ? <Card 
                        id={item.id}
                        title={item.original_title}
                        image={item.poster_path}
                        popularity={item.popularity}
                        release={item.release_date} /> : 
                        <Card 
                            id={item.id}
                            title={item.original_name}
                            image={item.poster_path}
                            popularity={item.popularity}
                            release={item.release_date} />)

            )}
            keyExtractor={item => item.id} />
    )
};

export default SearchList;