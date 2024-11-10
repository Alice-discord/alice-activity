// Import the SDK
import { DiscordSDK } from "@discord/embedded-app-sdk";

// Instantiate the SDK
const discordSdk = new DiscordSDK(import.meta.env.VITE_DISCORD_CLIENT_ID);

async function setupDiscordSdk() {
  await discordSdk.ready();
}

setupDiscordSdk().then(() => {
  console.log("Discord SDK is ready");
});

document.querySelector('#app').innerHTML = `
  <div>
    <img src="./rocket.png" class="logo" alt="Discord" />
    <h1>Hello, World!</h1>
  </div>
`;