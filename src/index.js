const inquirer = require('inquirer');
const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');
const ora = require('ora');
const { exec } = require('child_process');
const { promisify } = require('util');

const execAsync = promisify(exec);

// Chain configuration mapping
const CHAIN_CONFIG = {
  baseSepolia: 'baseSepolia',
  base: 'base'
};

async function createApp(projectName, options) {
  console.log(chalk.cyan('🚀 Welcome to SBC App Creator!'));
  console.log();

  // Interactive prompts if not provided
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'projectName',
      message: 'What is your project name?',
      default: projectName || 'my-sbc-app',
      when: !projectName,
      validate: (input) => {
        if (!input.trim()) return 'Project name is required';
        if (!/^[a-z0-9-_]+$/i.test(input)) return 'Project name can only contain letters, numbers, hyphens, and underscores';
        return true;
      }
    },
    {
      type: 'list',
      name: 'template',
      message: 'Which template would you like to use?',
      choices: [
        { name: 'Next.js (Recommended)', value: 'nextjs' },
        { name: 'React', value: 'react' },
        { name: 'Vanilla JavaScript', value: 'vanilla' }
      ],
      when: !options.template
    },
    {
      type: 'input',
      name: 'apiKey',
      message: 'Enter your SBC API key (or leave empty to set later):',
      when: !options.apiKey
    },
    {
      type: 'list',
      name: 'chain',
      message: 'Which chain would you like to target?',
      choices: [
        { name: 'Base Sepolia (Testnet)', value: 'baseSepolia' },
        { name: 'Base Mainnet', value: 'base' }
      ],
      default: 'baseSepolia'
    }
  ]);

  const config = {
    projectName: projectName || answers.projectName,
    template: options.template || answers.template,
    apiKey: options.apiKey || answers.apiKey || 'sbc-your-api-key-here',
    chain: answers.chain || 'baseSepolia',
    skipInstall: options.skipInstall || false
  };

  await scaffoldProject(config);
}

async function scaffoldProject(config) {
  const { projectName, template, apiKey, chain, skipInstall } = config;
  const targetDir = path.join(process.cwd(), projectName);

  // Check if directory exists
  if (await fs.pathExists(targetDir)) {
    console.log(chalk.red(`❌ Directory ${projectName} already exists!`));
    const overwrite = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'overwrite',
        message: 'Do you want to overwrite it?',
        default: false
      }
    ]);
    
    if (!overwrite.overwrite) {
      console.log(chalk.yellow('Cancelled.'));
      return;
    }
    
    await fs.remove(targetDir);
  }

  const spinner = ora('Creating project structure...').start();

  try {
    // Copy template files
    const templateDir = path.join(__dirname, '..', 'templates', template);
    await fs.copy(templateDir, targetDir);

    spinner.text = 'Configuring project...';
    
    // Replace template variables
    await replaceTemplateVariables(targetDir, {
      projectName,
      apiKey,
      chain: CHAIN_CONFIG[chain]
    });

    if (!skipInstall) {
      spinner.text = 'Installing dependencies...';
      
      // Install dependencies
      await execAsync('npm install', { cwd: targetDir });
    }

    spinner.succeed(chalk.green('Project created successfully!'));

    // Success message
    console.log();
    console.log(chalk.green(`✅ ${projectName} is ready!`));
    console.log();
    
    if (apiKey === 'sbc-your-api-key-here') {
      console.log(chalk.yellow('🔑 IMPORTANT: Setup your SBC API key first!'));
      console.log();
      console.log('1. Get your API key:');
      console.log(chalk.cyan('   Visit: https://dashboard.stablecoin.xyz'));
      console.log();
      console.log('2. Configure environment variables:');
      console.log(chalk.cyan(`   cd ${projectName}`));
      if (template === 'react') {
        console.log(chalk.cyan('   # Edit the .env file and replace the API key:'));
        console.log(chalk.cyan('   VITE_SBC_API_KEY=your_real_api_key_here'));
      } else if (template === 'nextjs') {
        console.log(chalk.cyan('   # Edit the .env.local file and replace the API key:'));
        console.log(chalk.cyan('   SBC_API_KEY=your_real_api_key_here'));
      } else {
        console.log(chalk.cyan('   # Check your project files for API key configuration'));
      }
      console.log();
      console.log('3. Start the development server:');
    } else {
      console.log('Next steps:');
      console.log(chalk.cyan(`  cd ${projectName}`));
    }
    
    if (skipInstall) {
      console.log(chalk.cyan('  npm install'));
    }
    
    console.log(chalk.cyan('  npm run dev'));
    console.log();
    
    if (template === 'react') {
      console.log('🚀 Your React app includes:');
      console.log('   • Gasless transaction example');
      console.log('   • Wallet connection component');
      console.log('   • Balance checking functionality');
      console.log('   • Complete error handling');
      console.log('   • Modern Vite + TypeScript setup');
      console.log();
      console.log('💡 After connecting your wallet, try the "Send Gasless TX" button!');
    } else if (template === 'nextjs') {
      console.log('🚀 Your Next.js app is ready with SBC integration!');
    } else {
      console.log('🚀 Your vanilla app is ready with SBC integration!');
    }
    
    console.log();
    console.log('📚 Documentation: https://docs.stablecoin.xyz');
    console.log('💬 Community: https://t.me/stablecoin_xyz');

  } catch (error) {
    spinner.fail('Failed to create project');
    console.error(chalk.red('Error:', error.message));
    
    // Cleanup on failure
    if (await fs.pathExists(targetDir)) {
      await fs.remove(targetDir);
    }
    process.exit(1);
  }
}

async function replaceTemplateVariables(dir, variables) {
  const walk = async (currentPath) => {
    const items = await fs.readdir(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = await fs.stat(fullPath);
      
      if (stat.isDirectory()) {
        await walk(fullPath);
      } else if (item.endsWith('.template')) {
        let content = await fs.readFile(fullPath, 'utf8');
        
        // Replace variables
        Object.entries(variables).forEach(([key, value]) => {
          const regex = new RegExp(`{{${key}}}`, 'g');
          content = content.replace(regex, value);
        });
        
        // Remove .template extension
        const newPath = fullPath.replace('.template', '');
        await fs.writeFile(newPath, content);
        await fs.remove(fullPath);
      }
    }
  };
  
  await walk(dir);
}

module.exports = createApp; 