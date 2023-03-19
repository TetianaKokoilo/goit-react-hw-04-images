const API_KEY = '32970758-8ba6ee6d9fec7577e22e4216e';

async function fetchImages(name, page) {
  const response = await fetch(
        `https://pixabay.com/api/?q=${name}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );
    if (response.ok) {
        return response.json();
    }
    return await Promise.reject(
        new Error(`There is no picture of ${name}`)
    );
    
}

const PixabeyAPI = {
    fetchImages,
};
export default PixabeyAPI;
