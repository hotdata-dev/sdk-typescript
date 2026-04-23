
# CreateConnectionRequest

Request body for POST /connections

## Properties

Name | Type
------------ | -------------
`config` | { [key: string]: any; }
`name` | string
`secretId` | string
`secretName` | string
`skipDiscovery` | boolean
`sourceType` | string

## Example

```typescript
import type { CreateConnectionRequest } from '@hotdata/sdk'

// TODO: Update the object below with actual values
const example = {
  "config": null,
  "name": null,
  "secretId": null,
  "secretName": null,
  "skipDiscovery": null,
  "sourceType": null,
} satisfies CreateConnectionRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateConnectionRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


