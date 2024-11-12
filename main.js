import "/style.css";
import { DiscordSDK } from "@discord/embedded-app-sdk";
// Define varibles (For the life of me i cant get .env varibles working)
const devmode = true
const DISCORD_CLIENT_ID = `1303887717247090758`

if (!devmode) {

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
    <h1>Hello, World!</h1>
  </div>
`;
