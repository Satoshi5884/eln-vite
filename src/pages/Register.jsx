export default function Register() {
      return (
        <div>
          <h1>新規登録</h1>
          <form>
            <input type="text" placeholder="ユーザー名" />
            <input type="email" placeholder="メールアドレス" />
            <input type="password" placeholder="パスワード" />
            <button type="submit">登録</button>
          </form>
        </div>
      );
    }
