import "../styles/style.scss";
import rocket from "../images/rocket.png";
import svglogo from "../svg/svg-2.svg"
import { DiscordSDK } from "@discord/embedded-app-sdk";
// Define varibles (For the life of me i cant get .env varibles working)
const DISCORD_CLIENT_ID = `1303887717247090758`

if (!import.meta.env.DEV) {
  let auth;

  let serverurl = new URL(`http://${DISCORD_CLIENT_ID}.discordsays.com/.proxy/server/alicediscord`);

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
  
    // Retrieve an access_token from your activity's server
    // Note: We need to prefix our backend `/api/token` route with `/.proxy` to stay compliant with the CSP.
    // Read more about constructing a full URL and using external resources at
    // https://discord.com/developers/docs/activities/development-guides#construct-a-full-url
    const response = await fetch(`${serverurl}/api/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        code,
      }),
    });
    const { access_token } = await response.json();
  
    // Authenticate with Discord client (using the access_token)
    auth = await discordSdk.commands.authenticate({
      access_token,
    });
  
    if (auth == null) {
      throw new Error("Authenticate command failed");
    }
  }
}

document.querySelector('#app').innerHTML = `
  <div>
    <img src="${rocket}" class="rocket" alt="Discord-Rocket">
    <h1>Hello, World!</h1>
    <p>This is all temporary!!
    <br><img src="${svglogo}" class="svglo" alt="svg">
  </div>
`;
