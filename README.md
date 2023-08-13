# Firebase Test

This repository demonstrates Firebase hosting both a front-end and back-end from the same repository. This test uses a SvelteKit front-end, with experimental Firebase support for SSR as well as a FastAPI Python back-end/API.

Static site files are served through Firebase Hosting, SSR is handled by Cloud Functions (automatically, with Firebase Framework Tools), and the back-end is containerized and deployed using Cloud Run.

### Requirements

- npm
- python 3.11 & pip
- gcloud
- docker

### Process

- Initialize SvelteKit project

  ```
  npm create svelte@latest frontend
  cd frontend
  npm install
  ```

- Initialize Firebase Hosting
  ```
  cd frontend
  firebase experiments:enable webframeworks
  firebase init hosting
  ```
  - Reply yes when prompted if you would like to use the existing SvelteKit project.
- Run SvelteKit project in Firebase emulator
  ```
  firebase emulators:start
  ```
  - This launches the Vite-driven development server using the Firebase emulator. Navigate to `localhost:5000` in a browser to see the web-app running.
- Deploy app

  ```
  firebase deploy
  ```

  - This deploys the web-app to Firebase.

- Set up FastAPI back-end
  - make `app` directory, `Dockerfile`, and `requirements.txt` inside `./backend`
  - Create API in `app/main.py`
- Build/Run Docker image of back-end server locally

  ```
  cd backend
  docker build -t backend .
  docker run -d -p 9090:8080 -e PORT=8080 backend
  ```

  - First, this builds a Docker image using the Dockerfile, tagging it as `backend`. Note we can tag it as `backend:1.0.0`, for instance, if we would like to version our containers.
  - Then, we run the image in a container. `-p` makes one of the container's ports accessible to the outside computer: in this case, we expose port 8080 of the container to port 9090 on the host. Finally, we set the environment variable PORT to be 8080, allowing the server process in the container to know which port to listen on.
  - Ensure this works by navigating to `localhost:9090/docs` in a browser.

- Build/Deploy Docker image on Google Cloud Run
  - Create a Docker repository on Artifact Registry. Name it clearly, in our case `api_repo`.
  - We create a shell script to build/deploy our images remotely: `deploy.sh`. Note that we set our Firebase project ID, service ID, and name of the image here.
  - In addition, in `frontend/firebase.json`, note the additional rewrites section, redirecting requests to `/api` to our containerized service, identified by the service ID.
  - Run `./deploy.sh` and confirm the service id when prompted.
