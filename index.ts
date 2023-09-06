import puppeteer from "puppeteer";
import dotenv from "dotenv";

dotenv.config();

// PROXYのID/Pass
const PROXY_SERVER: string | undefined = process.env.PROXY_SERVER;
const USERNAME: string | undefined = process.env.PROXY_USERNAME;
const PASSWORD: string | undefined = process.env.PROXY_PASSWORD;

(async () => {
  const argsList: string[] = ["--no-sandbox", "--disable-setuid-sandbox"];

  if (PROXY_SERVER) argsList.push(PROXY_SERVER);

  const browser = await puppeteer.launch({
    headless: false, // ヘッドレスをオフに
    args: argsList,
  });
  const page = await browser.newPage();

  if (USERNAME && PASSWORD) {
    await page.authenticate({
      username: USERNAME,
      password: PASSWORD,
    });
  }

  await page.setViewport({ width: 1500, height: 1000 });
})();
