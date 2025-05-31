import { NextResponse } from 'next/server';
import { getUserById } from '@/lib/services/auth.service';
import { getServerSession } from 'next-auth';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    // 验证用户是否已登录
    const session = await getServerSession();
    if (!session?.user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // 验证用户是否有权限访问此信息
    if (session.user.id !== params.id) {
      return NextResponse.json(
        { error: 'Forbidden' },
        { status: 403 }
      );
    }

    const user = await getUserById(params.id);
    return NextResponse.json(user);
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 400 }
    );
  }
} 