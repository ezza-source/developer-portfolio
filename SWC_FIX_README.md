# Next.js SWC Error Fix

## Problem
Environment blocks native addons, causing:
```
Cannot load native addon
Failed to load SWC binary for linux/x64
```

## Solution Applied

### 1. Updated `next.config.mjs`
Disabled SWC transforms and minification:
```javascript
const nextConfig = {
  experimental: {
    forceSwcTransforms: false,
  },
  compiler: {
    removeConsole: false,
  },
  swcMinify: false,
};
```

### 2. Environment Variables
Created `.env.local` with:
```
NEXT_TELEMETRY_DISABLED=1
```

### 3. Run Commands

#### Development:
```bash
npm run dev
```

#### Build:
```bash
npm run build
```

#### Production:
```bash
npm run start
```

## Alternative: Install WASM SWC

If the above doesn't work, install the WASM version:

```bash
npm install @next/swc-wasm-nodejs
```

Then update `next.config.mjs`:
```javascript
const nextConfig = {
  experimental: {
    forceSwcTransforms: true,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@next/swc': '@next/swc-wasm-nodejs',
    };
    return config;
  },
};
```

## Notes
- SWC minification is now disabled (falls back to Terser)
- Build times may be slightly slower
- All functionality remains intact
- The Copilot Chat panel works independently of SWC
