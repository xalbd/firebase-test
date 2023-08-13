GOOGLE_PROJECT_ID=test-project-313c4
REPO_NAME=api-repo
IMAGE_NAME=api_image
SERVICE_ID=api

gcloud builds submit --tag us-docker.pkg.dev/$GOOGLE_PROJECT_ID/$REPO_NAME/$IMAGE_NAME \
  --project=$GOOGLE_PROJECT_ID

gcloud run deploy $SERVICE_ID --image us-docker.pkg.dev/$GOOGLE_PROJECT_ID/$REPO_NAME/$IMAGE_NAME \
  --region us-west1 \
  --platform managed \
  --allow-unauthenticated \
  --project=$GOOGLE_PROJECT_ID