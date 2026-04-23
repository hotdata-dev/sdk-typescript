
# RefreshRequest

Request body for POST /refresh

## Properties

Name | Type
------------ | -------------
`async` | boolean
`connectionId` | string
`data` | boolean
`datasetId` | string
`includeUncached` | boolean
`schemaName` | string
`tableName` | string

## Example

```typescript
import type { RefreshRequest } from '@hotdata/sdk'

// TODO: Update the object below with actual values
const example = {
  "async": null,
  "connectionId": null,
  "data": null,
  "datasetId": null,
  "includeUncached": null,
  "schemaName": null,
  "tableName": null,
} satisfies RefreshRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RefreshRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


