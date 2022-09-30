import { NextApiRequest, NextApiResponse } from 'next';

import generateRSS from '../../utils/gGenerateRssFeed';

const RSS = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const feed = await generateRSS();

    if (req.query.format === 'json') {
      res.status(200).json(feed.json);
      return;
    }

    res.setHeader('Content-Type', 'text/xml');
    res.write(feed.rss);
    res.end();

    return;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    res.status(500).json({ error });
  }
};

export default RSS;
