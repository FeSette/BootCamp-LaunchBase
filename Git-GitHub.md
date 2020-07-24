# **Git e GitHub**

##### Donwload e Instalação:
<br>
* Primeiro, temos que fazer o download do Git e sua instação

<span class="highlight" style="background-color:inherit"><span class="colour" style="color:var(--vscode-markdown-wysList)">Link: [[https://git-scm.com/downloads](https://git-scm.com/downloads)]</span></span>

* Depois criar um conta no GitHub

Link: [https://github.com/]
<br>
# Salvando o projeto para o GitHub

1. Primeiramente, temos que abrir o terminal para podermos utilizar os comandos do git, para isso utilizamos o comando "CTRL+J" no Visual Studio Code.
2. Com o terminal aberto, podemos dar nosso primeiro comando para iniciarmos o Git em nosso repositório local:

> `git init`

3. Após iniciar o Git, podemos adicionar um arquivo em nosso repositório local, utilizando o seguinte comando:

> `git add nome_arquivo.js`

ou então digite, para adicionar todos os arquivos e alterações

> `git add .`

4\. Após adicionar o arquivo\, temos que commitar para salvar as alterações ou adições feitas no repositório local\, tendo que descrever a ação:

> `git commit -m "Alteração no readme"`

<br>
***Obs: As operações anteriores serão salvas em um diretório local, ou seja, no seu próprio computador, e mesmo após enviar os arquivos ao repositório do GitHub, devemos continuar com as ações: git add, git commit e git push, para salvar e enviar cada alteração.***

\- Após realizar os passos anteriores\, podemos agora enviar no projeto ao repositório Web do GitHub\.

# Enviando o projeto para o GitHub

1. Temos que criar um novo repositório no GitHub, para fazermos esse procedimento, devemos ir em "Repositórios" e depois clicar em "New"

Preencha as informações como o nome do repositório, a descrição, se é público ou privado...

***OBS.:** Para ser redirecionado automaticamente a tela dos códigos de criação do repositório, **não habilite a opção 'Inicialize repositório com um README'.***

2. Adicione apenas as duas primeiras linhas do segundo bloco de códigos no terminal do Visual Studio.

> `git remote add origin [https://github.com/](https://github.com/).......`
> `git push -u origin master`

3. A cada alteração no seu projeto no Visual Studio, execute no terminal os códigos:

> `git add nome_arquivo.jr`
> `git commit -m "Defina a alteração feita com um titulo"`
> `git push`

4\. Para vermos os arquivos que tiveram alteração\, que foram salvos\, ou que foram adicionados\, devemos usar o seguinte comando:

> `git status`

## Principais comandos do Git
<br>\> git init \|\| Inicia a linha do tempo do Git
<br>> `git add` \|\| adiciona ou atualiza mudanças
> `git commit` \|\| salva as alterações e adições
> `git log` \|\| visualiza os commits realizados
> `git status` \|\| informa o estado das alterações do nosso projeto
> `git show `\|\| apresenta determinado commit
> `git branch` \|\| gerência novas linhas do tempo
> `git checkout` \|\| manipula as linhas do tempo
> `git merge `\|\| uni as linhas do tempo
> `git clone` \|\| clonar um projeto / repositório
> `git pull `\|\| puxa do repositório remoto
> `git add .` \|\| Adiciona e salva qualquer alteração\, mas depois de um comit
> `git push` \|\| Envia os arquivos para a nuvem GITHUB