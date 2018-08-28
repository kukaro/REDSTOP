#!/usr/bin/env bash
echo '  remove database'
sudo mysql --force -uroot -proot < "../sql/DropDatabase.sql"
#echo '  remove table'
#sudo mysql --force -uroot -proot < "../sql/DropTable.sql"