#!/usr/bin/env node

const { program } = require('commander');
const createApp = require('../src/index.js');

program
  .name('create-sbc-app')
  .description('Create a new SBC Account Abstraction application with AppKit')
  .version('0.1.0')
  .argument('[project-name]', 'Name of the project')
  .option('-t, --template <template>', 'Template to use (nextjs, react, vanilla)', 'react')
  .option('--api-key <key>', 'SBC API key')
  .option('--skip-install', 'Skip dependency installation')
  .action(createApp);

program.parse(); 