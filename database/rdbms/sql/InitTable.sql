use rs_db;
create table if not exists rs_card_mini (
    id integer auto_increment,
    width integer default 1 not null,
    height integer default 1 not null,
    x_pos integer default 1 not null,
    y_pos integer default 1 not null,
    background varchar(10) default '#FFFFFF' not null,
    constraint pk_rscardmini_id primary key (id)
);

create table if not exists rs_card_mini_title (
    id integer auto_increment,
    rs_card_mini_id integer not null,
    value varchar(255) default 'default' not null,
    color varchar(10) default '#000000' not null,
    size integer default 14 not null,
    constraint pk_rscardminititle_id primary key (id),
    constraint fk_rscardminititle_id_rscardmini_id foreign key (rs_card_mini_id) references rs_card_mini(id) on delete cascade
);

create table if not exists rs_card_mini_item_main (
    id integer auto_increment,
    rs_card_mini_id integer not null,
    value varchar(255) default 'default' not null,
    color varchar(10) default '#000000' not null,
    size integer default 14 not null,
    constraint pk_rscardminiitemmain_id primary key (id),
    constraint fk_rscardminiitemmain_id_rscardmini_id foreign key (rs_card_mini_id) references rs_card_mini(id) on delete cascade
);

create table if not exists rs_card_mini_item_sub (
    id integer auto_increment,
    rs_card_mini_id integer not null,
    value varchar(255) default 'default' not null,
    color varchar(10) default '#000000' not null,
    size integer default 14 not null,
    constraint pk_rscardminiitemsub_id primary key (id),
    constraint fk_rscardminiitemsub_id_rscardmini_id foreign key (rs_card_mini_id) references rs_card_mini(id) on delete cascade
);