# Tutorial FullStack

Tutorial para criar aplicações Web do zero.

Abaixo estarão as abordagens/referências utilizadas na videoaula.

Cada uma delas (que utilizam Node/Javascript) também possui templates para [**TypeScript**](https://www.typescriptlang.org/). Vale ressaltar que eu recomendo o uso de TypeScript, também por ser um trabalho em grupo e, apesar de deixar o código mais verboso, auxilia na documentação do projeto.

As versões das ferramentas utilizadas neste projeto não precisam ser as que vocês irão usar, é só uma atenção para não ter problemas ao rodar este tutorial.

# Back-end

## Python Flask

### Dependências

Utilizadas neste projeto:

- Python v3.11.0
- pip v23.0.1

Docs:

- [Python](https://www.python.org/downloads/)
- [pip](https://pip.pypa.io/en/stable/installing/)
- Venv
  - [Docs](https://docs.python.org/3/library/venv.html)
  - [Resume](https://packaging.python.org/en/latest/tutorials/installing-packages/#creating-and-using-virtual-environments)
  - [pyenv](https://github.com/pyenv/pyenv#readme)
- [Flask](https://flask.palletsprojects.com/en/2.2.x/installation/#install-flask)

O resto pode ser visto no arquivo `backend-flask/requirements.txt`

### Rodando localmente

Há duas abordagens,são elas:

- Com 1 direto comando no terminal
  ```sh
  cd backend-flask/
  flask --app app --debug run
  ```
- Setando variável de ambiente
  ```sh
  cd backend-flask/
  export FLASK_APP=app # Use 'set' ao invés de 'export' se você estiver usando Windows
  export FLASK_ENV=development
  flask run
  ```
  - Nota, você pode setar diretamente em um arquivo `.env` as variáveis `FLASK_APP` e `FLASK_ENV`

## Javascript Node

### Dependências

Utilizadas neste projeto:

- Node v16.19.1
- npm v9.6.0

Docs:

- [NodeJS](https://nodejs.org/en/download/)

O resto pode ser visto no arquivo `backend-node/package.json`

### Rodando localmente

```sh
cd backend-node/
node server.js
```

# Front-end

## React

### Dependências

Utilizadas neste projeto:

- Node v16.19.1
- npm v9.6.0

Docs:

- [NodeJS](https://nodejs.org/en/download/)

O resto pode ser visto no arquivo `frontend/package.json`

### Criar a aplicação

- [npx, npm ou yarn](https://create-react-app.dev/docs/getting-started)
  - Se quiser criar com [redux](https://react-redux.js.org/introduction/getting-started#using-create-react-app)
- [vite](https://vitejs.dev/guide/#trying-vite-online)
  - Configuração da aplicação é mais complicada, porém é uma ferramenta mais poderosa.

### Rodando localmente

A depender de como foi criada a aplicação, no caso deste repositório:

```sh
cd frontend/
npm start
```

### Bibliotecas

Vou deixar as listas abaixo na ordem que eu prefiro.

- UI

  - Com componentes prontos:

    1. [Material UI](https://mui.com/material-ui/getting-started/installation/)
    2. [Bootstrap](https://react-bootstrap.github.io/getting-started/introduction)
    3. [Chakra UI](https://chakra-ui.com/docs/getting-started)
    4. [Ant Design](https://ant.design/docs/react/introduce)

  - Para utilizar como Framework CSS:

    1. [Styled Components](https://styled-components.com/)
    2. [Tailwind](https://tailwindcss.com/docs/installation)

- HttpRequests

  1. [Axios](https://www.npmjs.com/package/axios#installing)
  2. Você também pode utilizar diretamente o método [Fetch](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch), porém é mais verboso e mais complicado.

- Redux
  - [Redux](https://redux.js.org/introduction/getting-started)
  - [Redux Saga](https://redux-saga.js.org/docs/introduction/GettingStarted)
  - [Redux Toolkit](https://redux-toolkit.js.org/introduction/getting-started)
  - [Redux Sauce/Ducks](https://github.com/jkeam/reduxsauce#readme)
  1. [Immutable](https://immutable-js.com/#getting-started)
  2. [Seamless-immutable](https://github.com/rtfeldman/seamless-immutable#readme)

## Projetos base

Vale ressaltar que a escolha e o uso das ferramentas são **livres**, o único requisito é se atentar ao conceito de [**SaaS**](https://pt.wikipedia.org/wiki/Software_como_servi%C3%A7o) e aplicá-lo ao projeto. A escolha das ferramentas deste tutorial são baseadas apenas nas minhas preferências, levando em conta também facilidade de uso.

Atentem-se também ao arquivo `.gitignore`, para não realizarem commits de arquivos indesejados ou desnecessários.

Se você quiser se basear em um projeto anterior da disciplina, aqui vai dois exemplos:

- [Delivery App](https://github.com/Enriqson/ess-delivery-app)
- [foMiau](https://github.com/pedrojlsilva/ess-delivery-app)
  - Obs: Esse foi feito com [Angular](https://angular.io/docs) no Front-end!
