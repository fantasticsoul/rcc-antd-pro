[English](./README.md) | 简体中文

# Ant Design Pro Powered by [react-control-center](https://github.com/fantasticsoul/react-control-center)
###注意哦! 此项目只是为了证明 [cc](https://github.com/fantasticsoul/react-control-center) 的弱入侵性和灵活性，antd-pro的所有路由组件都已cc化，它们的状态管理由react-control-center直接接管
###src/models-cc展示了cc改变所有组件的状态是如此的简单和优雅
###更有趣的是, 打开console，通过cc提供的顶层api直接操作数据改变视图吧^_^
---
### 同时我也新增了一个路由组件 `routes/Dashboard/CCState.js` 来展示cc强大能力, 这个组件还没有彻底写完，将会被持续更新的, 就像 [我为cc专门写的引导示例一样](https://github.com/fantasticsoul/rcc-simple-demo)，将会很快会为大家带来更多的精彩演示
---
### 希望我亲爱的朋友们花一点时间了解[react-control-center](https://github.com/fantasticsoul/react-control-center)并探索它更多有趣的玩法

# Ant Design Pro

[![](https://img.shields.io/travis/ant-design/ant-design-pro.svg?style=flat-square)](https://travis-ci.org/ant-design/ant-design-pro) [![Build status](https://ci.appveyor.com/api/projects/status/67fxu2by3ibvqtat/branch/master?svg=true)](https://ci.appveyor.com/project/afc163/ant-design-pro/branch/master)  [![Gitter](https://badges.gitter.im/ant-design/ant-design-pro.svg)](https://gitter.im/ant-design/ant-design-pro?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

开箱即用的中台前端/设计解决方案。

![](https://gw.alipayobjects.com/zos/rmsportal/xEdBqwSzvoSapmnSnYjU.png)

- 预览：http://preview.pro.ant.design
- 首页：http://pro.ant.design
- 使用文档：http://pro.ant.design/docs/getting-started
- 常见问题：http://pro.ant.design/docs/faq

## 特性

- :gem: **优雅美观**：基于 Ant Design 体系精心设计
- :triangular_ruler: **常见设计模式**：提炼自中后台应用的典型页面和场景
- :rocket: **最新技术栈**：使用 React/dva/antd 等前端前沿技术开发
- :iphone: **响应式**：针对不同屏幕大小设计
- :art: **主题**：可配置的主题满足多样化的品牌诉求
- :globe_with_meridians: **国际化**：内建业界通用的国际化方案
- :gear: **最佳实践**：良好的工程实践助您持续产出高质量代码
- :1234: **Mock 数据**：实用的本地数据调试方案
- :white_check_mark: **UI 测试**：自动化测试保障前端产品质量

## 模板

```
- Dashboard
  - 分析页
  - 监控页
  - 工作台
- 表单页
  - 基础表单页
  - 分步表单页
  - 高级表单页
- 列表页
  - 查询表格
  - 标准列表
  - 卡片列表
  - 搜索列表（项目/应用/文章）
- 详情页
  - 基础详情页
  - 高级详情页
- 结果
  - 成功页
  - 失败页
- 异常
  - 403 无权限
  - 404 找不到
  - 500 服务器出错
- 帐户
  - 登录
  - 注册
  - 注册成功
```

## 使用

```bash
$ git clone git@github.com:ant-design/ant-design-pro --depth=1
$ cd ant-design-pro
$ npm install
$ npm start         # 访问 http://localhost:8000
```

也可以使用集成化的 [ant-design-pro-cli](https://github.com/ant-design/ant-design-pro-cli) 工具。

```bash
$ npm install ant-design-pro-cli -g
$ mkdir pro-demo && cd pro-demo
$ pro new
```

更多信息请参考 [使用文档](http://pro.ant.design/docs/getting-started)。

## 兼容性

现代浏览器及 IE11。

## 参与贡献

我们非常欢迎你的贡献，你可以通过以下方式和我们一起共建 :smiley:：

- 在你的公司或个人项目中使用 Ant Design Pro。
- 通过 [Issue](http://github.com/ant-design/ant-design-pro/issues) 报告 bug 或进行咨询。
- 提交 [Pull Request](http://github.com/ant-design/ant-design-pro/pulls) 改进 Pro 的代码。
