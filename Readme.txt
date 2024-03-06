1- criando um projeto em REACT + VITE
    npm create vite@latest . 


logonrmlocal@PA506MICRO11 MINGW64 ~/Desktop/exemplo2
$ git init
Initialized empty Git repository in C:/Users/logonrmlocal/Desktop/exemplo2/.git/

logonrmlocal@PA506MICRO11 MINGW64 ~/Desktop/exemplo2 (master)
$ git config --global user.name
Valotto18

logonrmlocal@PA506MICRO11 MINGW64 ~/Desktop/exemplo2 (master)
$ git config --global user.name "Rayara"

logonrmlocal@PA506MICRO11 MINGW64 ~/Desktop/exemplo2 (master)
$ git config --global user.email "rayaraamaro@gmail.com"

logonrmlocal@PA506MICRO11 MINGW64 ~/Desktop/exemplo2 (master)
$ git config --global user.email
rayaraamaro@gmail.com

logonrmlocal@PA506MICRO11 MINGW64 ~/Desktop/exemplo2 (master)
$ git status
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        Readme.txt

nothing added to commit but untracked files present (use "git add" to track)

logonrmlocal@PA506MICRO11 MINGW64 ~/Desktop/exemplo2 (master)
$ git add Readme.txt

logonrmlocal@PA506MICRO11 MINGW64 ~/Desktop/exemplo2 (master)
$ git status
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   Readme.txt


logonrmlocal@PA506MICRO11 MINGW64 ~/Desktop/exemplo2 (master)
$ git commit -m "Criando o projeto e o arquivo readme"
[master (root-commit) ec80c79] Criando o projeto e o arquivo readme
 1 file changed, 21 insertions(+)
 create mode 100644 Readme.txt

logonrmlocal@PA506MICRO11 MINGW64 ~/Desktop/exemplo2 (master)
$ git log
commit ec80c792f0746803c02aa644ffdf317fbb9c72fd (HEAD -> master)
Author: Rayara <rayaraamaro@gmail.com>
Date:   Wed Mar 6 19:47:54 2024 -0300

    Criando o projeto e o arquivo readme

logonrmlocal@PA506MICRO11 MINGW64 ~/Desktop/exemplo2 (master)
$ git diff ec80c792f0746803c02aa644ffdf317fbb9c72fd

2 - ESCOLHA O FRAMEWORK REACT E DEPOIS JAVASCRIPT
