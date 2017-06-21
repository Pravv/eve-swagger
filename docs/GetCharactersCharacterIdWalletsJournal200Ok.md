# EveSwaggerInterface.GetCharactersCharacterIdWalletsJournal200Ok

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **Number** | Transaction amount. Positive when value transferred to the first party. Negative otherwise | [optional] 
**argumentName** | **String** | argument_name string | [optional] 
**argumentValue** | **Number** | argument_value integer | [optional] 
**balance** | **Number** | Wallet balance after transaction occurred | [optional] 
**_date** | **Date** | Date and time of transaction | 
**firstPartyId** | **Number** | first_party_id integer | [optional] 
**firstPartyType** | **String** | first_party_type string | [optional] 
**reason** | **String** | reason string | [optional] 
**refId** | **Number** | Unique journal reference ID | 
**refTypeId** | **Number** | Transaction type | 
**secondPartyId** | **Number** | second_party_id integer | [optional] 
**secondPartyType** | **String** | second_party_type string | [optional] 
**taxAmount** | **Number** | Tax amount received for tax related transactions | [optional] 
**taxRecieverId** | **Number** | For tax related transactions, gives the corporation ID of the entity receiving the tax | [optional] 


<a name="FirstPartyTypeEnum"></a>
## Enum: FirstPartyTypeEnum


* `character` (value: `"character"`)

* `corporation` (value: `"corporation"`)

* `alliance` (value: `"alliance"`)

* `faction` (value: `"faction"`)




<a name="SecondPartyTypeEnum"></a>
## Enum: SecondPartyTypeEnum


* `character` (value: `"character"`)

* `corporation` (value: `"corporation"`)

* `alliance` (value: `"alliance"`)

* `faction` (value: `"faction"`)




