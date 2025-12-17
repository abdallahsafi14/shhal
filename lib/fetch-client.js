// app/(dashboard)/profile/page.js
import { cookies } from 'next/headers';
import api from '@/lib/axios';

async function getUserData() {
  const token = cookies().get('session_token')?.value;

  try {
    const res = await api.get('/user/profile', {
      headers: {
        Authorization: `Bearer ${token}` // Manually attach token from cookie
      }
    });
    return res.data;
  } catch (err) {
    return null;
  }
}

export default async function ProfilePage() {
  const user = await getUserData();
  
  if (!user) return <div>يرجى تسجيل الدخول</div>;

  return <div>مرحباً, {user.name}</div>;
}