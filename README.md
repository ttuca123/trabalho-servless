Trabalho FrontEnd - Para disciplina de Servless 

#[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


:star: :star: :star: Sistema que lista filmes :star: :star: :star:


## 🔧 Requisitos

Antes de começar, você precisa ter os seguintes softwares instalados na sua máquina:

- **Node 18.19.1 ou superior.
- ** Angular-cli 19 ou superior**.
- **Npm** (para build do projeto).

## Como rodar localmente

1. Clone from Github

```
git clone https://github.com/ttuca123/trabalho-servless.git
cd trabalho-servless 
```

2. Instalar os pacotes

```
npm install
```

3. Run project

```
npm run start
```
## Como rodar com docker
1. Clone from Github

```
git clone https://github.com/ttuca123/trabalho-servless.git
cd trabalho-servless 
```
2. Construir a imagem docker
```
docker build -t uniforfront:v1.0.0 .
```
3. Rodar a imagem docker
```
 docker run -p 80:80 uniforfront:v1.0.0
```

📦 Estrutura do Projeto:
- src/app/config/: Contém o código fonte de configuração e outros recursos.
- src/demo/pages: Contém arquivos relacionados ás páginas do sistema.
- src/demo/service: Contém arquivos relacionados ás chamadas de serviço do sistema.
- src/demo/vo: Contém arquivos de VO (Value Object) para mapear os objetos JSON.
- src/package.json: Arquivo responsável por organizar as dependências do projeto, versionamento e scripts de build.

🧑‍💻 Desenvolvimento
Caso deseje contribuir ou realizar modificações no projeto, basta clonar o repositório e seguir os passos descritos acima para rodar a aplicação localmente. Para criar uma nova feature ou corrigir algum bug, basta submeter um pull request.

📄 Licença
Este projeto está licenciado sob a Licença MIT - consulte o arquivo LICENSE para mais detalhes.

Se você tiver alguma dúvida, sinta-se à vontade para abrir uma issue ou enviar um pull request! 😊
