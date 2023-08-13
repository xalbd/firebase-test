FROM python:3.11
WORKDIR /code
COPY ./requirements.txt /code/requirements.txt
RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt
COPY ./app /code/app
CMD exec gunicorn app.main:app --workers 1 --threads 4 --worker-class uvicorn.workers.UvicornWorker --bind :$PORT