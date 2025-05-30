# TransferHub - 转学分查询平台

一个类似 Transferology 的转学分查询和管理平台，帮助学生查询不同大学之间的课程转学分情况。

## 功能特点

- 🔍 **免注册搜索**: 无需注册即可搜索转学分信息
- 📚 **课程数据库**: 包含主要大学的课程和转学分映射
- 📤 **案例上传**: 注册用户可以上传转学分案例
- 💬 **社区讨论**: 在案例下进行讨论和交流
- 📎 **文件上传**: 支持上传相关文档和材料

## 技术栈

### 前端
- **Next.js 14** - React 框架，支持 SSR/SSG
- **TypeScript** - 类型安全
- **Tailwind CSS** - 实用优先的 CSS 框架
- **Lucide Icons** - 图标库

### 后端
- **Next.js API Routes** - 内置 API 支持
- **Prisma** - 现代化 ORM
- **PostgreSQL** - 关系型数据库
- **NextAuth.js** - 身份验证

### 存储
- **Cloudinary/AWS S3** - 文件存储

## 快速开始

### 前置要求

- Node.js 18+
- PostgreSQL 数据库
- npm 或 yarn

### 安装步骤

1. 克隆仓库并进入项目目录
```bash
cd transfer-credit-app
```

2. 安装依赖
```bash
npm install
```

3. 配置环境变量
创建 `.env` 文件并添加以下配置：
```env
# 数据库
DATABASE_URL="postgresql://user:password@localhost:5432/transfercredit?schema=public"

# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here

# 文件上传 (选择一个)
# Cloudinary
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret

# 或 AWS S3
AWS_ACCESS_KEY_ID=your-access-key
AWS_SECRET_ACCESS_KEY=your-secret-key
AWS_REGION=your-region
AWS_S3_BUCKET=your-bucket-name
```

4. 初始化数据库
```bash
npx prisma migrate dev --name init
npx prisma generate
```

5. 运行开发服务器
```bash
npm run dev
```

访问 http://localhost:3000 查看应用

## 项目结构

```
transfer-credit-app/
├── app/                      # Next.js 13+ App Router
│   ├── api/                 # API 路由
│   │   ├── auth/           # 认证相关
│   │   ├── search/         # 搜索接口
│   │   ├── cases/          # 案例管理
│   │   └── upload/         # 文件上传
│   ├── (auth)/             # 认证相关页面
│   │   ├── login/
│   │   └── register/
│   ├── search/             # 搜索结果页
│   ├── cases/              # 案例相关页面
│   │   ├── new/           # 创建案例
│   │   └── [id]/          # 案例详情
│   ├── browse/             # 浏览学校
│   └── page.tsx            # 首页
├── components/              # React 组件
├── lib/                     # 工具函数和配置
│   ├── prisma.ts           # Prisma 客户端
│   └── utils.ts            # 工具函数
├── prisma/                  # 数据库相关
│   └── schema.prisma       # 数据库模型
└── public/                  # 静态资源
```

## 数据库模型

- **User**: 用户信息
- **School**: 学校信息
- **Course**: 课程信息
- **TransferMapping**: 转学分映射关系
- **TransferCase**: 转学分案例
- **Comment**: 评论
- **Upload**: 上传文件

## API 接口

### 搜索
- `GET /api/search?query=CS101&from=NYU&to=UMICH`

### 案例
- `GET /api/cases` - 获取案例列表
- `POST /api/cases` - 创建新案例
- `GET /api/cases/[id]` - 获取案例详情
- `POST /api/cases/[id]/comments` - 添加评论

### 上传
- `POST /api/upload` - 上传文件

## 部署

### Vercel 部署（推荐）

1. 将代码推送到 GitHub
2. 在 Vercel 导入项目
3. 配置环境变量
4. 部署

### 自托管

1. 构建生产版本
```bash
npm run build
```

2. 启动生产服务器
```bash
npm start
```

## 贡献指南

欢迎提交 Pull Request 或创建 Issue！

## 许可证

MIT
