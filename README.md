# Installation

## MacOS
You'll need to install [hugo](https://gohugo.io/) using [homebrew](https://brew.sh/).

1. Go to the [homebrew](https://brew.sh/) website and follow the directions. The most important step is:
```bash
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
> you might need to update permissions on the `/usr/local/` directory. Not too scary.

2. Run the brew command to install hugo

First update Homebrew
```bash
$ brew update
```
Then install Hugo
```bash
$ brew install hugo
```
Hugo gets installed in the `/usr/local/bin/` directory, so it should be accessible to all users on your system

3. Verify hugo runs correctly
```bash
$ hugo version
Hugo Static Site Generator v0.19 darwin/amd64 BuildDate: 2017-02-27T02:21:29-08:00
```


