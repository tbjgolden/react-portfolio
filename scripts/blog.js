const fs = require('fs');
const path = require('path');

let files = fs.readdirSync(path.join(__dirname, '../src/pages/Blog/posts'));
files = files.filter(file => file !== 'index.js');

const data = files
  .map(file => ({
    title: fs.readFileSync(path.join(__dirname, '../src/pages/Blog/posts', file), 'utf8')
      .match(/^\s*#{1,6} ?([^\n]+)/)[1],
    date: file.replace(/_/g, '/').replace(/\.md$/g, ''),
    fileName: file,
    variable: `_${file.replace(/\.md$/g, '')}`
  }))
  .map(({ title, date, fileName, variable }) => [
    `import ${variable} from './${fileName}';`, `  {
    title: '${title.replace(/'/g, '\\\'')}',
    date: '${date}',
    html: nicemark(${variable}.replace(/^\\s*#{1,6} ?([^\\n]+)/, '')),
    url: '${title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-zA-Z0-9\-_]+/g, '')}'
  }`])
  .reduce(([a, b], [_a, _b]) => [[...a, _a], [...b, _b]], [[], []]);

const indexContent = `import nicemark from '../../../lib/nicemark.min';

${data[0].join('\n')}

export const posts = [
${data[1].join(',\n')}
].sort((a, b) => a.date < b.date);
`;

fs.writeFileSync(path.join(__dirname, '../src/pages/Blog/posts/index.js'), indexContent);

console.log('Success.')
