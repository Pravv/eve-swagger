# EveSwaggerInterface.GetCorporationsCorporationIdStructures200Ok

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**corporationId** | **Number** | ID of the corporation that owns the structure | 
**currentVul** | [**[GetCorporationsCorporationIdStructuresCurrentVul]**](GetCorporationsCorporationIdStructuresCurrentVul.md) | This week&#39;s vulnerability windows, Monday is day 0 | 
**fuelExpires** | **Date** | Date on which the structure will run out of fuel | [optional] 
**nextVul** | [**[GetCorporationsCorporationIdStructuresNextVul]**](GetCorporationsCorporationIdStructuresNextVul.md) | Next week&#39;s vulnerability windows, Monday is day 0 | 
**profileId** | **Number** | The id of the ACL profile for this citadel | 
**services** | [**[GetCorporationsCorporationIdStructuresService]**](GetCorporationsCorporationIdStructuresService.md) | Contains a list of service upgrades, and their state | [optional] 
**stateTimerEnd** | **Date** | Date at which the structure will move to it&#39;s next state | [optional] 
**stateTimerStart** | **Date** | Date at which the structure entered it&#39;s current state | [optional] 
**structureId** | **Number** | The Item ID of the structure | 
**systemId** | **Number** | The solar system the structure is in | 
**typeId** | **Number** | The type id of the structure | 
**unanchorsAt** | **Date** | Date at which the structure will unanchor | [optional] 


