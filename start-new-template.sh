#!/bin/bash

# Cores do output do terminal
textColorBlack=$(tput setaf 0)
textColorRed=$(tput setaf 1)
textColorGreen=$(tput setaf 2)
textColorYellow=$(tput setaf 3)
textColorBlue=$(tput setaf 4)
textColorMagenta=$(tput setaf 5)
textColorCyan=$(tput setaf 6)
endOfText=$(tput sgr 0)

# PERGUNTA SOBRE O TEMPLATE
printf $textColorCyan"Nome do template: "$endOfText
  read varTitle
printf $textColorCyan"Resumo: "$endOfText
  read varResume

varLink="${varTitle// /-}"
varLink=${varLink,,}

#INSERE AS INFORMAÇÕES DO TEMPLATE NO JSON
{
ed -s template-list.json <<EOF
/\"templates\": \[
a
{
  "title": "$varTitle",
  "resume": "$varResume",
  "link": "$varLink"
},
.
wq
EOF
} &> /dev/null

echo -ne '##################                                          (33%)\r'
sleep 1

#CRIA O DIRETÓRIO

currentPath=$PWD

cd $currentPath/templates

mkdir $varLink
echo -ne '####################################                        (66%)\r'
sleep 1

cd $currentPath/templates/$varLink

mkdir images
touch index.html

echo -ne '############################################################(100%)\r'
echo -ne '\n'

#INICIA A APLICAÇÃO
printf $textColorGreen"Iniciando a aplicação: "$endOfText
npm run dev

exit 0