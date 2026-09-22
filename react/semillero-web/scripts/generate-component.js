import fs from 'fs';
import path from 'path';

const componentName = process.argv[2];

if (!componentName) {
  console.error('\x1b[31mError: Por favor especifica el nombre del componente.\x1b[0m');
  console.log('Uso: npm run generate <NombreComponente>');
  process.exit(1);
}

const dir = path.join('src', 'components', componentName);

if (fs.existsSync(dir)) {
  console.error(`\x1b[31mError: El componente '${componentName}' ya existe.\x1b[0m`);
  process.exit(1);
}

fs.mkdirSync(dir, { recursive: true });

const jsxContent = `import React from 'react';
import './${componentName}.css';

export default function ${componentName}() {
  return (
    <div className="${componentName.toLowerCase()}-container">
      <h2>${componentName}</h2>
    </div>
  );
}
`;

const cssContent = `.${componentName.toLowerCase()}-container {
  padding: 20px;
}
`;

fs.writeFileSync(path.join(dir, `${componentName}.jsx`), jsxContent);
fs.writeFileSync(path.join(dir, `${componentName}.css`), cssContent);

console.log(`\x1b[32m¡Componente '${componentName}' creado exitosamente en ${dir}!\x1b[0m`);
