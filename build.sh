#!/bin/bash

cd ./_build

echo "------------------Installing dependencies------------------"

# Loads nvm
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  

nvm install 20.13.1
nvm use 20.13.1
npm install --loglevel=error

echo "------------------Building the mod------------------"
npx gulp

