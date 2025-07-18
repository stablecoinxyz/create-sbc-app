#!/usr/bin/env node
import { Command } from 'commander';
import prompts from 'prompts';
import { copyTemplate } from './copyTemplate';
import path from 'path';
import fs from 'fs-extra';

const program = new Command();

program
  .name('create-sbc-app')
  .argument('[project-directory]', 'Directory to create the new app in')
  .option('-t, --template <template>', 'Template to use (react, nextjs, backend)')
  .option('--wallet <wallet>', 'Wallet integration (not yet implemented)')
  .action(async (dir, options) => {
    if (options.wallet) {
      console.log('Wallet integration not yet implemented.');
      process.exit(0);
    }

    // Prompt for missing options
    let projectDir = dir;
    let template = options.template;
    const templateChoices = [
      { title: 'React', value: 'react' },
      { title: 'Next.js', value: 'nextjs' },
      { title: 'Backend', value: 'backend' }
    ];

    if (!projectDir) {
      const res = await prompts({
        type: 'text',
        name: 'dir',
        message: 'Project directory:'
      });
      projectDir = res.dir;
    }

    if (!template) {
      const res = await prompts({
        type: 'select',
        name: 'template',
        message: 'Which template?',
        choices: templateChoices
      });
      template = templateChoices[res.template]?.value;
    }

    if (!projectDir || !template) {
      console.error('Project directory and template are required.');
      process.exit(1);
    }

    const targetDir = path.resolve(process.cwd(), projectDir);
    const templateDir = path.resolve(__dirname, '../templates', template);

    if (fs.existsSync(targetDir)) {
      const res = await prompts({
        type: 'confirm',
        name: 'overwrite',
        message: `Directory ${projectDir} already exists. Overwrite?`,
        initial: false
      });
      if (!res.overwrite) {
        console.log('Aborted.');
        process.exit(0);
      }
      await fs.remove(targetDir);
    }

    await copyTemplate(templateDir, targetDir);

    console.log(`\nSuccess! Created ${projectDir} using the ${template} template.`);
    console.log(`\nNext steps:`);
    console.log(`  cd ${projectDir}`);
    console.log(`  pnpm install # or npm install`);
    if (template === 'backend') {
      console.log('  pnpm start   # or npm run start');
    } else {
      console.log('  pnpm dev     # or npm run dev');
    }
    console.log('\nHappy hacking!');
  });

program.parse(); 