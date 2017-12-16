# Node Docker Demo

This is a simple Node/Express app to demonstrate using Docker for local Node development.

## Setup

- Build the Docker image: `docker build -t node-docker .`
  - This will install the dependencies and add the code to the image.
  - There is also a shortcut command for this: `npm run build`.

## Local Development
- Run the container: `docker run --rm -p 3000:3000 -d node-docker`.
  - This will run the code as it stands now. Updates won't be visible until you restart the container.
  - The application will be running on `localhost:3000`.
- Run the container with bind mounts for code: `docker run --rm -p 3000:3000 -d -v $(pwd)/public:/src/public -v $(pwd)/routes:/src/routes -v $(pwd)/views:/src/views node-docker`.
  - This mounts all the code (except the `app.js` file) so updates will be visible immediately.
  - The application will be running on `localhost:3000`.
  - Because this is such a long command, you can also run it via npm: `npm start`.
  - If you use the npm shortcut, you can also stop the container with `npm stop`.
