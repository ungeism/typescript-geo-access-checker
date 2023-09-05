const puppeteer = require("puppeteer");
require("dotenv").config();

// PROXYのID/Pass
const PROXY_SERVER = process.env.PROXY_SERVER;
const USERNAME = process.env.PROXY_USERNAME;
const PASSWORD = process.env.PROXY_PASSWORD;

(async () => {
  const browser = await puppeteer.launch({
    headless: false, // ヘッドレスをオフに
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      PROXY_SERVER, // プロキシーの設定
    ],
  });
  const page = await browser.newPage();
  await page.authenticate({
    username: USERNAME,
    password: PASSWORD,
  });
  await page.setViewport({ width: 1500, height: 1000 });
})();
