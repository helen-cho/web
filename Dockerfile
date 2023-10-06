# 베이스 이미지 설정
FROM node:16.17.1

# /app 을 기본 디렉터리로 설정
WORKDIR /app

#package.json과 package-lock.json 두개의 파일을 /app에 복사
COPY package.json package-lock.json /app

# npm install 실행
RUN npm install

#dockerfile  파일이 있는 경로의 모든 파일을 /app에 복사
COPY . /app

# 실행할 명령어 작성(ENTRYPOINT:컨테이너가 최초에 꼭 실행해야만 하는 명령어가 있을 때)
#CMD ["npm", "start"]
ENTRYPOINT ["npm", "start"]