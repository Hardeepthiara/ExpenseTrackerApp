
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN yarn install --production
CMD ["node", "ExpenseTracker.js"]
CMD ["html", "index.html"]
EXPOSE 3000