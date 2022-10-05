import { FlatList } from "native-base";
import MovieCard from "../listitems/MovieCard";
import TvCard from "../listitems/TvCard";


const SearchList = (props) => {
    const { data, sentType } = props;

    return (
        <FlatList
            data={data}
            renderItem={({ item }) => (

                sentType == 'multi' ?
                    (item.media_type == 'movie' ? <MovieCard id={item.id}
                        title={item.original_title}
                        image={item.poster_path}
                        popularity={item.popularity}
                        release={item.release_date} /> :
                        <TvCard id={item.id}
                            title={item.original_name}
                            image={item.poster_path}
                            popularity={item.popularity}
                            release={item.release_date} />
                    )
                    : (sentType == 'movie' ? <MovieCard id={item.id}
                        title={item.original_title}
                        image={item.poster_path}
                        popularity={item.popularity}
                        release={item.release_date} /> : 
                        <TvCard id={item.id}
                            title={item.original_name}
                            image={item.poster_path}
                            popularity={item.popularity}
                            release={item.release_date} />)

            )}
            keyExtractor={item => item.id} />
    )
};

export default SearchList;