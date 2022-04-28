
- docker build -t dikabrenda/cypress_project:v1 .

## download (pull) image yang telah di-push sebelumnya.
- docker pull dikabrenda/cypress_project:v1

## coba membuat container.
- docker run -d -p 80:80 --name web cypress_project:v1

## Menampilkan Container
- docker ps