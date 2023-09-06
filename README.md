# Geo Access Checker with Puppeteer

Geo Access Checker は、Puppeteer を使用して特定の地理的位置情報に基づいてウェブサイトへのアクセスをチェックするツールです。

## 主な機能

- 地理的な位置情報に基づいてウェブサイトへのアクセスをテスト
- Puppeteer を使用してブラウザの自動操作を実行

## インストール方法

1. リポジトリをクローンします。

   ```shell
   git clone [リポジトリの URL]
   ```

2. ディレクトリに移動します。

   ```shell
   cd geo-access-checker-pptr
   ```

3. 必要なモジュールをインストールします。
   ```shell
   npm install
   ```

## Proxy 設定

このプロジェクトは、BrightData の Data Center プロキシを使用しています。正確なアクセスチェックを行うために、特定の地理的位置からのアクセスを模倣します。BrightData の設定は、`.env`ファイルを通じて行います。
詳細なプロキシの設定や使用方法については、[BrightData の公式ドキュメント](https://help.brightdata.com/hc/en-us/sections/12574952066193-Datacenter-Proxies)を参照してください。

## 使用方法

1. `.env` ファイルをプロジェクトのルートディレクトリに作成し、必要な環境変数を設定します。

   ```markdown
   PROXY_SERVER=your_proxy_server
   PROXY_USERNAME=your_proxy_username
   PROXY_PASSWORD=your_proxy_password
   ```

2. スクリプトを実行します。
   ```shell
   npm start
   ```

## TypeScript の設定

このプロジェクトは、以下の主要な TypeScript の設定で動作します：

- **ターゲットの JavaScript バージョン**: ES2020
- **モジュールシステム**: CommonJS
- **strict モード**: 有効
- **ライブラリのチェックをスキップ**: すべての `.d.ts` ファイルの型チェックをスキップ

詳細な設定は `tsconfig.json` ファイルを参照してください。

## ライセンス

ISC
