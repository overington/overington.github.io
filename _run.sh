#!/usr/bin/env bash

# args: dev, build, clean
# if the argument is dev, then the development server is started
# if the argument is build, then the site is cleaned and built
# if the argument is clean, then the site is cleaned

if [ "$1" == "" ]; then
    echo "Usage: ./_run.sh [dev|build|clean]"
elif [ "$1" == "dev" ]; then
    bundle exec jekyll clean && bundle exec jekyll serve -l --trace --drafts
elif [ "$1" == "build" ]; then
    bundle exec jekyll clean && bundle exec jekyll build
elif [ "$1" == "clean" ]; then
    bundle exec jekyll clean
else
    echo "Invalid argument"
fi