# 0. Shell 실행
npm run start:dev
  : localhost:3000 연결 및 앱 실행
  
# 1. 게시글 생성
curl -X POST http://localhost:3000/boards \
  -H "Content-Type: application/json" \
  -d '{
        "title": "첫 번째 게시글",
        "content": "이것은 첫 번째 게시글의 내용입니다.",
        "author": "홍길동"
      }'

# 2. 모든 게시글 조회 (Retrieve All Posts)

curl http://localhost:3000/boards/

# 3. ID로 특정 게시글 조회 (Retrieve a Post by ID)

curl http://localhost:3000/boards/1

id 값에 따라 1,2,3 등으로 조회하면 됨.

# 4. 게시글 업데이트 (Update a Post)

curl -X PUT http://localhost:3000/boards/1 \
  -H "Content-Type: application/json" \
  -d '{
        "title": "수정된 제목",
        "content": "수정된 내용입니다.",
        "author": "김철수"
      }'

# 5. 게시글 삭제 (Delete a Post)

curl -X DELETE http://localhost:3000/boards/1