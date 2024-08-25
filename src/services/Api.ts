import axios from "axios";

type ImageData = {
  id: number;
  urls: {
    small: string;
    regular: string;
  };
  description: string;
};

type DataResponse = {
  results: ImageData[];
  total_pages: number;
};

const fetchImages = async (
  query: string,
  page: number
): Promise<DataResponse> => {
  const response = await axios.get<DataResponse>(
    `https://api.unsplash.com/search/photos`,
    {
      params: {
        query,
        page,
        client_id: "5lC3xJBfWrmSga7fF2gxYDybF8qzTgtINMxjMz2FpVs",
      },
    }
  );
  return response.data;
};

export default fetchImages;
