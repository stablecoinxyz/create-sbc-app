import fs from 'fs-extra';
import path from 'path';
export async function copyTemplate(src, dest, templateVars = { projectName: 'my-sbc-app', chain: 'baseSepolia', apiKey: 'your-sbc-api-key' }) {
    await fs.ensureDir(dest);
    const items = await fs.readdir(src);
    for (const item of items) {
        const srcPath = path.join(src, item);
        const stat = await fs.stat(srcPath);
        if (stat.isDirectory()) {
            // Recursively copy directories
            const destPath = path.join(dest, item);
            await copyTemplate(srcPath, destPath, templateVars);
        }
        else {
            // Copy files, removing .template suffix and replacing content
            let destName = item;
            if (item.endsWith('.template')) {
                destName = item.replace(/\.template$/, '');
            }
            const destPath = path.join(dest, destName);
            // Read file content and replace template variables
            const content = await fs.readFile(srcPath, 'utf-8');
            const processedContent = content
                .replace(/\{\{projectName\}\}/g, templateVars.projectName)
                .replace(/\{\{chain\}\}/g, templateVars.chain)
                .replace(/\{\{apiKey\}\}/g, templateVars.apiKey);
            await fs.writeFile(destPath, processedContent);
        }
    }
}
