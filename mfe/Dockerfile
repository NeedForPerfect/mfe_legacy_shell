#stage 1
FROM node:14 as builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
#stage 2
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
#remove all from default files from /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/dist/mfe .
ENTRYPOINT ["nginx", "-g", "daemon off;"]
