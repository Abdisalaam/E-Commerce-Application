## stop nginx
if [ -e /export/servers/nginx/run/nginx.pid ]; then
 sudo kill -9 $(cat /export/servers/nginx/run/nginx.pid)
 sudo killall nginx
fi
