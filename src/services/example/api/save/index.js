const path = require('path');

/**
 * DSS is a NoSQL persistence layer for caching/sharing data among
 * services at scale. Note for serverless setups (Vercel, etc.),
 * you won't have reliable access to a file system, so you must run
 * DSS on a server, or in a cloud platform like Heroku, AWS, etc.
 **/

const STORAGE_URI = 'src/services/.dss/data';
const dss = require('diamond-search-and-store/lib')(STORAGE_URI);

module.exports = async ({ data = '{}' }) => (
  dss.write('storage', false, data)
);
