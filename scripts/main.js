import "../styles/style.scss";
import rocket from "../images/rocket.png";
import svglogo from "../svg/svg-2.svg"
import { DiscordSDK } from "@discord/embedded-app-sdk";
// Define varibles (For the life of me i cant get .env varibles working)
const DISCORD_CLIENT_ID = `1303887717247090758`

// Will eventually store the authenticated user's access_token
let auth;

const discordSdk = new DiscordSDK(DISCORD_CLIENT_ID);

setupDiscordSdk().then(() => {
  console.log("Discord SDK is authenticated");

  // We can now make API calls within the scopes we requested in setupDiscordSDK()
  // Note: the access_token returned is a sensitive secret and should be treated as such
});

async function setupDiscordSdk() {
  await discordSdk.ready();
  console.log("Discord SDK is ready");

  // Authorize with Discord Client
  const { code } = await discordSdk.commands.authorize({
    client_id: DISCORD_CLIENT_ID,
    response_type: "code",
    state: "",
    prompt: "none",
    scope: [
      "identify",
      "guilds",
      "applications.commands"
    ],
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
