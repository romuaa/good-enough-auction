create table bids (
       id serial,
       batchid char(10) unique not null,
       name varchar(100) not null,
       email varchar(30) not null,
       value integer not null,
       primary key(id)       
);
