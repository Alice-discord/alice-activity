import "../styles/style.scss";
import rocket from "../images/rocket.png";
import svglogo from "../svg/svg-2.svg"
import { DiscordSDK } from "@discord/embedded-app-sdk";
// Define varibles (For the life of me i cant get .env varibles working)
const DISCORD_CLIENT_ID = `1303887717247090758`

console.log(typeof import.meta.env.DEV, import.meta.env.DEV)

if (import.meta.env.DEV =! true) {
// Instantiate the SDK
const discordSdk = new DiscordSDK(DISCORD_CLIENT_ID);

async function setupDiscordSdk() {
  await discordSdk.ready();
}

setupDiscordSdk().then(() => {
  console.log("Discord SDK is ready");
});
}

document.querySelector('#app').innerHTML = `
  <div>
    <img src="${rocket}" class="rocket" alt="Discord-Rocket">
    <h1>Hello, World!</h1>
    <p>This is all temporary!!
    <br><img src="${svglogo}" class="svglo" alt="svg">
  </div>
`;
