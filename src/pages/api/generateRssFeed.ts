import { NextApiRequest, NextApiResponse } from 'next';

import generateRSS from '../../utils/generateRssFeed';

const generateRssFeed = async (_req: NextApiRequest, res: NextApiResponse) => {
  let error;
  let status;

  try {
    await generateRSS();
    status = 200;
    error = null;
  } catch (err) {
    status = 500;
    error = err;
  }

  res.status(status).json({ error });
};

export default generateRssFeed;
