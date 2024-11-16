import {discordSdk} from './setupDiscord.ts'

async function fetchVoiceChannelName() {
  let activityChannelName = 'Unknown';
  
  // Requesting the channel in GDMs (when the guild ID is null) requires
  // the dm_channels.read scope which requires Discord approval.
  if (discordSdk.channelId != null && discordSdk.guildId != null) {
    // Over RPC collect info about the channel
    const channel = await discordSdk.commands.getChannel({channel_id: discordSdk.channelId});
    if (channel.name != null) {
      activityChannelName = channel.name;
    }
  }
  return activityChannelName
}
if (import.meta.env.DEV){
var activityChannelName: any = `(PlaceHolder - ChannelName)`
}
else {
var activityChannelName: any = await fetchVoiceChannelName()
}

export { activityChannelName }