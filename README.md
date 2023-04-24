# om30

## Fluxo de desenvolvimento

As mensagens de commit contam a história do desenvolvimento do projeto. Para facilitar a visualização não foram criadas ramificações. Entenda a branch `main` como uma branch de feature em um fluxo de trabalho normal.

## SETUP

Ambiente `node 18.16+`

- Crie o arquivo de `.env` na raiz do projeto com os valores apresentados no arquivo de exemplo `.env.example`.
- Instale as dependências `npm i`.
- Inicie o servidor local com o comando `npm run dev`.

## TESTES

```bash
npm test
```

## SISTEMA DE LOGIN (SIMULADO)

Antes de cada mudança na rota o roteador verifica a informação na store do usuário e aplica as regras definidas para as rotas protegidas.

As regras desse exemplo são:

- Se o usuário não estiver logado e tentar acessar uma página protegida é direcionado para o login.
- Se o usuário já está logado ele não deve acessar a página de login novamente, então é direcionado para uma rota padrão definida nas variáveis de ambiente.

A página de login simula o processo de autenticação gravando um usuário na store.

> PONTO DE ATENÇÃO: Como não há persistência no login ao acessar a página de login pela url a SPA é recarregada com os valores padrão (usuário vazio).

## HABILIDADES DEMONSTADAS

O objetivo deste projeto foi demonstrar algumas habilidades no menor tempo possível. Apesar de sair um pouco do proposto no enunciado acabei optando por não repetir implementações.

- Configuração e uso das ferramentas de build (Vite e dependências de desenvolvimento).
- Configuração e uso da ferramenta de teste (Vitest e teste das regras de roteamento).
- Configuração eslint para padronização do código fonte.
- Componentes em pastas individuais, preparados para receber os arquivos de teste, CSS in JS e outros arquivos que devem estar junto com o componente.
- Configuração de variáveis de ambiente para parâmetros que podem mudar em diferentes ambientes sem a necessidade de alteração nos arquivos.
- Slots nomeados.
- Composition API.
- CSS BEM.
- Tailwind CSS.
- Consumo de API REST (randomuser.me).
- Navigation Guards (vue-router).
- Gerenciamento de estado com Pinia.
- Arquivos estáticos na pasta `public`.
- Preprocessador SASS (SASS E SCSS).
- Deploy da aplicação.

## LINKS
