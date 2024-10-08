/** @type {import('next').NextConfig} */

const path = require('path');

module.exports = {
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    formats: ['image/webp'],
    unoptimized: true, //export
  },
};
