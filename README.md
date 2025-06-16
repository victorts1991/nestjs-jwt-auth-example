# nestjs-jwt-auth-example

---

This repository contains the complete source code for a RESTful API built with **NestJS**, demonstrating a robust implementation of **JWT (JSON Web Token) authentication**. It is the companion project to the article "JWT Authentication in NestJS for Secure and Scalable APIs" published on Medium.

The goal is to provide a practical and working example of how to configure and use JWT to secure endpoints, including user login and access to protected resources.

## 📄 Article on Medium

For an in-depth explanation of each part of the code and the concepts involved, check out:

```bash
https://medium.com/@victorts1991/autentica%C3%A7%C3%A3o-jwt-no-nestjs-para-apis-seguras-e-escal%C3%A1veis-6b0093a29a84
```

---

## 🚀 Features

* **User Authentication:** Login endpoint to generate JWTs.
* **Credential Validation:** Integration with `bcrypt` for secure password comparison.
* **JWT Generation and Signing:** Uses `@nestjs/jwt` to create tokens.
* **JWT Authentication Strategy:** Implementation of `PassportStrategy` to validate tokens in requests.
* **Route Protection:** Uses `AuthGuard` to restrict access to specific endpoints.
* **Environment Variable Management:** Secure configuration of secrets with `@nestjs/config` and `.env` files.

---

## 🛠️ Technologies Used

* [**Node.js**](https://nodejs.org/)
* [**NestJS**](https://nestjs.com/) (Framework for building efficient and scalable Node.js applications)
* [**JWT (JSON Web Tokens)**](https://jwt.io/) (For stateless authentication)
* [**Passport.js**](http://www.passportjs.org/) (Authentication middleware)
* [**Bcrypt**](https://www.npmjs.com/package/bcrypt) (For hashing passwords)
* [**Dotenv**](https://www.npmjs.com/package/dotenv) (For loading environment variables)

---

## ⚙️ Prerequisites

Before cloning this repository, make sure you have the following tools installed on your machine:

* **Node.js** (version 18.x or higher)
* **npm** (Node Package Manager) or **Yarn**
* **NestJS CLI:**
```bash
npm install -g @nestjs/cli
# ou
yarn global add @nestjs/cli
```

---

## 🚀 How to Run the Project

Follow the steps below to set up and run the API in your local environment.

### 1. Clone the Repository

### 2. Install Dependencies

```bash
npm install
# ou
yarn install
```

### 3. Configure Environment Variables

Create a file named `.env` in the project root (`nestjs-jwt-auth-example/.env`) and add the following variable:

```bash
JWT_SECRET=yourSuperStrongAndUniqueSecretKeyHereToSignTokens
```

**Attention:** In a production environment, this key should be a very long and complex random string, and managed by a secrets service (such as Azure Key Vault, AWS Secrets Manager, HashiCorp Vault, etc.).

### 4. Start the Application

```bash
npm run start:dev
# ou
yarn start:dev
```

The API will be running on `http://localhost:3000`.

-----

## 🧪 How to Test the API

You can use tools like [Postman](https://www.postman.com/downloads/), [Insomnia](https://insomnia.rest/download), or even `curl` to test the endpoints.

### 1. Authenticate (Get JWT Token)

Send a `POST` request to the login endpoint:

  * **URL:** `http://localhost:3000/auth/login`
  * **Method:** `POST`
  * **Headers:**
      * `Content-Type: application/json`
  * **Body (JSON):**
```bash
{
    "username": "john.doe",
    "password": "123password"
}
```

**Expected Response:**

```bash
{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI..."
}
```

*Save this `access_token` for the next step.*

### 2. Access Protected Route

Send a `GET` request to the profile route, including the JWT token in the `Authorization` header:

  * **URL:** `http://localhost:3000/auth/profile`
  * **Method:** `GET`
  * **Headers:**
      * `Authorization`: `Bearer YOUR_ACCESS_TOKEN_HERE` (Replace with the token obtained in the previous step)

**Expected Response (with valid token):**

```bash
{
    "userId": 1,
    "username": "john.doe"
}
```

**Test without Token or with Invalid Token:**

You should receive a `401 Unauthorized` or `403 Forbidden` status response, indicating that access was denied.
