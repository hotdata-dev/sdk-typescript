
# GetConnectionResponse

Response body for GET /connections/{connection_id}

## Properties

Name | Type
------------ | -------------
`id` | string
`name` | string
`sourceType` | string
`syncedTableCount` | number
`tableCount` | number

## Example

```typescript
import type { GetConnectionResponse } from '@hotdata/sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "sourceType": null,
  "syncedTableCount": null,
  "tableCount": null,
} satisfies GetConnectionResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetConnectionResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


