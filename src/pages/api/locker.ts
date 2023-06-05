import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(400).send('Bad Request');

  // GET LOCALE FROM QUERY
  const { locale } = req.query;
  if (!locale) return res.status(400).send('Bad Request');

  // SEND DATA
  return res
    .status(200)
    .json({ locker: 'https://www.wauwfy.com/go.php?oid=16746&t=d&tid=13471&sid=' });
}
