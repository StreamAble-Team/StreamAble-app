import { getDBConnection } from "./db";

/*
 * EPISODES
 */
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
  alterTable as alterEpisodeTable,
} from "./episode-data";

/*
 * COLLECTIONS
 */
import {
  openDatabase as openCollectionsDatabase,
  createTable as createCollectionTable,
  insert as insertCollection,
  select as selectCollection,
  update as updateCollection,
  deleteData as deleteCollectionData,
  createInsertData as createInsertCollectionData,
} from "./collections";

// Export all the functions from this file
export {
  getDBConnection,

  /*
   * EPISODES
   */
  openEpisodeDatabase,
  createEpisodeTable,
  insertEpisode,
  selectEpisode,
  selectAllEpisodes,
  selectAllWatchedEpisodes,
  updateEpisode,
  deleteEpisodeData,
  deleteAllEpisodesFromSameAnime,
  alterEpisodeTable,
  /*
   * COLLECTIONS
   */
  openCollectionsDatabase,
  createCollectionTable,
  insertCollection,
  selectCollection,
  updateCollection,
  deleteCollectionData,
  createInsertCollectionData,
};
