// Import OpenDatabase function
import { getDBConnection } from "./db";

// Import the functions from the episode-data.js file
import {
  openDatabase as openEpisodeDatabase,
  createTable as createEpisodeTable,
  insert as insertEpisode,
  select as selectEpisode,
  selectAllWatched as selectAllWatchedEpisodes,
  selectAll as selectAllEpisodes,
  update as updateEpisode,
  deleteData as deleteEpisodeData,
  deleteAllFromSameAnime as deleteAllEpisodesFromSameAnime,
} from "./episode-data";

// Export all the functions from this file
export {
  getDBConnection,
  openEpisodeDatabase,
  createEpisodeTable,
  insertEpisode,
  selectEpisode,
  selectAllEpisodes,
  selectAllWatchedEpisodes,
  updateEpisode,
  deleteEpisodeData,
  deleteAllEpisodesFromSameAnime,
};
