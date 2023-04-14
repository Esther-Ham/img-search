import axios from "axios";

const searchImages = async (term, page = 1) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID M9TFhRGWIMY5qjvh1cLqjXCJJac--s1TUVYplOpCMQE'
        },
        params: {
            query: term,
            page: page,
        },
    });

    console.log(response);

    return response.data.results;
};

export default searchImages;