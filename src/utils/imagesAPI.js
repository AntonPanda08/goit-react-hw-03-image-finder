import axios from "axios";
const fetchImagesWithQuery = (
  searchQuery,
  page = 1,
  key = "17752655-7d1e30d3f189053aec3fab03b"
) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then((res) => res.data.hits);
};
export default {
  fetchImagesWithQuery,
};
