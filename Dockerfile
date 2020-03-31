FROM node:12.13-alpine As development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=development

COPY . .

RUN npm run build

FROM node:12.13-alpine as production

ARG NODE_ENV=production
ARG MATTERMOST_API_URL
ARG PORT=3000

ENV NODE_ENV=${NODE_ENV}
ENV MATTERMOST_API_URL=${MATTERMOST_API_URL}
ENV PORT=${PORT}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

COPY . .

COPY --from=development /usr/src/app/dist ./dist

EXPOSE ${PORT}

CMD ["npm", "run", "start:prod"]