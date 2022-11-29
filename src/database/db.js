import * as SQLite from "expo-sqlite";

export const getDBConnection = async (dbName) => {
  return SQLite.openDatabase(`${dbName}.db`);
};
