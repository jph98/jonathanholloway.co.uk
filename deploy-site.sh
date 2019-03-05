#!/bin/bash

npm run build 
cd public && zip -r site.zip *
unzip -l site.zip
scp site.zip root@jonathanholloway.co.uk:/root
ssh root@jonathanholloway.co.uk "rm -Rf /var/www/html/jonathanholloway/* && unzip -o /root/site.zip -d /var/www/html/jonathanholloway"

