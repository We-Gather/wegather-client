import Image from 'next/image';

import logo from '@/assets/images/logo.png';

import style from './Footer.module.scss';

export default function Footer() {
  return (
    <div id={style.footer}>
      <div className={style.left}>
        <div className={style.logo}>
          <Image src={logo} alt="logo" height={20} />
        </div>
        <div className={style.detail}>
          <div className={style.detailtxt}>이용약관</div>
          <div className={style.detailtxt}>개인정보처리방침</div>
          <div className={style.detailtxt}>청소년보호정책</div>
          <div className={style.detailtxt}>문의하기</div>
        </div>
      </div>
      <div className={style.sns}>
        <div className={style.snstxt}>Follow and contact with us</div>
        <div className={style['icon-container']}>
          <div className={style.icon}>인스타</div>
          <div className={style.icon}>페이스북</div>
          <div className={style.icon}>유튜브</div>
        </div>
      </div>
    </div>
  );
}
