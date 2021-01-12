# Operand - Teste Backend | CEP API

## 📋 Instruções
É necessário ter o Docker instalado - para o MySql.

```
# iniciar o Docker
docker-compose up -d

# instalar as dependências
yarn

# migrations e seeds do bancoa de dados
yarn database

# iniciar o projeto
yarn dev
```
Se tudo correu certo a aplicação estará rodando na porta ``3000`` da sua rede.

## 🧙 Endpoints
#### GET: /cep/:cep
`` /cep/12345678 ``
`` /cep/12345-678 ``

A resposta é resposta um único Objeto se encontrar o CEP.

#### GET: /rua/:rua
`` /rua/Rua Rachid Kassouf ``

A resposta é uma lista de Objeto.


## :cherries: Informações
Utilizei essa (http://cep.la/baixar) base de dados para o projeto - está somente 1/5 total do arquivo original, para a introdução de dados no banco ser mais rápido.