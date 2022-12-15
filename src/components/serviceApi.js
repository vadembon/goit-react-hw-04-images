import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const KEY_API = '30686791-b3479a34cf20c1ed10f00ae7f';

export async function getImgGallery(searchQuery, page) {
  const searchParams = new URLSearchParams({
    key: KEY_API,
    q: searchQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: page,
    per_page: 12,
  });
  const response = await axios.get(`${BASE_URL}?${searchParams}`);
  return response.data.hits;
}
