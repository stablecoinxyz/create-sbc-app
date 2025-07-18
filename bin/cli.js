#!/usr/bin/env node
import { Command } from 'commander';
import prompts from 'prompts';
import { copyTemplate } from './copyTemplate.js';
import path from 'path';
import fs from 'fs-extra';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const program = new Command();
program
    .name('create-sbc-app')
    .argument('[project-directory]', 'Directory to create the new app in')
    .option('-t, --template <template>', 'Template to use (react, nextjs, backend)')
    .option('--api-key <apiKey>', 'Your SBC API key')
    .option('--wallet <wallet>', 'Wallet integration (not yet implemented)')
    .action(async (dir, options) => {
    if (options.wallet) {
        console.log('Wallet integration not yet implemented.');
        process.exit(0);
    }
    const templateChoices = [
        { title: 'React', value: 'react' },
        { title: 'Next.js', value: 'nextjs' },
        { title: 'Backend', value: 'backend' }
    ];
    // Use provided argument or prompt for project directory
    let projectDir = dir && dir.trim() ? dir.trim() : '';
    if (!projectDir) {
        const res = await prompts({
            type: 'text',
            name: 'dir',
            message: 'Project directory:'
        });
        if (!res.dir || !res.dir.trim()) {
            console.log('Project directory is required.');
            process.exit(1);
        }
        projectDir = res.dir.trim();
    }
    // Use provided option or prompt for template
    let template = options.template && ['react', 'nextjs', 'backend'].includes(options.template) ? options.template : '';
    if (!template) {
        const res = await prompts({
            type: 'select',
            name: 'template',
            message: 'Which template?',
            choices: templateChoices
        });
        if (res.template === undefined) {
            console.log('Template selection is required.');
            process.exit(1);
        }
        template = templateChoices[res.template]?.value;
        if (!template) {
            console.log('Template selection is required.');
            process.exit(1);
        }
    }
    // Use provided option or prompt for API key
    let apiKey = options.apiKey && options.apiKey.trim() ? options.apiKey.trim() : '';
    if (!apiKey) {
        const res = await prompts({
            type: 'text',
            name: 'apiKey',
            message: 'Your SBC API key (or leave empty to set later):'
        });
        apiKey = res.apiKey ? res.apiKey.trim() : 'your-sbc-api-key';
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
    await copyTemplate(templateDir, targetDir, {
        projectName: projectDir,
        chain: 'baseSepolia',
        apiKey: apiKey
    });
    console.log(`\nSuccess! Created ${projectDir} using the ${template} template.`);
    console.log(`\nNext steps:`);
    console.log(`  cd ${projectDir}`);
    if (!options.apiKey && apiKey === 'your-sbc-api-key') {
        console.log(`  # Edit .env and add your SBC API key`);
    }
    console.log(`  pnpm install # or npm install`);
    if (template === 'backend') {
        console.log('  pnpm start   # or npm run start');
    }
    else {
        console.log('  pnpm dev     # or npm run dev');
    }
    console.log('\nHappy hacking!');
});
program.parse();
