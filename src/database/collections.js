import { getDBConnection } from "./db";

export const openDatabase = async () => {
  return await getDBConnection();
};

export const createTable = async (db) => {
  //CREATE TABLE TO STORE PLAN TO WATCH, DROPPED
  const query = `CREATE TABLE IF NOT EXISTS anime (
    id TEXT PRIMARY KEY NOT NULL,
    title TEXT NOT NULL,
    image TEXT NOT NULL,
    watching BOOLEAN DEFAULT(FALSE),
    completed BOOLEAN DEFAULT(FALSE),
    onHold BOOLEAN DEFAULT(FALSE),
    dropped BOOLEAN DEFAULT(FALSE),
    planToWatch BOOLEAN DEFAULT(FALSE),
    score INTEGER DEFAULT(0),
    currentEpisode INTEGER DEFAULT(0),
    totalEpisodes INTEGER DEFAULT(0),
    nextEpisodeId TEXT NOT NULL,
    lastUpdated DATETIME DEFAULT CURRENT_TIMESTAMP
);`;

  // CREATE PROMISE
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        query,
        [],
        (txObj, { rows: { _array } }) => {
          resolve(_array);
        },
        (txObj, error) => {
          reject(error);
        }
      );
    });
  });

  // RETURN PROMISE
  return promise;
};

export const insert = async (db, data) => {
  // Update the anime data
  const query = `INSERT INTO anime (id, title, image, watching, completed, onHold, dropped, planToWatch, score, currentEpisode, totalEpisodes, nextEpisodeId) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  // CREATE PROMISE
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        query,
        [
          String(data.id),
          String(data.title),
          String(data.image),
          Boolean(data.watching),
          Boolean(data.completed),
          Boolean(data.onHold),
          Boolean(data.dropped),
          Boolean(data.planToWatch),
          parseInt(data.score),
          parseInt(data.currentEpisode),
          parseInt(data.totalEpisodes),
          String(data.nextEpisodeId),
        ],
        (txObj, { rows: { _array } }) => {
          resolve(_array);
        },
        (txObj, error) => {
          reject(error);
        }
      );
    });
  });

  // RETURN PROMISE
  return promise;
};

export const createInsertData = (data) => {
  return {
    id: data.id,
    title: data?.title?.english || data?.title?.romaji || data?.title?.native,
    image: data?.image || data?.cover,
    watching: !data?.watching ? false : true,
    completed: !data?.completed ? false : true,
    onHold: !data?.onHold ? false : true,
    dropped: !data?.dropped ? false : true,
    planToWatch: !data?.planToWatch ? false : true,
    score: !data?.score ? 0 : data.score,
    currentEpisode: !data?.progress ? 0 : data.progress,
    totalEpisodes: data.totalEpisodes,
    nextEpisodeId: data?.nextAiringEpisode?.id || data?.nextEpisodeId,
  };
};

export const update = async (db, data) => {
  // Update the anime data
  const query = `UPDATE anime SET watching = ?, completed = ?, onHold = ?, dropped = ?, planToWatch = ?, score = ?, currentEpisode = ?, totalEpisodes = ?, nextEpisodeId = ? WHERE id = ?`;

  // CREATE PROMISE
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        query,
        [
          Boolean(data.watching),
          Boolean(data.completed),
          Boolean(data.onHold),
          Boolean(data.dropped),
          Boolean(data.planToWatch),
          parseInt(data.score),
          parseInt(data.currentEpisode),
          parseInt(data.totalEpisodes),
          String(data.nextEpisodeId),
          String(data.id),
        ],
        (txObj, { rows: { _array } }) => {
          resolve(_array);
        },
        (txObj, error) => {
          reject(error);
        }
      );
    });
  });

  // RETURN PROMISE
  return promise;
};

export const select = async (db) => {
  //SELECT ALL DATA AND RETURN IT AS AN PROMISE
  const query = `SELECT * FROM anime ORDER BY title ASC`;

  // CREATE PROMISE
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        query,
        [],
        (txObj, { rows: { _array } }) => {
          resolve(_array);
        },
        (txObj, error) => {
          reject(error);
        }
      );
    });
  });

  // RETURN PROMISE
  return promise;
};

export const deleteData = async (db, id) => {
  // DELETE DATA FROM THE DATABASE
  const query = `DELETE FROM anime WHERE id = ?`;

  // CREATE PROMISE
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        query,
        [id],
        (txObj, { rows: { _array } }) => {
          resolve(_array);
        },
        (txObj, error) => {
          reject(error);
        }
      );
    });
  });

  // RETURN PROMISE
  return promise;
};

export const selectById = async (db, id) => {
  //SELECT ALL DATA AND RETURN IT AS AN PROMISE
  const query = `SELECT * FROM anime WHERE id = ?`;

  // CREATE PROMISE
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        query,
        [id],
        (_txObj, { rows: { _array } }) => {
          resolve(_array);
        },
        (_txObj, error) => {
          reject(error);
        }
      );
    });
  });

  // RETURN PROMISE
  return promise;
};
