#!/bin/sh

shell=bash;

# Detect shell variant
if [ -f ~/.zshrc ]; then
  shell=zsh;
fi

# Install NVM (Node Version Manager)
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | $shell;

# Initialize NVM
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

# Install latest node and npm versions
nvm install node;

# Initialize shell configuration
$shell -c "source ~/.${shell}rc";

# Initialize project if it has not already been initialized
if [ ! -f ./package.json ]; then
  npm init -y;
fi

# Install global dependencies
if [ ! $(which parcel) ]; then
  npm install -g parcel-bundler;
fi

if [ ! $(which http-server) ]; then
  npm install -g http-server;
fi

# Install local/dev dependecies
npm install --save-dev eslint;

# Hide some directories from version control/git
echo -e ".cache\ndist\nnode_modules" > .gitignore
