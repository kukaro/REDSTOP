#!/usr/bin/env bash
sudo mysql --force -uroot -proot < "../sql/InitDb.sql"
sudo mysql --force -uroot -proot < "../sql/InitTable.sql"