const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://auction:auction@localhost:5432/auction';

const client = new pg.Client(connectionString);
client.connect();
const query = client.query('create table bids (id serial, batchid char(10) not null, name varchar(100) not null, email varchar(30) not null, value integer not null, primary key(id))');
query.on('end', () => { client.end(); });

