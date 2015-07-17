# Angularplate
An AngularJS template project/boilerplate implementing best practices and modern technologies.


## Prerequisites
Please ensure that you download all prerequisites listed herein.
    * Download & Install [Node.js](https://nodejs.org/download/)


## Setting Up Angularplate
There are a couple of different ways that you can download and set-up Angularplate:

### Cloning Our Repository
You can download and set-up the project directly using Git, an example process to download and set up is shown below:

1. Download and install Git [here](http://git-scm.com/download/)
    * *Optional*: Download and install a Git GUI client, such as Github for Windows/Mac, SourceTree, Tower, etc.  A nice list is available [here](http://git-scm.com/downloads/guis).

2. Open up your command line and run the following commands ($ should be omitted):

```bash
$ git clone https://github.com/Angularplate/angularplate.git angularplate
$ cd angularplate
$ npm install
$ bower install
```

#### What do these commands do?

```bash
$ git clone https://github.com/Angularplate/angularplate.git angularplate
```
This will 'clone' (create) a copy of the Angularplate repository and put it into the 'angularplate' directory.

```bash
$ cd angularplate
```
Changes (moves into) to the 'angularplate' directory.

```bash
$ npm install
```
Installs all NodeJS project dependencies using the Node Package Manager (npm).

```bash
$ bower install
```
Installs all bower project dependencies.


### Downloading The Repository Zip File
While this is the least recommended way, you can download a zip copy of the repository from the [master](https://github.com/Angularplate/angularplate/archive/master.zip) branch. 
Alternately you can do this in the command line as follows ($ show be omitted):

```bash
$ wget https://github.com/Angularplate/angularplate/archive/master.zip -O angularplate.zip
$ unzip angularplate.zip
$ rm angularplate.zip
```

#### What do these commands do?

```bash
$ wget https://github.com/Angularplate/angularplate/archive/master.zip -O angularplate.zip
```
Downloads from the repository and saves into a file named 'angularplate.zip'.

```bash
$ unzip angularplate.zip
```
Unzips (decompresses) the file into the full project.

```bash
$ rm angularplate.zip
```
Removes the 'angularplate.zip' file.


## Project Structure

The structure Angularplate is modelled off implementing best practices for AngularJS MVC directory structure. 
The project was influenced by numerous articles, documents and repositories. 

Resources:  
[ngbp Github repository](https://github.com/ngbp/ngbp/)  
[Google's Best Practice Recommendations for AngularJS App Structure](https://docs.google.com/document/d/1XXMvReO8-Awi1EZXAXS4PzDzdNvV6pGcuaF4Q9821Es/pub)  

A general overview of project structure follows:

```
angularplate/
  |- configs/
  |  |- <config files>
  |- dist/
  |  |- <distributed files>
  |- src/
  |  |- app/
  |  |  |- <app code>
  |  |- assets/
  |  |  |- <static files>
  |  |- common/
  |  |  |- <reusable code>
  |  |- index.html
  |- tasks/
  |  |- <build system tasks>
  |- .bowerrc
  |- .editorconfig
  |- .gitignore
  |- .jshintrc
  |- .travis.yml
  |- bower.json
  |- gulpfile.js
  |- LICENSE
  |- package.json
  |- README.md
```

## Project Technologies

Angularplate uses various modern web technologies, some of these include:

#### [NodeJS](https://nodejs.org)
NodeJS is used to handle parts of the build and development processes, in conjunction with GulpJS. For more information about NodeJS [click here](https://nodejs.org/documentation/)

#### [GulpJS](http://gulpjs.com/)
GulpJS is used to handle the build process, as a task runner. For more information about GulpJS [click here](https://github.com/gulpjs/gulp/tree/master/docs)

#### [AngularJS](https://angularjs.org/)
AngularJS is the MVC (Model View Controller) framework used for Angularplate, and is likely how you found this repository. For more information about AngularJS [click here](https://docs.angularjs.org/guide) 

#### [Sass](http://sass-lang.com/)
Sass is superset of CSS which aims to bring modularity, functions, variables and more to CSS. It is used for the CSS styling of Angularplate. For more information about Sass [click here](http://sass-lang.com/documentation/file.SASS_REFERENCE.html)

#### [Bower](http://bower.io/)
Bower is a central location of various code packages, it allows you to download all dependencies from a single location. For more information about Bower [click here](http://bower.io/docs/api/)

#### [Travis](https://travis-ci.org/)
Travis is a 'continuous integration' server. It runs builds of your codebase to ensure that your code passes any tests you've created for it. For more information about Travis [click here](http://docs.travis-ci.com/)

#### [Karma](http://karma-runner.github.io/)
Karma is a unit testing framework. It allows for Angularplate modules to be tested against developer defined tests, to ensure code quality and build success. For more information about Karma [click here](http://karma-runner.github.io/0.12/intro/installation.html)

## Lovely Badges

Here are some lovely badges to show you just how serious of a project this is:

[![Build Success/Failure](https://api.travis-ci.org/Angularplate/angularplate.svg)](https://travis-ci.org/Angularplate/angularplate)
[![Project Dependencies](https://david-dm.org/Angularplate/angularplate/status.svg)](https://david-dm.org/Angularplate/angularplate#info=dependencies&view=table)
[![Dev Dependencies](https://david-dm.org/Angularplate/angularplate/dev-status.svg)](https://david-dm.org/Angularplate/angularplate#info=devDependencies&view=table)
