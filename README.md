<h1 align="center">Blogs API</h1>

## 💻 Install the project

Clone the repo:

```
git clone git@github.com:LeandroGoerck/blogs-api.git
```

Enter the repo folder

```
cd blogs-api
```

Install the dependencies:
```
npm install
```

Create a .env file and add the environment variables
```
HOSTNAME=localhost
MYSQL_USER=exampleuser
MYSQL_PASSWORD=examplepassword
PORT=3000
JWT_SECRET=secretexample

```

Run the application
```
npm run dev
```

## 🚀 Skills

- Create and associate tables using sequelize models;
- Build endpoints to consume the created models;
- Make a CRUD with ORM.

## 🔧 Development

This project uses Sequelize and ExpressJS to build an API that CRUD blog posts. 

## 📝 Project features

- [x] 1. Your application must have the POST `/user` endpoint

- The endpoint can add a new user to the database table;

- The request body must have the following format:

  ```json
  {
    "displayName": "Brett Wiltshire",
    "email": "brett@email.com",
    "password": "123456",
    "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
  }
  ```
- The `displayName` field must be a string with at least 8 characters;

- The `email` field will be considered valid if it has the format `<prefix>@<domain>` and is unique. It is mandatory.

- The password must contain 6 characters. It is mandatory.

- If there is a person with the same email in the base, the following error should be returned:

  ```json
  {
    "message": "User already registered"
  }
  ```

- Otherwise, return the same response from the `/login` endpoint, a `JWT` token:

  ```json
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjo1LCJkaXNwbGF5TmFtZSI6InVzdWFyaW8gZGUgdGVzdGUiLCJlbWFpbCI6InRlc3RlQGVtYWlsLmNvbSIsImltYWdlIjoibnVsbCJ9LCJpYXQiOjE2MjAyNDQxODcsImV4cCI6MTYyMDY3NjE4N30.Roc4byj6mYakYqd9LTCozU1hd9k_Vw5IWKGL4hcCVG8"
  }
  ```
 _The previous token is fictitious_

##

- [x] 2. Your application must have the POST endpoint `/login`

- The body of the request should follow the format below:

  ```json
  {
    "email": "email@mail.com",
    "password": "123456"
  }
  ```

- If any of these fields is invalid or there is no corresponding user in the database, return a status code 400 with the body `{ message: "Invalid fields" }`.

- If everything is ok with the login, the response should be a `JWT` token, in the following format:

  ```json
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjo1LCJkaXNwbGF5TmFtZSI6InVzdWFyaW8gZGUgdGVzdGUiLCJlbWFpbCI6InRlc3RlQGVtYWlsLmNvbSIsImltYWdlIjoibnVsbCJ9LCJpYXQiOjE2MjAyNDQxODcsImV4cCI6MTYyMDY3NjE4N30.Roc4byj6mYakYqd9LTCozU1hd9k_Vw5IWKGL4hcCVG8"
  }
  ```
 _The previous token is fictitious_

##

- [x] 3. Your application must have the GET `/user` endpoint

- Must list all **Users** and return them in the following structure:

  ```json
  [
    {
      "id": "401465483996",
      "displayName": "Brett Wiltshire",
      "email": "brett@email.com",
      "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
    }
  ]
  ```

- The request must have an authentication token in the headers and otherwise return a `status 401` code.

##

- [x] 4. Your application must have the GET `/user/:id` endpoint

- Returns user details based on the `id` of the route. The data must have the following format:

  ```json
  {
    "id": "401465483996",
    "displayName": "Brett Wiltshire",
    "email": "brett@email.com",
    "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
  }
  ```

- The request must have an authentication token in the headers and otherwise return a `status 401` code.

##

- [x] 5. Your application must have the POST endpoint `/categories`

- This endpoint must receive a _Category_ in the body of the request and create it in the database. The request body must have the following structure:

 ```json
  {
    "name": "Innovation"
  }
  ```

- If the Category does not contain the `name` the API should return a `status 400` error.

- The request must have the authentication token in the headers and otherwise return a `status 401` code.

##

