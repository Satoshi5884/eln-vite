import React from 'react';
    import { Outlet, Link } from 'react-router-dom';

    export default function Layout() {
      return (
        <div>
          <nav>
            <ul>
              <li><Link to="/">ホーム</Link></li>
              <li><Link to="/register">新規登録</Link></li>
              <li><Link to="/login">ログイン</Link></li>
              <li><Link to="/logout">ログアウト</Link></li>
              <li><Link to="/pricing1">課金プラン1</Link></li>
              <li><Link to="/pricing2">課金プラン2</Link></li>
              <li><Link to="/pricing3">課金プラン3</Link></li>
            </ul>
          </nav>
          <Outlet />
        </div>
      );
    }
