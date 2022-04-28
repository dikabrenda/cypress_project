
- docker build -t dikabrenda/cypress_project:v1 .

## download (pull) image yang telah di-push sebelumnya.
- docker pull dikabrenda/cypress_project:v1

## coba membuat container
- docker run -d -p 8000:8000 cypress_project:v1

## Menampilkan Container
- docker ps -a

## Menampilkan image
- docker image

## Remove Docker Image
- docker rm -f dikabrenda/cypress_project