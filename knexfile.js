const sharedConfig =  {
    client: 'sqlite3',
    useNullAsDefault: true,
    migrations: {directory: './data/migrations'},
    seeds: {directory: './data/seeds'},
    //sqlite3
    pool: {afterCreate: (conn, done) => conn.run('PRAGMA foreign_keys = ON', done)}
    //this line above enforces foreign keys
}
module.exports= {
    development: {
        ...sharedConfig,
        connection: { filename: './data/travel.db3'},
    },
    testing: {
        ...sharedConfig,
        connection: {filename: './data/test.db3'}
    },
}