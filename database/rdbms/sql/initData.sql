use rs_db;
insert into rs_card_mini (width,height,x_pos,y_pos,background) values (1,1,1,1,'#ffffff');
insert into rs_card_mini_title (rs_card_mini_id,value,color,size) values (1,'TOTAL APIS','#5e5e5e',13);
insert into rs_card_mini_item_main (rs_card_mini_id,value,color,size) values (1,'43','#4da1ff',50);
insert into rs_card_mini_item_sub (rs_card_mini_id,value,color,size) values (1,'APIs','#979797',13);

insert into rs_card_mini (width,height,x_pos,y_pos,background) values (1,1,1,2,'#ff7575');
insert into rs_card_mini_title (rs_card_mini_id,value,color,size) values (1,'AVAILABILITY','#611313',13);
insert into rs_card_mini_item_main (rs_card_mini_id,value,color,size) values (1,'98','#ffffff',50);
insert into rs_card_mini_item_sub (rs_card_mini_id,value,color,size) values (1,'%','ffffff',50);

insert into rs_card_mini (width,height,x_pos,y_pos,background) values (1,1,1,3,'#00e8c5');
insert into rs_card_mini_title (rs_card_mini_id,value,color,size) values (1,'AVG / P95 RESPONSE TIME','#611313',13);
insert into rs_card_mini_item_main (rs_card_mini_id,value,color,size) values (1,'2','#ffffff',50);
insert into rs_card_mini_item_sub (rs_card_mini_id,value,color,size) values (1,'s / 4.4s','#ffffff',13);