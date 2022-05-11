FROM node:lts-alpine as build-stage
WORKDIR app
COPY package.json /app
RUN yarn install
COPY . /app
RUN yarn build
EXPOSE 3000
ENV NEXT_HOST=0.0.0.0
ENV NEXT_PORT=3000
CMD ["yarn","dev"]

