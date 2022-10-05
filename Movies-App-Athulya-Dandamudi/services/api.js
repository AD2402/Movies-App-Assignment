import { API_KEY, MOVIE_BASE_URL} from './api_config';

export const getMoviesData = async (sort) => {
    const url = MOVIE_BASE_URL;

    try {
        const params = {
            q: movie, 
            app_id: APP_ID,
            api_key: API_KEY,
            field: ['uri', 'image', 'label', 'source']
        };

        const movieappAxios = axios.create({
            paramsSerializer: params => qs.stringify(params, { arrayFormat: 'repeat' })
        });

        const response = await movieappAxios.get(url, { params });
        console.log('RESPONSE', response.data.hits);
        const movielist = response.data.hits;
        return movielist;
    } catch (error) {
        throw error;
    }
};