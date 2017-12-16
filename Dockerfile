# Prod Dockerfile
FROM node:9

# Create base directory
RUN mkdir /src
WORKDIR /src

# Install packages
COPY ./package.json /src/package.json
COPY ./package-lock.json /src/package-lock.json
RUN npm install --silent

# Add code
COPY ./ /src

ENV NODE_ENV development

EXPOSE 3000

CMD ["node", "bin/www"]
