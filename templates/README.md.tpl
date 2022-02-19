# {{{ packageName }}}

## 开始

## 准备

### 设置 npmtoken

编辑~/.npmrc

```
//registry.npmjs.org/:_authToken=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
```

## 发布

```
npm run pub
```

## 常见问题

- src/index.ts 必须导出 { widget } 或者 使用 export default（不建议）
- dependencies 和 peerDependencies 默认不打包到包中，除了 react 和 antd 其他依赖需要写进.fatherrc.ts 的 externalsExclude 中
- antd 的 导入 使用 `import { Card } from 'antd' ` 而不是 `import Card from 'antd/lib/card`
- 遇到 ‘xxx' is nor exported by 'node_modules/xxx' 的情况，把缺少的属性添加到.fatherrc.ts 的 extraRollupPlugins/commonjs 插件配置 中

```
例如：
extraRollupPlugins: [
    commonjs({
        include: /node_modules/,
        namedExports: {
            'node_modules/react-is/index.js': ['isFragment', 'isMemo', 'ForwardRef'],
            'node_modules/react-dom/index.js': ['findDOMNode', 'render', 'unmountComponentAtNode'],
        },
    })
]
```
