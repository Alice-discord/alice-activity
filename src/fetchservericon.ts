import {discordSdk, auth} from './setupDiscord.ts'

async function fetchGuildAvatar() {
    // 1. From the HTTP API fetch a list of all of the user's guilds
    const guilds = await fetch(`https://discord.com/api/v10/users/@me/guilds`, {
      headers: {
        // NOTE: we're using the access_token provided by the "authenticate" command
        Authorization: `Bearer ${auth.access_token}`,
        'Content-Type': 'application/json',
      },
    }).then((response) => response.json());
  
    // 2. Find the current guild's info, including it's "icon"
    const currentGuild = guilds.find((g) => g.id === discordSdk.guildId);
  
    // 3. Append to the UI an img tag with the related information
    if (currentGuild != null) {
        return `https://cdn.discordapp.com/icons/${currentGuild.id}/${currentGuild.icon}.webp?size=128`
    } else {
        return `https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg`
    }
  }

if (import.meta.env.DEV){
var Guildicon: any = `https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg`
}
else {
var Guildicon: any = `${await fetchGuildAvatar()}`
}

export {Guildicon}