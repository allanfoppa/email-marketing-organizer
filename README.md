<h1 align="center">
    Organizador de E-mail Marketing
</h1>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-configuracao">Configuração</a>
</p>

<br>

## Tecnologias

<br>

Esse projeto foi desenvolvido com as seguintes tecnologias:

- Python
- Shell
- Javascript
- CSS
- HTML

<br>

## Projeto

<br>

Uma estrutura simples para organizar os templates de e-mail marketing

<br>

## Configuração

<br>

#### O TERMINAL DEVE ESTAR ATRELADO A PASTA ROOT DO PROJETO

- INSTALAR AS DEPENDENCIAS

``` bash
npm install
```

<br>
<hr>

### COM SCRIPT

- HABILITAR A EXECUÇÃO DO SCRIPT

``` bash
chmod +x start-new-template.sh

ou

chmod +x start-new-template.py
```

- EXECUTA O SCRIPT

``` bash
./start-new-template.sh
```
ou

``` python
python3 start-new-template.py
```

## Duas opções serão mostradas

<p>Nome do template</p>
<p>Resumo desse template</p>

<br>

<p>Ao inserir essas informações o seguinte ocorrerá:</p>

1. O link do template será criado a partir do nome
2. Será criado um diretório dentro de templates com o Nome do template
3. Após um diretório chamado imagens, assim como um arquivo index.html (Nessa versão ainda sem conteúdo)
4. E por último, será executado o comando "npm run dev" que aponta para o package.json em "scripts"

<br>
<hr>

### SEM SCRIPT

<p>Caso não deseje rodar via script, deverá ser seguido os seguintes passos:</p>

1. Rodar o comando

``` bash
npm run dev
```

2. Inserir manualmente um template

``` json
{
  "templates": [
    {
      "title": "Nome do template 2",
      "resume": "Campanha de Páscoa",
      "link": "nome-do-template-2"
    },
    {
      "title": "Nome do template",
      "resume": "Campanha de Natal",
      "link": "nome-do-template"
    }
  ]
}
```
### COMO RODAR SHELL NO WINDOWS

<br>

[Passo a Passo na The WindowsClub](https://www.thewindowsclub.com/how-to-run-sh-or-shell-script-file-in-windows-10)

---
