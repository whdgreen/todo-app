# 待办事项应用 (Todo App)

一个用 React + Vite 构建的轻量待办事项应用，支持添加、删除、标记完成，数据通过浏览器 localStorage 持久化，刷新不丢失。

## 主要功能

| 功能 | 操作 | 效果 |
|------|------|------|
| **添加** | 输入文字后点「添加」按钮，或直接按 Enter | 新增一条事项到列表，输入框自动清空 |
| **标记完成** | 点击事项左侧的复选框 | 文字加删除线、变灰；再次点击可取消完成 |
| **删除** | 点击事项右侧的「删除」按钮 | 该事项从列表移除 |

### 设计细节

- **数据持久化**：所有事项自动保存到浏览器的 `localStorage`（键名 `todos`），刷新页面、关闭重开浏览器都不丢失。无需登录、无需后端、无需数据库。
- **空状态提示**：列表为空时显示「暂无待办事项」。
- **空输入过滤**：不输入内容、或只输入空格点添加，不会产生空白事项。
- **容错**：本地存储数据损坏或解析失败时自动回退为空列表，不会崩溃；隐私模式下写入失败也会静默忽略，不影响使用。

### 不包含的功能（按设计精简）

无筛选（全部 / 未完成 / 已完成）、无编辑已有事项、无一键清除已完成、无数量统计、无后端同步 —— 保持最小可用。

## 使用方法

### 1. 获取代码

```bash
# 从 GitHub 克隆
git clone git@github.com:whdgreen/todo-app.git
cd todo-app
```

### 2. 安装依赖

```bash
npm install
```

### 3. 启动开发服务器

```bash
npm run dev
```

终端会显示本地地址（默认 `http://localhost:5173`，若端口被占用会自动换到 5174 等）。浏览器打开该地址即可使用。

### 4. 日常使用

- 在顶部输入框输入待办内容（如「买菜」）→ 按 Enter 或点「添加」
- 完成一件事 → 勾选它前面的复选框，文字变为删除线
- 想删除 → 点该条右侧的「删除」
- 关闭浏览器再打开，事项依然在

### 5. 打包发布（可选）

```bash
npm run build      # 生成生产版本到 dist/
npm run preview    # 本地预览构建产物
```

`dist/` 目录里是可直接部署到任意静态托管（如 GitHub Pages、Vercel、Nginx）的纯静态文件。

## 项目结构

```
todo-app/
├── index.html              # HTML 入口
├── package.json            # 依赖与脚本
├── vite.config.js          # Vite 配置
└── src/
    ├── main.jsx            # React 入口，挂载到 #root
    ├── App.jsx             # UI 组件：输入框 + 列表
    ├── App.css             # 样式
    ├── index.css           # 全局重置
    └── hooks/
        └── useTodos.js     # 状态逻辑 + localStorage 持久化（核心）
```

核心逻辑集中在 `src/hooks/useTodos.js`：它对外暴露 `todos`（列表）、`addTodo`（添加）、`toggleTodo`（切换完成）、`deleteTodo`（删除）四个接口，内部用 `useState` 管理状态、`useEffect` 同步到 localStorage。`App.jsx` 只负责界面，把用户操作转发给这个 hook —— 逻辑与界面分离，便于理解和维护。

## 技术栈

- [React](https://react.dev/) + [Vite](https://vitejs.dev/)（纯 JavaScript，无 TypeScript）
- 原生 CSS，无 UI 框架、无状态管理库、无路由库
- 浏览器 localStorage 持久化，无后端

## 仓库

https://github.com/whdgreen/todo-app
