# MongoDB Commerce - Back-End Project
![MongoDB badge]({https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white})

32 queries para encontrar ou inserir informações no banco de dados NoSQL de um fast food. Foram utilizados operadores de filtro, de consulta, de arrays e operadores para update simples ou de arrays.

Projeto 27 da [Trybe](https://wwww.betrybe.com), módulo de Back-End.

![Os 32 requisistos do projeto foram realizados com sucesso](/results.png)

## Instalação 

#### 1- Clonar o repositório

```git clone git@github.com:sallybdiament/Project-27-MongoDB-Commerce.git```

#### 2 - Criar um `container` com um volume apontando para a pasta do projeto

 Na raiz do projeto: `docker run -d --name=nomeDoContainer -v "$PWD:/app" -p 27017:27017 mongo:5.0`

#### 3 - Com o container em execução, acessar o terminal do container

 `docker exec -it nomeDoContainer bash`

#### 4 - Restaurar o banco de dados

Na raiz do diretório do projeto, executar `DBNAME=commerce ./scripts/resetdb.sh assets/produtos`
A execução desse script criará um banco de dados chamado commerce e importará os dados para a coleção produtos.

#### \*É possível utilizar a extensão `MongoDB for VS Code` criando um arquivo `.mongoDB` para visualizar o resultado das queries.\*

## Tecnologias
 - MongDB
 - NoSQL
 - Docker CLI