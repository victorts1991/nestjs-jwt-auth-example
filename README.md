# nestjs-jwt-auth-example

---

Este repositório contém o código-fonte completo de uma API RESTful desenvolvida com **NestJS**, demonstrando a implementação robusta de **Autenticação JWT (JSON Web Token)**. É o projeto complementar ao artigo "Autenticação JWT no NestJS para APIs Seguras e Escaláveis" publicado no Medium.

O objetivo é fornecer um exemplo prático e funcional de como configurar e utilizar JWT para proteger endpoints, incluindo login de usuário e acesso a recursos protegidos.

## 📄 Artigo no Medium

Para uma explicação aprofundada de cada parte do código e dos conceitos envolvidos, confira:

```bash
https://medium.com/@victorts1991/autentica%C3%A7%C3%A3o-jwt-no-nestjs-para-apis-seguras-e-escal%C3%A1veis-6b0093a29a84
```

---

## 🚀 Funcionalidades

* **Autenticação de Usuário:** Endpoint de login para gerar JWTs.
* **Validação de Credenciais:** Integração com `bcrypt` para comparação segura de senhas.
* **Geração e Assinatura de JWT:** Utiliza `@nestjs/jwt` para criar tokens.
* **Estratégia de Autenticação JWT:** Implementação de `PassportStrategy` para validar tokens em requisições.
* **Proteção de Rotas:** Uso de `AuthGuard` para restringir o acesso a endpoints específicos.
* **Gerenciamento de Variáveis de Ambiente:** Configuração segura de segredos com `@nestjs/config` e arquivos `.env`.

---

## 🛠️ Tecnologias Utilizadas

* [**Node.js**](https://nodejs.org/)
* [**NestJS**](https://nestjs.com/) (Framework para construir aplicações Node.js eficientes e escaláveis)
* [**JWT (JSON Web Tokens)**](https://jwt.io/) (Para autenticação stateless)
* [**Passport.js**](http://www.passportjs.org/) (Middleware de autenticação)
* [**Bcrypt**](https://www.npmjs.com/package/bcrypt) (Para hashear senhas)
* [**Dotenv**](https://www.npmjs.com/package/dotenv) (Para carregar variáveis de ambiente)

---

## ⚙️ Pré-requisitos

Antes de clonar este repositório, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

* **Node.js** (versão 18.x ou superior)
* **npm** (Node Package Manager) ou **Yarn**
* **NestJS CLI:**
```bash
npm install -g @nestjs/cli
# ou
yarn global add @nestjs/cli
```

---

## 🚀 Como Rodar o Projeto

Siga os passos abaixo para configurar e executar a API em seu ambiente local.

### 1. Clonar o Repositório e acessar a pasta

### 2. Instalar as Dependências

```bash
npm install
# ou
yarn install
```

### 3. Configurar as Variáveis de Ambiente

Crie um arquivo chamado `.env` na raiz do projeto (`nestjs-jwt-auth-example/.env`) e adicione a seguinte variável:

```bash
JWT_SECRET=suaChaveSecretaMuitoForteEUnicaAquiParaAssinarTokens
```

**Atenção:** Em um ambiente de produção, esta chave deve ser uma string aleatória muito longa e complexa, e gerenciada por um serviço de segredos (como Azure Key Vault, AWS Secrets Manager, HashiCorp Vault, etc.).

### 4. Iniciar a Aplicação

```bash
npm run start:dev
# ou
yarn start:dev
```

A API estará rodando em `http://localhost:3000`.

-----

## 🧪 Como Testar a API

Você pode usar ferramentas como [Postman](https://www.postman.com/downloads/), [Insomnia](https://insomnia.rest/download), ou até mesmo `curl` para testar os endpoints.

### 1. Autenticar (Obter Token JWT)

Envie uma requisição `POST` para o endpoint de login:

  * **URL:** `http://localhost:3000/auth/login`
  * **Método:** `POST`
  * **Headers:**
      * `Content-Type: application/json`
  * **Body (JSON):**
```bash
{
    "username": "john.doe",
    "password": "senha123"
}
```

**Resposta Esperada:**

```bash
{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI..."
}
```

*Guarde este `access_token` para a próxima etapa.*

### 2. Acessar Rota Protegida

Envie uma requisição `GET` para a rota de perfil, incluindo o token JWT no cabeçalho `Authorization`:

  * **URL:** `http://localhost:3000/auth/profile`
  * **Método:** `GET`
  * **Headers:**
      * `Authorization`: `Bearer SEU_ACCESS_TOKEN_AQUI` (Substitua pelo token obtido no passo anterior)

**Resposta Esperada (com token válido):**

```bash
{
    "userId": 1,
    "username": "john.doe"
}
```

**Teste sem Token ou com Token Inválido:**

Você deverá receber uma resposta com status `401 Unauthorized` ou `403 Forbidden`, indicando que o acesso foi negado.

