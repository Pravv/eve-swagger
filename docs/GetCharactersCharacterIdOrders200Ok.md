# EveSwaggerInterface.GetCharactersCharacterIdOrders200Ok

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountId** | **Number** | Wallet division for the buyer or seller of this order. Always 1000 for characters. Currently 1000 through 1006 for corporations | 
**duration** | **Number** | Numer of days for which order is valid (starting from the issued date). An order expires at time issued + duration | 
**escrow** | **Number** | For buy orders, the amount of ISK in escrow | 
**isBuyOrder** | **Boolean** | True for a bid (buy) order. False for an offer (sell) order | 
**isCorp** | **Boolean** | is_corp boolean | 
**issued** | **Date** | Date and time when this order was issued | 
**locationId** | **Number** | ID of the location where order was placed | 
**minVolume** | **Number** | For bids (buy orders), the minimum quantity that will be accepted in a matching offer (sell order) | 
**orderId** | **Number** | Unique order ID | 
**price** | **Number** | Cost per unit for this order | 
**range** | **String** | Valid order range, numbers are ranges in jumps | 
**regionId** | **Number** | ID of the region where order was placed | 
**state** | **String** | Current order state | 
**typeId** | **Number** | The type ID of the item transacted in this order | 
**volumeRemain** | **Number** | Quantity of items still required or offered | 
**volumeTotal** | **Number** | Quantity of items required or offered at time order was placed | 


<a name="RangeEnum"></a>
## Enum: RangeEnum


* `station` (value: `"station"`)

* `region` (value: `"region"`)

* `solarsystem` (value: `"solarsystem"`)

* `1` (value: `"1"`)

* `2` (value: `"2"`)

* `3` (value: `"3"`)

* `4` (value: `"4"`)

* `5` (value: `"5"`)

* `10` (value: `"10"`)

* `20` (value: `"20"`)

* `30` (value: `"30"`)

* `40` (value: `"40"`)




<a name="StateEnum"></a>
## Enum: StateEnum


* `open` (value: `"open"`)

* `closed` (value: `"closed"`)

* `expired` (value: `"expired"`)

* `cancelled` (value: `"cancelled"`)

* `pending` (value: `"pending"`)

* `character_deleted` (value: `"character_deleted"`)




