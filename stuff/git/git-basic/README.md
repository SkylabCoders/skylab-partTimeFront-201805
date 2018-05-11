# GIT Basic [timing 1h]

## Goals

- Basic commands
- Create and work with a repo
- Push and pull changes

## Tasks

- Install git; go to [git web](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) to install git.

- Initialize a local Git repository

```bash
$ git init <repository-name>
```

- Initialize a bare repository

```bash
$ git init --bare
```

- Clone a repository, from remote repo to local repo:

```bash
$ git clone <url>
```

- Check repository status

```bash
$ git status
```

- Add changes to staging area

```bash
$ git add <file-or-directory>
```

- Add all changes to staging area

```bash
$ git add -A
```

- Remove changes from staging area

```bash
git rm --cached <file-or-dorectory>
```

- Add changes from staging area to my local repository

```bash
$ git commit -m "Add a comment to describe commit"
```

- See a commit logs

```bash
$ git log
```

- Update changes to remote repository

```bash
$ git push
```

- Update my local repository from remote repository

```bash
$ git pull
```

- Return to a before version (to specific commit)

```bash
$ git chekcout <commit-code>
```

## [Homework](https://try.github.io/levels/1/challenges/1)

## [Reading](https://www.atlassian.com/git/tutorials)