# GIT Forking [timing 45m]

## Goals

- Fork a repo

- Create a pull request

## Tasks

- Work with a fork repo

Add remote upstream to pull a fork repo

```bash
$ git remote add upstream <link-master-repo>
```

See remote links of my repo

```bash
$ git remote -v
```

- 3 steps for update my fork-repo from master-repo

bring the change's from master-repo to my-fork-repo-local

```bash
$ git fetch upstream
```

merge(save) changes from upstream/masyrt yo my-fork-repo-local

```bash
$ git merge upstream/master
```

Last step is make a git push, for save changes in my-fork-repo-master

```bash
$ git push
```

# [Practice](practice)