# ⚽ API com temática de Futebol (Desafio da DIO)

## 📖 Descrição

API de estudo desenvolvida com `TypeScript`, `Express` e `Node JS` na temática da champions league com CRUD completo.

Aprendi bastante sobre como trabalhar com Express utilizando TypeScript de forma organizada, pensando na arquitetura do projeto. Ele está organizado em camadas como model, service e repository, para manter o projeto manutenível e facilitar atualizações futuras.

## 📦 Instalação local

1. Clone este repositório:

```bash
git clone https://github.com/GracilianoOG/dio-champions-api.git
```

2. Abra o projeto em sua IDE preferida, exemplo no VSCode:

```bash
cd dio-champions-api/
```

3. Após navegar para dentro do diretório, inicie o VSCode:

```base
code .
```

4. Instale as dependências:

```
npm install
```

5. Rode o projeto com o script (requer o NodeJS v20+ e NPM instalados):

```
npm run start:watch
```

## 📜 Scripts disponíveis

| Script        | Comando                                   | Descrição                                                               |
| ------------- | ----------------------------------------- | ----------------------------------------------------------------------- |
| `dist`        | `tsup src`                                | Gera os arquivos compilados da aplicação a partir do diretório `src`.   |
| `start:dev`   | `tsx --env-file=.env src/server.ts`       | Inicia o servidor em modo de desenvolvimento com variáveis de ambiente. |
| `start:watch` | `tsx watch --env-file=.env src/server.ts` | Inicia o servidor em modo "watch" (reinicia ao salvar arquivos).        |
| `start:dist`  | `npm run dist && node dist/src/index.js`  | Compila o projeto e executa o build gerado na pasta `dist`.             |

## 📒 Documentação

### 🗂️ Estrutura do projeto

```
📁 src/
  📁 controllers/ -> contém a lógica de cada rota.
  📁 data/ -> armazena os dados localmente.
  📁 models/ -> guarda os modelos dos dados (ex: PlayerModel).
  📁 repositories/ -> encapsula a lógica para se comunicar com o banco.
  📁 routes/ -> define as rotas da API.
  📁 services/ -> engloba as regras de negócio.
  📁 utils/ -> inclui recursos utilitários para a aplicação.
  📄 app.ts -> inicializa a aplicação.
  📄 server.ts -> cria o servidor.
```

### 🔀 Rotas

#### 📍 Rotas dos jogadores

| Método | Endpoint                   | Descrição                             |
| ------ | -------------------------- | ------------------------------------- |
| GET    | `/api/players`             | Lista todos os players                |
| GET    | `/api/players/:id`         | Retorna player pelo ID                |
| GET    | `/api/players/clubs/:club` | Lista os players do club especificado |
| POST   | `/api/players`             | Cria um novo player                   |
| PATCH  | `/api/players/:id`         | Atualiza estatísticas de um player    |
| DELETE | `/api/players/:id`         | Remove um player pelo ID              |

#### 📍 Rotas dos clubes

| Método | Endpoint         | Descrição             |
| ------ | ---------------- | --------------------- |
| GET    | `/api/clubs`     | Lista todos os clubes |
| GET    | `/api/clubs/:id` | Retorna clube pelo ID |

## 🛠️ Ferramentas e tecnologias

[![Ferramentas](https://skillicons.dev/icons?i=ts,js,nodejs,express,npm,vscode,postman)](https://skillicons.dev)

- **Express** – Biblioteca para criar APIs de forma simples com Node.js.
- **CORS** – Libera o acesso à API a partir de outros domínios.
- **TypeScript** – Versão do JavaScript com tipos, que ajuda a evitar erros.
- **Tsup** – Gera a versão final do projeto para produção.
- **TSX** – Permite rodar código TypeScript direto.
- **@types/** – Ajuda o TypeScript a entender bibliotecas feitas em JavaScript.
- **Postman** – Testes e visualização de requisições da API.

## 🔗 Links

- [Digital Innovation One](https://www.dio.me/)

## 🧑🏻‍💻 Autor

- LinkedIn: [@gabrielgmbarros](https://www.linkedin.com/in/gabrielgmbarros)
- GitHub: [@GracilianoOG](https://github.com/GracilianoOG)

## 📝 Licença

O código fonte está sob a licença [MIT](./LICENSE).
