FROM node:18
WORKDIR /app
COPY . .
RUN npm install --include=dev
RUN npm run build
CMD ["npm", "start"]
