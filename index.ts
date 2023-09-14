import puppeteer, { Browser } from "puppeteer";
import dotenv from "dotenv";

dotenv.config();

// PROXYのID/Pass
const PROXY_SERVER: string | undefined = process.env.PROXY_SERVER;
const USERNAME: string | undefined = process.env.PROXY_USERNAME;
const PASSWORD: string | undefined = process.env.PROXY_PASSWORD;
const BASIC_AUTH_ID: string | undefined = process.env.BASIC_AUTH_ID;
const BASIC_AUTH_PASSWD: string | undefined = process.env.BASIC_AUTH_PASSWD;
// アクセスするサイトのドメイン以降を記載
const BASIC_AUTH_URL: string | undefined = "dev.e-life.shopping/";

let browser: Browser | undefined;

async function start(): Promise<void> {
  const argsList: string[] = ["--no-sandbox", "--disable-setuid-sandbox"];

  if (PROXY_SERVER) argsList.push(PROXY_SERVER);

  browser = await puppeteer.launch({
    headless: false, // ヘッドレスをオフに
    args: argsList,
    ignoreHTTPSErrors: true, // SSL/TLS証明書の検証を無効にする
  });
  const page = await browser.newPage();

  if (USERNAME && PASSWORD) {
    await page.authenticate({
      username: USERNAME,
      password: PASSWORD,
    });
  }

  await page.setViewport({ width: 1500, height: 1000 });

  // Basic認証の情報をURLに含めてサイトにアクセス
  if (BASIC_AUTH_ID && BASIC_AUTH_PASSWD) {
    const urlWithAuth = `http://${BASIC_AUTH_ID}:${BASIC_AUTH_PASSWD}@${BASIC_AUTH_URL}`; // ここでのexample.comは実際のサイトのURLに置き換えてください
    await page.goto(urlWithAuth);
  } else {
    await page.goto(`http://${BASIC_AUTH_URL}`); // ここでのexample.comは実際のサイトのURLに置き換えてください
  }
}

async function cleanupAndExit(): Promise<void> {
  console.log("Cleaning up and exiting...");
  if (browser) await browser.close();
  process.exit(0);
}

// SIGINTはCtrl+Cによる終了を示すシグナルです
process.on("SIGINT", cleanupAndExit);
// SIGTERMは外部からの終了要求を示すシグナルです
process.on("SIGTERM", cleanupAndExit);

start();
