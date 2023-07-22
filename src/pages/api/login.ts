import { NextApiRequest, NextApiResponse } from 'next';

export default async function LoginHandler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password } = req.body;
    
    // 예시: 사용자 인증 검증
    if (email === 'test@test.test' && password === 'test') {
      // 인증 성공
      res.status(200).json({ message: '로그인 성공' });
    } else {
      // 인증 실패
      res.status(401).json({ message: '로그인 실패' });
    }
  } else {
    res.status(405).json({ message: '허용되지 않은 메소드' });
  }
}