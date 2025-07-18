import fs from 'fs-extra';
import path from 'path';

interface TemplateVars {
  projectName: string;
  chain: string;
  apiKey: string;
}

export async function copyTemplate(src: string, dest: string, templateVars: TemplateVars = { projectName: 'my-sbc-app', chain: 'baseSepolia', apiKey: 'your-sbc-api-key' }) {
  await fs.ensureDir(dest);
  
  const items = await fs.readdir(src);
  
  for (const item of items) {
    const srcPath = path.join(src, item);
    const stat = await fs.stat(srcPath);
    
    if (stat.isDirectory()) {
      // Recursively copy directories
      const destPath = path.join(dest, item);
      await copyTemplate(srcPath, destPath, templateVars);
    } else {
      let destName = item;
      if (item.endsWith('.template')) {
        destName = item.replace(/\.template$/, '');
        const destPath = path.join(dest, destName);
        // Only do text replacement for .template files
        const content = await fs.readFile(srcPath, 'utf-8');
        const processedContent = content
          .replace(/\{\{projectName\}\}/g, templateVars.projectName)
          .replace(/\{\{chain\}\}/g, templateVars.chain)
          .replace(/\{\{apiKey\}\}/g, templateVars.apiKey);
        await fs.writeFile(destPath, processedContent);
      } else {
        // Copy all other files (including images) as binary
        const destPath = path.join(dest, destName);
        await fs.copy(srcPath, destPath);
      }
    }
  }
} 