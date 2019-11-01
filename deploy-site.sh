#!/bin/bash

npm run build 

# a - push, z - compression, P - progress
rsync -azP public/ root@jonathanholloway.co.uk:/var/www/html/jonathanholloway


