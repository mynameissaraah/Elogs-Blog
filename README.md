<a name="readme-top"></a>

<!-- Project Shields -->

<!-- About the API -->

## Elogsblog

 Blogging API assignment for ALTSCHOOL backend engineering nodejs track.

<p align="right"><a href="#readme-top">back to top</a></p>

### Built With:

<div align="center">

![Javascript][javascript]
![Node.js][node]
![Express.js][express]
![MongoDB][mongodb]

</div>

<p align="right"><a href="#readme-top">back to top</a></p>

---

<!-- AltSchool Requirements -->

## Requirements

<details>


<p align="right"><a href="#readme-top">back to top</a></p>

---

</details>

<br>

## Development

### Prerequisites

- [Node.js](https://nodejs.org/en/download/)
- [MongoDB](https://www.mongodb.com/docs/manual/installation/)

#### Clone this repo

```sh
git clone https://github.com/mynameissaraah/Elogs-Blog.git
```

#### Install project dependencies

```sh
npm install
```


#### Run a development server

```sh
npm run dev
```

#### For testing, run

```sh
npm run test
```

### Models

#### User

| field     | data_type     | constraints      |
| --------- | ------------- | ---------------- |
| username  | string        | required, unique |
| firstName | string        | required         |
| lastName  | string        | required         |
| email     | string        | required, unique |
| password  | string        | required         |
| articles  | ref - Article |                  |

#### Article

| field        | data_type  | constraints                                              |
| ------------ | ---------- | -------------------------------------------------------- |
| title        | string     | required, unique                                         |
| description  | string     | optional                                                 |
| author       | ref - User |                                                          |
| owner        | string     |                                                          |
| state        | string     | required, default: 'draft', enum: ['draft', 'published'] |
| read_count   | Number     | default: 0                                               |
| reading_time | Number     |                                                          |
| tags         | array      | optional                                                 |
| body         | string     | required                                                 |

<p align="right"><a href="#readme-top">back to top</a></p>

---

## Usage

### Base URL

- https://plum-witty-buffalo.cyclic.app/

### Creating a user

- Route: /api/signup
- Method: POST

:point_down: Body

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "username": "mightyjoe",
  "email": "joe@mail.com",
  "password": "Password0!"
}
```

:point_down: Response

```json
{
  "status": "success",
  "data": {
    "firstName": "John",
    "lastName": "Doe",
    "username": "mightyjoe",
    "email": "joe@mail.com",
    "articles": [],
    "_id": "6367c296ba7522bd8561e4f6"
  }
}
```

<p align="right"><a href="#readme-top">back to top</a></p>

---

### Logging in

- Route: /api/login
- Method: POST

:point_down: Body

```json
{
  "username": "mightyjoe",
  "password": "Password0!"
}
```

:point_down: Response

```json
{
  "token": {token},
  "username": "mightyjoe",
  "name": "John"
}
```

<p align="right"><a href="#readme-top">back to top</a></p>

---

### Create a Blog

- Route: /api/blog
- Method: POST
- Header
  - Authorization: Bearer {token}

:point_down: Body

```json
{
  "title": "The Adventures of John",
  "tags": ["memoirs", "expose", "fun"],
  "description": "Fun times as Johnny",
  "body": "A very fun article that is long enough to be fun, and short enough to be ..fun!"
}
```

:point_down: Response

```json
{
  "status": "success",
  "data": {
    "title": "The Adventures of John",
    "description": "Fun times as Johnny",
    "author": "6367c296ba7522bd8561e4f6",
    "state": "draft",
    "read_count": 0,
    "tags": ["memoirs", "expose", "fun"],
    "body": "A very fun article that is long enough to be fun, and short enough to be ..fun!",
    "_id": "6367cc2271c384885108032f",
    "createdAt": "2022-11-06T15:00:50.202Z",
    "updatedAt": "2022-11-06T15:00:50.202Z",
    "reading_time": 1
  }
}
```

<p align="right"><a href="#readme-top">back to top</a></p>

---

### Get all published blogs

- Route: /api/blog
- Method: GET
- Header
  - Authorization: Bearer {token}
  - None (Accessible to unauthenticated users)
- Query params:

  - page (default: 1)
  - size (default: 20)

  - Filters: Limit returned response by passing values to any of the following parameters:

    - author
    ```text
    /api/blog?author=Author
    ```
    - title
    ```text
    /api/blog?title=Title
    ```
    - tags: Separate multiple values with a comma 
    ```text
    /api/blog?tags=sql,database
    ```

  - Sort: Sort returned response by passing values matching the fields in the blog to the `orderby` parameter. To sort in descending order, add a `-` prefix. Separate multiple values with a comma
  
    Acceptable values include:
    - author
    - title
    - read_count
    - reading_time
    ```text
      /api/blog?orderby=title,-read_count
      ```

  - Fields: Set the fields to display in the returned response by passing values matching the fields in the blog to the `fields` parameter. To omit any fields, add a `-` prefix. Separate multiple values with a comma
  
    Default fields are `title` and `tags`. Acceptable values include:
    - author
    - title
    - body
    - read_count
    - reading_time
    ```text
      /api/blog?fields=body,-tags,reading_time
      ```

<p align="right"><a href="#readme-top">back to top</a></p>

---

### Get all created blogs by authenticated user

- Route: /api/blog/p
- Method: GET
- Header
  - Authorization: Bearer {token}
- Query params:

  - page (default: 1)
  - size (default: 20)

  - Filters: Limit returned response by passing values to any of the following parameters:

    - state
    ```text
    /api/blog?state=draft
    ```

    ```text
    /api/blog?state=published
    ```

    - title
    ```text
    /api/blog?title=Title
    ```
    - tags: Separate multiple values with a comma 
    ```text
    /api/blog?tags=sql,database
    ```

  - Sort: Sort returned response by passing values matching the fields in the blog to the `orderby` parameter. To sort in descending order, add a `-` prefix. Separate multiple values with a comma
  
    Acceptable values include:
    - title
    - read_count
    - reading_time
    ```text
      /api/blog?orderby=title,-read_count
      ```

  - Fields: Set the fields to display in the returned response by passing values matching the fields in the blog to the `fields` parameter. To omit any fields, add a `-` prefix. Separate multiple values with a comma
  
    Default fields are `title` and `tags`. Acceptable values include:
    - author
    - title
    - body
    - read_count
    - reading_time
    ```text
      /api/blog?fields=body,-tags,reading_time
      ```

<p align="right"><a href="#readme-top">back to top</a></p>

---

### Get specific blog

- Route: /api/blog/:articleId
- Method: GET
- Header
  - Authorization: Bearer {token}
  - None (Published blogs accessible to unauthenticated users)

:point_down: Response

```json
{
    "status": "success",
    "data": {
        "_id": "6367cc2271c384885108032f",
        "title": "The Adventures of John",
        "description": "Fun times as Johnny",
        "author": {
            "_id": "6367c296ba7522bd8561e4f6",
            "username": "mightyjoe"
        },
        "state": "published",
        "read_count": 1,
        "tags": [
            "memoirs",
            "expose"
        ],
        "body": "A very fun article that is long enough to be fun, and short enough to be ..fun! A sailor went to sea to see what he could see but all that he could see was the bottom of the deep blue sea.",
        "createdAt": "2022-11-06T15:00:50.202Z",
        "updatedAt": "2022-11-06T19:38:16.100Z",
        "reading_time": 1
    }
}
```

<p align="right"><a href="#readme-top">back to top</a></p>

---

### Update the state of a Blog

- Route: /api/blog/:articleId
- Method: PATCH
- Header
  - Authorization: Bearer {token}

:point_down: Body

```json
{
  "state": "published"
}
```

:point_down: Response

```json
{
  "status": "success",
  "data": {
    "_id": "6367cc2271c384885108032f",
    "title": "The Adventures of John",
    "description": "Fun times as Johnny",
    "author": "6367c296ba7522bd8561e4f6",
    "state": "published",
    "read_count": 0,
    "tags": ["memoirs", "expose", "fun"],
    "body": "A very fun article that is long enough to be fun, and short enough to be ..fun!",
    "createdAt": "2022-11-06T15:00:50.202Z",
    "updatedAt": "2022-11-06T16:17:45.137Z",
    "reading_time": 1
  }
}
```

<p align="right"><a href="#readme-top">back to top</a></p>

---

### Update the contents of a Blog

- Route: /api/blog/:articleId
- Method: PUT
- Header
  - Authorization: Bearer {token}

:point_down: Body

```json
{
  "tags": ["memoirs", "expose"],
  "body": "A very fun article that is long enough to be fun, and short enough to be ..fun! A sailor went to sea to see what he could see but all that he could see was the bottom of the deep blue sea."
}
```

:point_down: Response

```json
{
  "status": "success",
  "data": {
    "_id": "6367cc2271c384885108032f",
    "title": "The Adventures of John",
    "description": "Fun times as Johnny",
    "author": "6367c296ba7522bd8561e4f6",
    "state": "published",
    "read_count": 0,
    "tags": ["memoirs", "expose"],
    "body": "A very fun article that is long enough to be fun, and short enough to be ..fun! A sailor went to sea to see what he could see but all that he could see was the bottom of the deep blue sea.",
    "createdAt": "2022-11-06T15:00:50.202Z",
    "updatedAt": "2022-11-06T16:22:29.326Z",
    "reading_time": 1
  }
}
```

<p align="right"><a href="#readme-top">back to top</a></p>

---

### Delete a Blog

- Route: /api/blog/:articleId
- Method: DELETE
- Header
  - Authorization: Bearer {token}

<p align="right"><a href="#readme-top">back to top</a></p>

---

---

## Lessons Learned

While building this project, I learned about:

- Test Driven Development
- Testing the backend
- Database Modelling
- Database Management
- Debugging
- User Authentication
- User Authorization
- Documentation

<p align="right"><a href="#readme-top">back to top</a></p>

---



<!-- Contact -->

## Contact

- Twitter - [@call_me_siaa](https://twitter.com/call_me_siaa)
- email - eloghosawomen@gmail.com

Project Link: [Blogolicious](https://github.com/tobisupreme/blogolicious)

<p align="right"><a href="#readme-top">back to top</a></p>

---

<!-- Acknowledgements -->

## Acknowledgements

This project was made possible by:

- [AltSchool Africa School of Engineering](https://altschoolafrica.com/schools/engineering)
- [Full Stack open 2022](https://fullstackopen.com/en/)
- [daniel-alts README Template](https://github.com/daniel-alts/pizza_app)

<p align="right"><a href="#readme-top">back to top</a></p>
