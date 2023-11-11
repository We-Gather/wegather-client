'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import logo from '@/assets/images/logo.png';
import notification from '@/assets/images/notification.png';

import style from './style.module.scss';

export default function TopNav() {
  const [notificationCount, setNotificationCount] = useState<number>(0);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const tabs = [
    { name: '신청', path: 'apply' },
    { name: '생성', path: 'create' },
    { name: '관리', path: 'manage' },
    { name: '내동아리', path: 'myclub' },
  ];

  const pathname = usePathname();

  function login() {
    setIsLoggedIn(true);
  }

  function logout() {
    setIsLoggedIn(false);
  }

  function getNotification() {
    setNotificationCount(notificationCount ^ 10);
  }

  return (
    <nav id={style.topnav}>
      <div className={style.logo}>
        <Image src={logo} alt="Wegather Logo" width={200} />
      </div>
      <div className={style['menu-container']}>
        {tabs.map((tab, idx) => {
          return (
            <Link
              href={tab.path}
              className={style.menu}
              style={{
                color: '/' + tab.path == pathname ? '#1CA526' : 'inherit',
              }}
              key={idx}
            >
              {tab.name}
            </Link>
          );
        })}
      </div>
      <div className={style['button-container']}>
        <Image
          src={notification}
          alt="notification"
          width={20}
          className={style.notification}
          style={{ visibility: isLoggedIn ? 'visible' : 'hidden' }}
          onClick={getNotification}
        />

        <div
          className={style['notification-cnt']}
          style={{
            visibility: isLoggedIn && notificationCount ? 'visible' : 'hidden',
          }}
        >
          {notificationCount}
        </div>

        <Link
          href={isLoggedIn ? '/myclub' : '/'}
          className={style.button}
          onClick={isLoggedIn ? () => {} : login}
        >
          {isLoggedIn ? '내정보' : '로그인'}
        </Link>
        <span className={style.seperator}>|</span>
        <Link
          href={isLoggedIn ? '/' : '/'}
          className={style.button}
          onClick={isLoggedIn ? logout : () => {}}
        >
          {isLoggedIn ? '로그아웃' : '회원가입'}
        </Link>
      </div>
    </nav>
  );
}
