import { DiscordSDK } from "@discord/embedded-app-sdk";

let serverurl = `http://${import.meta.env.VITE_DISCORD_CLIENT_ID}.discordsays.com/.proxy/server/alicediscord`

let auth: any;

if (!import.meta.env.DEV){
var discordSdk = new DiscordSDK(import.meta.env.VITE_DISCORD_CLIENT_ID);
}

async function setupDiscordSdk() {
  await discordSdk.ready();

// Authorize with Discord Client
const { code } = await discordSdk.commands.authorize({
  client_id: import.meta.env.VITE_DISCORD_CLIENT_ID,
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

if (!import.meta.env.DEV){
  setupDiscordSdk().then(() => {
    console.log('Discord sdk ready');
    });
  var setupSdkComplete = true
};

export {discordSdk, auth, setupSdkComplete}