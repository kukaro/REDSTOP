#!/usr/bin/env bash
echo '  init database'
sudo mysql --force -uroot -proot < "../sql/InitDb.sql"
echo '  init table'
sudo mysql --force -uroot -proot < "../sql/InitTable.sql"
echo '  init data'
sudo mysql --force -uroot -proot < "../sql/InitData.sql"