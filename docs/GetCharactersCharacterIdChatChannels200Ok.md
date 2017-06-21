# EveSwaggerInterface.GetCharactersCharacterIdChatChannels200Ok

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed** | [**[GetCharactersCharacterIdChatChannelsAllowed]**](GetCharactersCharacterIdChatChannelsAllowed.md) | allowed array | 
**blocked** | [**[GetCharactersCharacterIdChatChannelsBlocked]**](GetCharactersCharacterIdChatChannelsBlocked.md) | blocked array | 
**channelId** | **Number** | Unique channel ID. Always negative for player-created channels. Permanent (CCP created) channels have a positive ID, but don&#39;t appear in the API | 
**comparisonKey** | **String** | Normalized, unique string used to compare channel names | 
**hasPassword** | **Boolean** | Whether this is a password protected channel | 
**motd** | **String** | Message of the day for this channel | 
**muted** | [**[GetCharactersCharacterIdChatChannelsMuted]**](GetCharactersCharacterIdChatChannelsMuted.md) | muted array | 
**name** | **String** | Displayed name of channel | 
**operators** | [**[GetCharactersCharacterIdChatChannelsOperator]**](GetCharactersCharacterIdChatChannelsOperator.md) | operators array | 
**ownerId** | **Number** | owner_id integer | 


