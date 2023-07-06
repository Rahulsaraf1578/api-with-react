import axios from 'axios'

const searchImages = async (term) =>{
    const response = await axios.get('https://api.unsplash.com/search/photos',{
        headers:{
            Authorization:'Client-ID MAmEESfT4WYs3SQdJp0kywHcN0ggxmpG1q4o1Xo5Deo'
        },
        params:{
            query: term,
        },
    });
    return response.data.results;
}

export default searchImages