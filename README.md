# pr-analyzer
Analyse and highlight pull or merge requests for various source code repositories.


## Philosphy

Linters (eslint) are good things, but sometimes not adapted to human pair reviewing.
This tool highlights things YOU can decide for yourself, your particularly project, your particularly team, responsibilities, skills...

Example we like : highlight conditions `if (xxx) else ` because it's often related to business and functionnal rules. And we have to take care of that :).

Enjoy ... and contribute ! 


## Supported source code repositories

We support : 

- Github pull request
- Bitbucket pull request


## Code content for browser execution : 

- Bitbucket : https://raw.githubusercontent.com/needone/pr-analyzer/master/analyzer/bitbucket.min.js
- Github : https://raw.githubusercontent.com/needone/pr-analyzer/master/analyzer/github.min.js


## Steps on Google Chrome

Steps to create the bookmarklet : 
- Copy one content of `code content for browser execution`, see above :arrow_double_up:
- Create a bookmark
- Paste content into the URL field
- Go in a pull request on the files changed
- Click on the bookmark => you will see the highlights on the code
