#!/usr/bin/env bash
mongoimport --db rs_db --collection test_block < "../json/test-block.json"