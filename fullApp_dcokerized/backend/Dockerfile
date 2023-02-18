FROM python:3.10
WORKDIR /code

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONBUFFERED 1

RUN apt-get update && apt-get install ffmpeg libsm6 libxext6  -y

COPY --chown=root:root ./requirements.txt /code/requirements.txt

RUN pip install --upgrade -r /code/requirements.txt  
# --no-cache-dir
COPY --chown=root:root ./app /code/app

ENV PORT 8000
ENV HOST 0.0.0.0

EXPOSE 8000

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"] 
