import axios from "axios";

const fetchImages = async (query, page) => {
  const response = await axios.get(`https://api.unsplash.com/search/photos`, {
    params: {
      query,
      page,
      client_id: "5lC3xJBfWrmSga7fF2gxYDybF8qzTgtINMxjMz2FpVs",
    },
  });
  return response.data;
};

export default fetchImages;
