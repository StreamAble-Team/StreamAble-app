import axios from "axios";
import { ANIME, META } from "@consumet/extensions";

const USER_AGENT =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36";
const baseURL = `https://consume-api.onrender.com/api`;

const api = axios.create({
  baseURL: baseURL,
  headers: {
    "User-Agent": USER_AGENT,
  },
});

const anilist = new META.Anilist();
let anilistManga = new META.Anilist.Manga();

export const getPopular = async (page = 1, perPage = 20) => {
  const results = await anilist.fetchPopularAnime(page, perPage);

  if (!results.results)
    return {
      error: "No data",
    };

  const sortedData = results.results.sort((a, b) => {
    return b.rating - a.rating;
  });

  return sortedData;
};

export const getTrending = async (page = 1, perPage = 20) => {
  const results = await anilist.fetchTrendingAnime(page, perPage);

  if (!results?.results)
    return {
      error: "No data",
    };

  const sortedData = results?.results.sort((a, b) => {
    return b.rating - a.rating;
  });

  return sortedData;
};

export const getTopRated = async (limit = 10) => {
  const { data } = await api.get(
    `/anilist/advanced-search?sort=["SCORE_DESC"]&perPage=${limit}`
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

  const results = await anilist.search(search, page, perPage);

  if (!results?.results)
    return {
      error: "No data",
    };

  return results.results;
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
  const data = anilistManga.fetchMangaInfo(id);

  if (!data)
    return {
      error: "No data",
    };

  return data;
};

export const getMangaPages = async (id) => {
  const data = anilistManga.fetchChapterPages(id);

  if (!data)
    return {
      error: "No data",
    };

  return data;
};

export const getSource = async (episodeId, server) => {
  let { data } = await api.get(`/anilist/watch?episodeId=${episodeId}`);

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
