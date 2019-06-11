# virtual-cashier

## Documentação de como “rodar” o projeto

### 1) Clone o projeto virtual-cashier

> Execute o comando  para baixar as dependencias do projeto.
```bash
$ npm i
```

### 2) Renomeie o arquivo .env_rename para .env
> *(obs: por praticidade deixei uma key no arquivo .env_rename, 
> mas na versão desta API no heroku a key não é visível).*

### 3) Execute o serviço do MongoDB Server


> **IMPORTANTE**
>
> No Postman publiquei algumas Collections para facilitar o teste (links abaixo).

### 4) Registre-se (signup) para gerar o token

*Autenticação com token **jwt***

> **NOTA**
> 
> utilize o token no Postman, Acesse as rotas **OpenApi** **"/oapi"**, são rotas abertas para acessar sem autenticação.
>
> Auth/User / (Signup, Login, ValidateToken)
>
> https://documenter.getpostman.com/view/7752825/S1TbRZvJ

### 5) Node.js REST / (get, post, put, delete)

> https://documenter.getpostman.com/view/7752825/S1TbRZvF?version=latest
>
> 5.1) Request via POST - Modelo x-www-form-urlencoded

* Key-Value-Edit
```bash
entradas[0][value]:<entrada 1>
entradas[1][value]:<entrada 2>
entradas[2][value]:<entrada 3 ex...>
saidas[0][value]:<saida 1>
saidas[1][value]:<saida 2 ex...>
categoria:<PAGO/PENDENTE/AGENDADO> (enum)
tipo:<tipo>
descricao:<descricao>
```
>
### 6) Features: Objeto de resumo do caixa: (virtualCashiers/resumo)

> https://documenter.getpostman.com/view/7752825/S1TbRZvH?version=latest
