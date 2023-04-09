import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') return res.status(400).send('Bad Request')

    // GET LOCALE FROM QUERY
    const { locale } = req.query
    if (!locale) return res.status(400).send('Bad Request')

    // SEND DATA
    if (locale === 'es') return res.status(200).json({ locker: 'https://appinstallcheck.com/cl/i/j6jvdp' })
    return res.status(200).json({ locker: 'https://appinstallcheck.com/cl/i/2lm2wd' })
}
