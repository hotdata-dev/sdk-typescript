
# CreateConnectionResponse

Response body for POST /connections

## Properties

Name | Type
------------ | -------------
`discoveryError` | string
`discoveryStatus` | [DiscoveryStatus](DiscoveryStatus.md)
`id` | string
`name` | string
`sourceType` | string
`tablesDiscovered` | number

## Example

```typescript
import type { CreateConnectionResponse } from '@hotdata/sdk'

// TODO: Update the object below with actual values
const example = {
  "discoveryError": null,
  "discoveryStatus": null,
  "id": null,
  "name": null,
  "sourceType": null,
  "tablesDiscovered": null,
} satisfies CreateConnectionResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateConnectionResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


