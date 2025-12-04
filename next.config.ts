import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 modularizeImports: {
    '@mui/material': {
      transform: '@mui/material/{{member}}',
    },
    '@mui/icons-material': {
      transform: '@mui/icons-material/{{member}}',
    },
  },

  transpilePackages: ['@mui/material', '@mui/system', '@mui/icons-material'],
};

module.exports = nextConfig
