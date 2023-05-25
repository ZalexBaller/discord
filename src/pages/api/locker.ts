import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(400).send('Bad Request');

  // GET LOCALE FROM QUERY
  const { locale } = req.query;
  if (!locale) return res.status(400).send('Bad Request');

  // SEND DATA
  if (locale === 'ar')
    return res
      .status(200)
      .json({ locker: 'https://appinstallcheck.com/cl/i/memeqn' });
  if (locale === 'ph')
    return res
      .status(200)
      .json({ locker: 'https://appinstallcheck.com/cl/i/qkrkw6' });
  if (locale === 'br')
    return res
      .status(200)
      .json({ locker: 'https://appinstallcheck.com/cl/i/o616l4' });
  if (locale === 'es')
    return res
      .status(200)
      .json({ locker: 'https://appinstallcheck.com/cl/i/5k8kxk' });
  if (locale === 'tr')
    return res
      .status(200)
      .json({ locker: 'https://appinstallcheck.com/cl/i/po4o92' });
  if (locale === 'id')
    return res
      .status(200)
      .json({ locker: 'https://appinstallcheck.com/cl/i/7d8dlg' });
  return res
    .status(200)
    .json({ locker: 'https://appinstallcheck.com/cl/i/g656dp' });
}
