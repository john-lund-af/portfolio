import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const filename = fileURLToPath(import.meta.url);
const __dirname = dirname(filename);

export default path.join(__dirname, '..');
