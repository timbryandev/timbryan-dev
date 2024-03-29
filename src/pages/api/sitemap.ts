import { NextApiRequest, NextApiResponse } from 'next';

import generateSitemap from '../../utils/generateSitemap';

const SiteMap = async (
  _req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  try {
    const sitemap = await generateSitemap();

    res.setHeader('Content-Type', 'application/xml');
    res.write(sitemap);
    res.end();

    return;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    res.status(500).json({ error });
  }
};

export default SiteMap;
