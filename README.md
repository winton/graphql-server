# graphql-server

Apollo + Nexus GraphQL server 🕸

## Requirements

For authentication, you'll need to first deploy a [JWT Authorizer](https://github.com/winton/jwt-authorizer) that you reference in the [serverless yaml](serverless.yml).

## Deploy

Deploy to the `dev` stage:

```bash
npm run deploy
```

Deploy to the `prod` stage:

```bash
npm run deploy -- --stage=prod
```

## Build your own project

Generate this project with your own naming by running [boiler](https://github.com/winton/boiler):

```bash
npm i -g @fn2/boiler
mkdir my-project; cd my-project
boiler
```

Then select "GraphQL server" under "New project".
