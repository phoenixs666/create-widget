{
  "private": true,
  "name": "{{{ packageName }}}",
  "version": "0.0.0",
  "scripts": {
    "start": "dumi dev",
    "docs:build": "dumi build",
    "docs:deploy": "gh-pages -d docs-dist",
    "build": "father-build",
    "deploy": "npm run docs:build && npm run docs:deploy",
    "prettier": "prettier --write \"**/*.{js,jsx,tsx,ts,less,md,json}\"",
    "test": "umi-test",
    "test:coverage": "umi-test --coverage",
    "prepublishOnly": "npm run build"
  },
  "module": "es/index.js",
  "typings": "es/index.d.ts",
  "gitHooks": {
    "pre-commit": "lint-staged"
  },
  "lint-staged": {
    "*.{js,jsx,less,md,json}": [
      "prettier --write"
    ],
    "*.ts?(x)": [
      "prettier --parser=typescript --write"
    ]
  },
  "dependencies": {
    "antd": "^4.18.6"
  },
  "devDependencies": {
    "@testing-library/jest-dom": "^5.15.1",
    "@testing-library/react": "^12.1.2",
    "@types/jest": "^27.0.3",
    "@types/lodash": "^4.14.178",
    "@umijs/fabric": "^2.8.1",
    "@umijs/test": "^3.0.5",
    "dumi": "^1.1.0",
    "father-build": "^1.17.2",
    "gh-pages": "^3.0.0",
    "lint-staged": "^10.0.7",
    "prettier": "^2.2.1",
    "rollup-plugin-commonjs": "^10.1.0",
    "rollup-plugin-replace": "^2.2.0",
    "yorkie": "^2.0.0"
  },
  "peerDependencies": {
    "react": "^16.12.0 || ^17.0.0"
  }
}
