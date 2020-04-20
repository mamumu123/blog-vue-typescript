build-images:
	docker build -t mu-nginx .
build-container:
	docker stop my-site
	docker rm my-site
	docker run -p 3000:80 -d --name my-site mu-nginx

build:
	docker run \
		-p 3000:80 \
		-d --name my-site \
		--mount type=bind,source=/Users/mu/daydayup/subject/mySite/nginx,target=/etc/nginx/conf.d \
		--mount type=bind,source=/Users/mu/daydayup/subject/mySite/dist,target=/usr/share/nginx/html \
		nginx
