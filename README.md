# CRUD de Gerenciamento de Usuários

## Descrição do Projeto
Este projeto é um sistema de gerenciamento de usuários, desenvolvido com foco em boas práticas de programação e experiência do usuário. Ele permite realizar as principais operações CRUD (Create, Read, Update, Delete) em um banco de dados relacional, com uma interface web moderna e responsiva.

Ideal para aplicações que exigem gestão de informações de usuários, como sistemas internos de empresas, CRMs ou projetos acadêmicos.

---

## Funcionalidades
- **Cadastro de Usuários**: Formulário com validações para os campos de nome, email, telefone e profissão.
- **Listagem de Usuários**: Exibição dinâmica de dados em uma tabela interativa.
- **Exclusão Segura**: Confirmação antes de excluir registros.
- **Redirecionamento Automático**: Navegação eficiente entre as páginas de cadastro e listagem.
- **Banco de Dados Persistente**: Integração com MySQL para armazenamento seguro dos dados.

---

## Tecnologias Utilizadas
### **Back-end**
- Node.js
- Express.js
- MySQL

### **Front-end**
- Next.js
- Tailwind CSS

### **Outras Ferramentas**
- ESLint: Garantia de padronização e qualidade do código.
- Fetch API: Consumo de dados do back-end.

---

## Como Executar o Projeto
Siga estas etapas para configurar e executar o projeto localmente:

### **1. Clone o Repositório**
```bash
git clone <URL_DO_REPOSITORIO>
cd <NOME_DA_PASTA>
```

### **2. Instale as Dependências**
No diretório do projeto, execute:
```bash
npm install
```

### **3. Configure o Banco de Dados**
1. Certifique-se de ter o MySQL instalado e configurado.
2. Crie um banco de dados chamado `users_db`:
```sql
CREATE DATABASE users_db;
```
3. Execute o script SQL fornecido no arquivo `db/schema.sql` para criar a tabela `users`.

### **4. Inicie o Servidor**
Execute o comando:
```bash
npm start
```
O servidor será iniciado na porta 3000.

### **5. Inicie o Front-end**
Abra o arquivo `index.html` no navegador (porta 5500).

### **6. Teste a API**
Use ferramentas como Insomnia ou Postman para testar as rotas da API:
- **GET**: `http://localhost:3000/users`
- **POST**: `http://localhost:3000/users`
- **DELETE**: `http://localhost:3000/users/:id`

---

## Estrutura do Projeto
```
├── db
│   └── schema.sql  # Script para criação do banco de dados
├── public
│   ├── index.html  # Interface inicial
│   ├── users.html  # Listagem de usuários
│   └── style.css   # Estilização do projeto
├── src
│   └── script.js   # Lógica do front-end
├── .gitignore          # Arquivos e pastas ignorados no Git
├── package.json        # Configurações do projeto Node.js
└── server.js          # Configuração do servidor
```

---

## Possíveis Melhorias Futuras
- **Autenticação**: Adicionar login e controle de acesso.
- **Pagamento**: Integração com APIs de pagamento para sistemas mais complexos.
- **Filtros e Busca**: Implementar pesquisa por nome ou profissão.
- **Upload de Arquivos**: Permitir o upload de fotos ou documentos de usuários.

---

## Contato
Para dúvidas ou sugestões, entre em contato:
- **Email**: [edsb1981@gmail.com](edsb1981@gmail.com)
- **LinkedIn**: [https://www.linkedin.com/in/edmilson-barreto-012609215/](https://www.linkedin.com/in/edmilson-barreto-012609215/)
