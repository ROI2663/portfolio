# お問い合わせフォーム セットアップ手順

## 1. Google Cloud の準備

1. [Google Cloud Console](https://console.cloud.google.com/) でプロジェクトを作成
2. [Google Sheets API](https://console.cloud.google.com/apis/library/sheets.googleapis.com) を有効化
3. [サービスアカウント](https://console.cloud.google.com/iam-admin/serviceaccounts) を作成して JSON キーを発行
4. スプレッドシートを作成し、以下ヘッダーを1行目に設定
   - 送信日時 / お名前 / メールアドレス / 会社名・屋号 / お問い合わせ内容
5. スプレッドシートをサービスアカウントの `client_email` に編集者権限で共有

## 2. ローカル環境変数

`.env.local` に以下を設定してください。

```bash
GOOGLE_SHEET_ID=your_google_sheet_id
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@your-project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_PRIVATE_KEY\n-----END PRIVATE KEY-----\n"
```

## 3. Vercel ダッシュボード設定（本番）

1. [Vercel Dashboard](https://vercel.com/dashboard) を開く
2. 対象プロジェクト（`portfolio`）を選択
3. 上部メニュー `Settings` → 左メニュー `Environment Variables`
4. 次の3つを追加（Environment は `Production`, `Preview`, `Development` すべてにチェック推奨）

| Key | Value |
|---|---|
| `GOOGLE_SHEET_ID` | スプレッドシートID |
| `GOOGLE_SERVICE_ACCOUNT_EMAIL` | サービスアカウントの `client_email` |
| `GOOGLE_PRIVATE_KEY` | JSONの `private_key`（改行は `\n` の1行文字列） |

5. `Save` を押す
6. `Deployments` タブを開き、最新デプロイの `...` → `Redeploy` を実行
7. 本番URLの問い合わせフォームから送信テスト
8. Googleスプレッドシートに行が追加されることを確認

### Vercel での `GOOGLE_PRIVATE_KEY` 注意点

- 値は `"` で囲まず、そのまま貼り付けてOK
- 改行は実改行ではなく `\n` を使う
- ローカルの `.env.local` と同じ値を使う

## 4. 動作確認

1. `npm run dev` でローカル起動
2. フォーム送信して API が 200 を返すことを確認
3. スプレッドシートに行が追加されることを確認
4. 本番URLでも同じ送信確認を実施
