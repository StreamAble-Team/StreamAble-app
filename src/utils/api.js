import axios from "axios";

const USER_AGENT =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36";
const baseURL = `https://api.streamable.moe/api`;

const api = axios.create({
  baseURL: baseURL,
  headers: {
    "User-Agent": USER_AGENT,
  },
});

export const getPopular = async (page = 1, perPage = 20) => {
  const {
    data: { results },
  } = await api.get(`/anilist/popular?page=${page}&perPage=${perPage}`);

  if (!results)
    return {
      error: "No data",
    };

  const sortedData = results.sort((a, b) => {
    return b.rating - a.rating;
  });

  return sortedData;
};

export const getTrending = async (page = 1, perPage = 20) => {
  const {
    data: { results },
  } = await api.get(`/anilist/trending?page=${page}&perPage=${perPage}`);

  if (!results)
    return {
      error: "No data",
    };

  const sortedData = results.sort((a, b) => {
    return b.rating - a.rating;
  });

  return sortedData;
};

export const getTopRated = async (limit = 20, page = 1) => {
  const { data } = await api.get(
    `/anilist/top-rated?page=${page}&perPage=${limit}`
  );

  if (!data)
    return {
      error: "No data",
    };

  return data;
};

export const getSearch = async (search, page = 1, perPage = 20) => {
  if (!search)
    return {
      error: "No search",
    };

  const {
    data: { results },
  } = await api.get(
    `/anilist/search/${encodeURIComponent(
      search
    )}?page=${page}&perPage=${perPage}`
  );

  if (!results)
    return {
      error: "No data",
    };

  return results;
};

export const getInfo = async (id, dub) => {
  const { data } = await api.get(
    `/anilist/info/${id}?dub=${dub}&fetchFiller=true`
  );

  if (!data)
    return {
      error: "No data",
    };

  return data;
};

export const getMangaInfo = async (id) => {
  try {
    const { data } = await api.get(`/anilist-manga/info/${id}`);

    if (!data)
      return {
        error: "No data",
      };

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getMangaPages = async (id) => {
  const { data } = await api.get(`/anilist-manga/read?chapterId=${id}`);

  console.log({ data });

  if (!data)
    return {
      error: "No data",
    };

  return data;
};

export const getSource = async (episodeId, server) => {
  let { data } = await api.get(`/anilist/watch/${episodeId}`);

  if (!data)
    return {
      error: "No data",
    };

  return data;
};

export const getEpisodes = async (id, dub = false, fetchFiller = true) => {
  const { data } = await api.get(
    `/anilist/episodes/${id}?dub=${dub}&fetchFiller=${fetchFiller}`
  );

  if (!data)
    return {
      error: "No data",
    };

  return data;
};

export const getSkipTimes = async (malId, episodeNumber) => {
  const { data } = await api.get(`/aniskip/${malId}/${episodeNumber}`);

  if (!data)
    return {
      error: "No data",
    };

  return data;
};

export const getProviders = async (id) => {
  const { data } = await api.get("/utils/providers/anime");

  if (!data)
    return {
      error: "No data",
    };

  return data;
};
