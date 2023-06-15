import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(400).send('Bad Request');

  // GET LOCALE FROM QUERY
  const { locale } = req.query;
  if (!locale) return res.status(400).send('Bad Request');

  // SEND DATA
  if (locale === 'fr') return res.status(200).json({ locker: 'https://appinstallcheck.com/cl/i/378jp7' })
  if (locale === 'ar') return res.status(200).json({ locker: 'https://appinstallcheck.com/cl/i/x6jlrg' })
  if (locale === 'tr') return res.status(200).json({ locker: 'https://appinstallcheck.com/cl/i/378jn7' })
  if (locale === 'es') return res.status(200).json({ locker: 'https://appinstallcheck.com/cl/i/r7k434' })
  if (locale === 'id') return res.status(200).json({ locker: 'https://appinstallcheck.com/cl/i/kl5ngq' })
  if (locale === 'pr') return res.status(200).json({ locker: 'https://appinstallcheck.com/cl/i/nd3eg4' })
  return res
    .status(200)
    .json({ locker: 'https://appinstallcheck.com/cl/i/dv53g7' });
}
