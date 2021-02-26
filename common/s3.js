const AWS = require('aws-sdk');

const s3 = new AWS.S3({
  endpoint: process.env.S3_ENDPOINT,
  accessKeyId: process.env.S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.S3_SECRET_KEY_ID,
  Bucket: process.env.S3_BUCKET,
  signatureVersion: 'v4',
  region: process.env.S3_REGION
});

module.exports = {
  getSignedUrl
};

function getSignedUrl(chapter) {
  const params = {
    Bucket: 'fablesbooks',
    Key: chapter,
    Expires: 60 * 5
  };
  return new Promise((resolve, reject) => {
    s3.getSignedUrl('getObject', params, (err, url) => {
      if (err) {
        return reject(err);
      }
      return resolve(url);
    });
  });
};

// (async () => {
//   console.log('Started');
//   const url = await getSignedUrl('1-Adventures of Pinocchio/Chapter1.txt');
//   console.log('url', url);
// })();