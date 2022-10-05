import { API_KEY, BASE_URL} from './api_config';

export const getMoviesData = async (sort) => {
    const url = BASE_URL;

    try {
        const params = {
            q: movie, 
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