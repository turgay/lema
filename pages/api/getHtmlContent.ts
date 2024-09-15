import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { page } = req.query;
  const pageNumber = parseInt(page as string, 10) || 1;

  const filePath = path.join(process.cwd(), 'public', 'rube', `rube_${pageNumber}.html`);
  
  try {
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, 'utf8');
      res.status(200).send(fileContent);
    } else {
      res.status(404).json({ error: 'Page not found' });
    }
  } catch (error) {
    console.error('Error reading file:', error, 'Attempted path:', filePath);
    res.status(500).json({ error: 'Unable to read file', path: filePath });
  }
}