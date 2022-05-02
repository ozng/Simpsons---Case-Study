import { db } from './database'

export const init = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS characters (id INTEGER PRIMARY KEY NOT NULL, name TEXT NOT NULL, description TEXT NOT NULL, job TEXT NOT NULL, avatar TEXT NOT NULL );',
                [],
                () => {
                    resolve();
                },
                (_, err) => {
                    reject(err)
                }
            )
        });
    })
    return promise;
};


export const insertCharacter = (name, description, job, avatar) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'INSERT INTO characters (name, description, job, avatar ) VALUES (?, ?, ?, ?)',
                [name, description, job, avatar],
                (_, result) => {
                    resolve(result);
                },
                (_, err) => {
                    reject(err)
                }
            )
        });
    })
    return promise;
};

export const fetchCharDataFromStorage = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'SELECT * FROM characters',
                [],
                (_, result) => {
                    resolve(result);
                },
                (_, err) => {
                    reject(err)
                }
            )
        });
    })
    return promise;
}

export const deleteCharacterFromStorage = (id) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                `DELETE FROM characters WHERE id = ${id}`,
                [],
                (_, result) => {
                    resolve(result);
                },
                (_, err) => {
                    reject(err)
                }
            )
        });
    })
    return promise;
}

export const deleteAllCharacters = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                `DELETE FROM characters`,
                [],
                (_, result) => {
                    resolve(result);
                },
                (_, err) => {
                    reject(err)
                }
            )
        });
    })
    return promise;
}