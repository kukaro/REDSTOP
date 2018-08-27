use rs_db;
create table if not exists rs_text (
    id integer auto_increment,
    value varchar(255),
    color varchar(10),
    size integer,
    constraint pk_rs_text_id primary key (id)
);

create table if not exists rs_card_mini_item (
    id integer auto_increment,
    text_id integer not null,
    constraint pk_rs_card_mini_id primary key (id),
    constraint fk_rscardminiitem_textid_rstext_id foreign key (text_id) references rs_text(id) on delete cascade
);

create table if not exists rs_card_mini (
    id integer auto_increment,
    width integer default 1 not null,
    height integer default 1 not null,
    x_pos integer default 1 not null,
    y_pos integer default 1 not null,
    background varchar(10) default '#FFFFFF' not null,
    title_id integer,
    item_id integer,
    constraint pk_rscardmini_id primary key (id),
    constraint fk_rscardmini_titleid_rstext_id foreign key (title_id) references rs_text(id) on delete cascade,
    constraint fk_rscardmini_itemid_rstext_id foreign key (item_id) references rs_card_mini_item(id) on delete cascade
);