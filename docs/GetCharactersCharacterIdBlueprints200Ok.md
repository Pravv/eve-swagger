# EveSwaggerInterface.GetCharactersCharacterIdBlueprints200Ok

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**itemId** | **Number** | Unique ID for this item. The ID of an item is stable if that item is not repackaged, stacked, detached from a stack, assembled, or otherwise altered. If an item is changed in one of these ways, then the ID will also change (see notes below). | 
**locationFlag** | **String** | Indicates something about this item&#39;s storage location. The flag is used to differentiate between hangar divisions, drone bay, fitting location, and similar. | 
**locationId** | **Number** | References a solar system, station or itemID if this blueprint is located within a container. If an itemID the Character - AssetList API must be queried to find the container using the itemID, from which the correct location of the Blueprint can be derived. | 
**materialEfficiency** | **Number** | Material Efficiency Level of the blueprint, can be any integer between 0 and 10. | 
**quantity** | **Number** | Typically will be -1 or -2 designating a singleton item, where -1 is an original and -2 is a copy. It can be a positive integer if it is a stack of blueprint originals fresh from the market (no activities performed on them yet). | 
**runs** | **Number** | Number of runs remaining if the blueprint is a copy, -1 if it is an original. | 
**timeEfficiency** | **Number** | Time Efficiency Level of the blueprint, can be any even integer between 0 and 20. | 
**typeId** | **Number** | type_id integer | 


<a name="LocationFlagEnum"></a>
## Enum: LocationFlagEnum


* `AutoFit` (value: `"AutoFit"`)

* `Cargo` (value: `"Cargo"`)

* `CorpseBay` (value: `"CorpseBay"`)

* `DroneBay` (value: `"DroneBay"`)

* `FleetHangar` (value: `"FleetHangar"`)

* `Deliveries` (value: `"Deliveries"`)

* `HiddenModifiers` (value: `"HiddenModifiers"`)

* `Hangar` (value: `"Hangar"`)

* `HangarAll` (value: `"HangarAll"`)

* `LoSlot0` (value: `"LoSlot0"`)

* `LoSlot1` (value: `"LoSlot1"`)

* `LoSlot2` (value: `"LoSlot2"`)

* `LoSlot3` (value: `"LoSlot3"`)

* `LoSlot4` (value: `"LoSlot4"`)

* `LoSlot5` (value: `"LoSlot5"`)

* `LoSlot6` (value: `"LoSlot6"`)

* `LoSlot7` (value: `"LoSlot7"`)

* `MedSlot0` (value: `"MedSlot0"`)

* `MedSlot1` (value: `"MedSlot1"`)

* `MedSlot2` (value: `"MedSlot2"`)

* `MedSlot3` (value: `"MedSlot3"`)

* `MedSlot4` (value: `"MedSlot4"`)

* `MedSlot5` (value: `"MedSlot5"`)

* `MedSlot6` (value: `"MedSlot6"`)

* `MedSlot7` (value: `"MedSlot7"`)

* `HiSlot0` (value: `"HiSlot0"`)

* `HiSlot1` (value: `"HiSlot1"`)

* `HiSlot2` (value: `"HiSlot2"`)

* `HiSlot3` (value: `"HiSlot3"`)

* `HiSlot4` (value: `"HiSlot4"`)

* `HiSlot5` (value: `"HiSlot5"`)

* `HiSlot6` (value: `"HiSlot6"`)

* `HiSlot7` (value: `"HiSlot7"`)

* `AssetSafety` (value: `"AssetSafety"`)

* `Locked` (value: `"Locked"`)

* `Unlocked` (value: `"Unlocked"`)

* `Implant` (value: `"Implant"`)

* `QuafeBay` (value: `"QuafeBay"`)

* `RigSlot0` (value: `"RigSlot0"`)

* `RigSlot1` (value: `"RigSlot1"`)

* `RigSlot2` (value: `"RigSlot2"`)

* `RigSlot3` (value: `"RigSlot3"`)

* `RigSlot4` (value: `"RigSlot4"`)

* `RigSlot5` (value: `"RigSlot5"`)

* `RigSlot6` (value: `"RigSlot6"`)

* `RigSlot7` (value: `"RigSlot7"`)

* `ShipHangar` (value: `"ShipHangar"`)

* `SpecializedFuelBay` (value: `"SpecializedFuelBay"`)

* `SpecializedOreHold` (value: `"SpecializedOreHold"`)

* `SpecializedGasHold` (value: `"SpecializedGasHold"`)

* `SpecializedMineralHold` (value: `"SpecializedMineralHold"`)

* `SpecializedSalvageHold` (value: `"SpecializedSalvageHold"`)

* `SpecializedShipHold` (value: `"SpecializedShipHold"`)

* `SpecializedSmallShipHold` (value: `"SpecializedSmallShipHold"`)

* `SpecializedMediumShipHold` (value: `"SpecializedMediumShipHold"`)

* `SpecializedLargeShipHold` (value: `"SpecializedLargeShipHold"`)

* `SpecializedIndustrialShipHold` (value: `"SpecializedIndustrialShipHold"`)

* `SpecializedAmmoHold` (value: `"SpecializedAmmoHold"`)

* `SpecializedCommandCenterHold` (value: `"SpecializedCommandCenterHold"`)

* `SpecializedPlanetaryCommoditiesHold` (value: `"SpecializedPlanetaryCommoditiesHold"`)

* `SpecializedMaterialBay` (value: `"SpecializedMaterialBay"`)

* `SubSystemSlot0` (value: `"SubSystemSlot0"`)

* `SubSystemSlot1` (value: `"SubSystemSlot1"`)

* `SubSystemSlot2` (value: `"SubSystemSlot2"`)

* `SubSystemSlot3` (value: `"SubSystemSlot3"`)

* `SubSystemSlot4` (value: `"SubSystemSlot4"`)

* `SubSystemSlot5` (value: `"SubSystemSlot5"`)

* `SubSystemSlot6` (value: `"SubSystemSlot6"`)

* `SubSystemSlot7` (value: `"SubSystemSlot7"`)

* `FighterBay` (value: `"FighterBay"`)

* `FighterTube0` (value: `"FighterTube0"`)

* `FighterTube1` (value: `"FighterTube1"`)

* `FighterTube2` (value: `"FighterTube2"`)

* `FighterTube3` (value: `"FighterTube3"`)

* `FighterTube4` (value: `"FighterTube4"`)

* `Module` (value: `"Module"`)




