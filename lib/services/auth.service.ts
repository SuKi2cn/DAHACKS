import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

type UserRole = 'ADMIN' | 'MODERATOR' | 'USER'

interface User {
  id: string
  email: string
  name: string | null
  password: string
  role: UserRole
  college: string | null
  createdAt: Date
  updatedAt: Date
}

export interface CreateUserInput {
  email: string
  name?: string
  password: string
  college?: string
  role?: UserRole
}

export interface LoginInput {
  email: string
  password: string
}

export async function createUser(input: CreateUserInput): Promise<Omit<User, 'password'>> {
  const { email, name, password, college, role = 'USER' } = input

  // 检查邮箱是否已存在
  const existingUser = await prisma.user.findUnique({
    where: { email }
  }) as User | null

  if (existingUser) {
    throw new Error('Email already exists')
  }

  // 加密密码
  const hashedPassword = await bcrypt.hash(password, 10)

  // 创建用户
  const user = await prisma.user.create({
    data: {
      email,
      name,
      password: hashedPassword,
      college,
      role
    }
  }) as User

  // 返回用户信息（不包含密码）
  const { password: _, ...userWithoutPassword } = user
  return userWithoutPassword
}

export async function login(input: LoginInput): Promise<Omit<User, 'password'>> {
  const { email, password } = input

  // 查找用户
  const user = await prisma.user.findUnique({
    where: { email }
  }) as User | null

  if (!user) {
    throw new Error('Invalid email or password')
  }

  // 验证密码
  const isValidPassword = await bcrypt.compare(password, user.password)

  if (!isValidPassword) {
    throw new Error('Invalid email or password')
  }

  // 返回用户信息（不包含密码）
  const { password: _, ...userWithoutPassword } = user
  return userWithoutPassword
}

export async function getUserById(id: string): Promise<Omit<User, 'password'>> {
  const user = await prisma.user.findUnique({
    where: { id }
  }) as User | null

  if (!user) {
    throw new Error('User not found')
  }

  // 返回用户信息（不包含密码）
  const { password: _, ...userWithoutPassword } = user
  return userWithoutPassword
}

export async function updateUserRole(id: string, role: UserRole): Promise<Omit<User, 'password'>> {
  const user = await prisma.user.update({
    where: { id },
    data: { role }
  }) as User

  // 返回用户信息（不包含密码）
  const { password: _, ...userWithoutPassword } = user
  return userWithoutPassword
} 