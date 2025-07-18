import fs from 'fs-extra';

export async function copyTemplate(src: string, dest: string) {
  await fs.copy(src, dest, {
    overwrite: true,
    errorOnExist: false,
    filter: (srcPath) => !srcPath.endsWith('node_modules')
  });
} 