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