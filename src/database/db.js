import * as SQLite from "expo-sqlite";

export const getDBConnection = async () => {
  return SQLite.openDatabase(`user-data.db`);
};
