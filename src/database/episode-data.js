import { getDBConnection } from "./db";

export const openDatabase = async () => {
  return await getDBConnection();
};

export const createTable = async (db) => {
  // //Delete table
  // await db.transaction((tx) => {
  //   tx.executeSql(
  //     `DROP TABLE IF EXISTS episodes`,
  //     [],
  //     (txObj, resultSet) => {
  //       console.log("Table deleted");
  //     },
  //     (txObj, error) => {
  //       console.log("Error", error);
  //     }
  //   );
  // });

  // create table if not exists
  const query = `CREATE TABLE IF NOT EXISTS episodes (
    id TEXT PRIMARY KEY NOT NULL,
    title TEXT NOT NULL,
    animeId INTEGER NOT NULL,
    image TEXT NOT NULL,
    episode INTEGER NOT NULL,
    nextEpisodeId TEXT NOT NULL,
    watched BOOLEAN DEFAULT(${Number(false)}),
    watchedAmount FLOAT DEFAULT(0),
    watchedAt DATETIME DEFAULT CURRENT_TIMESTAMP
);`;

  //Execute query
  try {
    const DB = await db.transaction((tx) => {
      return tx.executeSql(query, []);
    });
    return DB;
  } catch (error) {
    console.log(error);
  }
};

export const alterTable = async (db) => {
  //Alter table
  const query = `ALTER TABLE episodes ADD COLUMN watchedAmount FLOAT;`;

  //Execute query
  try {
    await db.transaction((tx) => {
      tx.executeSql(query, []);
    });
  } catch (error) {
    console.log(error);
  }
};

export const insert = async (db, data) => {
  // Update the episode data
  const query = `INSERT INTO episodes (id, title, animeId, image, episode, nextEpisodeId, watched, watchedAmount) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

  // Execute query
  return await db.transaction((tx) => {
    return tx.executeSql(query, [
      String(data.id),
      String(data.title),
      parseFloat(data.animeId),
      String(data.image),
      parseInt(data.episode),
      String(data.nextEpisodeId),
      Boolean(data.watched),
      parseFloat(data.watchedAmount),
    ]);
  });
};

export const select = async (db, animeId) => {
  //SELECT ALL DATA AND RETURN IT AS AN PROMISE
  const query = `SELECT * FROM episodes WHERE animeId = ? ORDER BY episode DESC`;

  // CREATE PROMISE
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        query,
        [animeId],
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

export const selectAllWatched = async (db, animeId) => {
  //SELECT ALL DATA AND RETURN IT AS AN PROMISE
  const query = `SELECT * FROM episodes WHERE animeId = ? AND watched = 1`;

  // CREATE PROMISE
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        query,
        [animeId],
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

export const selectAll = async (db) => {
  //SELECT ALL DATA AND RETURN IT AS AN PROMISE
  const query = `SELECT * FROM episodes`;

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

export const update = async (db, data) => {
  // Update the episode data
  const query = `UPDATE episodes SET watched = ?, watchedAmount = ?, watchedAt = CURRENT_TIMESTAMP WHERE id = ?`;

  // Execute query
  return await db.transaction((tx) => {
    return tx.executeSql(query, [
      Boolean(data.watched),
      parseFloat(data.watchedAmount),
      String(data.id),
    ]);
  });
};

export const deleteData = async (db, id) => {
  // Delete the episode data
  const query = `DELETE FROM episodes WHERE id = ?`;

  // Execute query
  return await db.transaction((tx) => {
    return tx.executeSql(query, [id]);
  });
};

export const deleteAllFromSameAnime = async (db, animeId) => {
  // Delete the episode data
  const query = `DELETE FROM episodes WHERE animeId = ?`;

  // Execute query
  return await db.transaction((tx) => {
    return (
      tx.executeSql(query, [animeId], (_txObj, _resultSet) => {
        console.log("Deleted all from same anime");
      }),
      (_txObj, error) => {
        console.log("Error", error);
      }
    );
  });
};
