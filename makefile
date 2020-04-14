build-images:
	docker build -t mu-nginx .
build-container:
	docker stop my-site
	docker rm my-site
	docker run -p 3000:80 -d --name my-site mu-nginx

build:
	make build-images
	make build-container