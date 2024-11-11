import "/style.css";
import rocketLogo from '/rocket.png';

// Import the SDK
import { DiscordSDK } from "@discord/embedded-app-sdk";
const DISCORD_CLIENT_ID = `1303887717247090758`

// Instantiate the SDK
const discordSdk = new DiscordSDK(DISCORD_CLIENT_ID);

setupDiscordSdk().then(() => {
  console.log("Discord SDK is ready");
});

async function setupDiscordSdk() {
  await discordSdk.ready();
}

document.querySelector('#app').innerHTML = `
  <div>
    <img src="${rocketLogo}" class="logo" alt="Discord" />
    <h1>Hello, World!</h1>
  </div>
`;
