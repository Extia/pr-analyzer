# pr-analyzer
Analyse and highlight pull or merge requests for various source code repositories.


## Philosphy

Linters (eslint) are good things, but sometimes not adapted to human pair reviewing.
This tool highlight some things YOU can decide for yourself, your particularly project, your particularly team and skills.

Example we like : highlight conditions `if (xxx) else ` because it's often related to business and functionnal rules. And we have to take care of that :).

Enjoy ... and contribute ! 


## Supported source code repositories

We support : 

- Github pull request
- Bitbucket pull request


## Steps on Google Chrome

Steps : 
- Copy content of a `/analyzer/xxxx.js` file 
- Create a bookmark
- Paste content into the URL field
- Go in a pull request on the files changed
- Click on the bookmark => you will see the highlights on the code