- [x] 6. Your application must have the GET `/categories` endpoint

- This endpoint should list all Categories and return them in the following structure:

```json
[
  {
    "id": 1,
    "name": "School"
  },
  {
    "id": 2,
    "name": "Innovation"
  }
]
```

##

- [x] 7. Your application must have the POST endpoint `/post`

- This endpoint must receive a _BlogPost_ in the body of the request and create it in the database. The request body must have the following structure:

  ```json
  {
    "title": "Latest updates, August 1st",
    "content": "The whole text for the blog post goes here in this key",
    "categoryIds": [1, 2]
  }
  ```

- If the post does not contain `title`, `content` or `categoryIds` the API should return a `status 400` error.

- The request must have the authentication token in the headers and otherwise return a `status 401` code.

##

- [x] 8. Your application must have the GET `/post` endpoint

- This endpoint should list all _BlogPosts_ and return them in the following structure:

```json
[
  {
    "id": 1,
    "title": "Post of the Year",
    "content": "Best post of the year",
    "userId": 1,
    "published": "2011-08-01T19:58:00.000Z",
    "updated": "2011-08-01T19:58:51.000Z",
    "user": {
      "id": 1,
      "displayName": "Lewis Hamilton",
      "email": "lewishamilton@gmail.com",
      "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2017_Malaysia.jpg"
    },
    "categories": [
      {
        "id": 1,
        "name": "Innovation"
      }
    ]
  }
]
```

##

- [x] 9. Your application must have the GET `post/:id` endpoint

- Returns a **BlogPost** with the specified `id`. The return must have the following format:

```json
{
  "id": 1,  
  "title": "Post of the Year",
  "content": "Best post of the year",
  "userId": 1,
  "published": "2011-08-01T19:58:00.000Z",
  "updated": "2011-08-01T19:58:51.000Z",
  "user": {
    "id": 1,
    "displayName": "Lewis Hamilton",
    "email": "lewishamilton@gmail.com",
    "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
  },
  "categories": [
    {
      "id": 1,
      "name": "Innovation"
    }
  ]
}
```

##

- [x] 10. Your application must have the PUT endpoint `/post/:id`

- The endpoint must receive a **BlogPost** that will overwrite the original with the `id` specified in the URL. Should only be allowed to the user who created the **BlogPost**.

- The post category(ies) **cannot** be edited, only the `title` and `content`.

- The request body must have the following structure:

  ```json
  {
    "title": "Latest updates, August 1st",
    "content": "The whole text for the blog post goes here in this key"
  }
  ```

- If a person other than the one who created it makes the request, it must return a code `status 401`.

- If a request without a token is received, it must return a code of `status 401`.

- If the post does not contain the `title` and/or the `content` the API should return a `status 400` error.

##

- [x] 11. Your application must have the DELETE `post/:id` endpoint

- Deletes the post with the specified `id`. Should only be allowed to the user who created the **BlogPost**.

- If a person other than the one who created it makes the request, it must return a code `status 401`.

- If a request without a token is received, it must return a code of `status 401`.

- If the referred post does not exist, a code of `status 404` must be returned.

##

- [x] 12. Your application must have the DELETE endpoint `/user/me`

- Using the authentication token in the headers, the corresponding user must be deleted.

##

- [x] 13. Your application must have the GET `post/search?q=:searchTerm` endpoint

- Returns an array of **BlogPosts** that contain in their title, or content, the term searched in the `queryParam` of the URL. The return must have the following format:

```json
[
  {
    "id": 2,
    "title": "Let's Go",
    "content": "Rocket has no reverse",
    "userId": 1,
    "published": "2011-08-01T19:58:00.000Z",
    "updated": "2011-08-01T19:58:51.000Z",
    "user": {
      "id": 1,
      "displayName": "Lewis Hamilton",
      "email": "lewishamilton@gmail.com",
      "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
    },
    "categories": [
      {
        "id": 2,
        "name": "School"
      }
    ]
  }
]
```

- If no **BlogPost** satisfies the search, return an empty array.

##

Original README owner: Trybe
Translated from portuguese using Google translator

