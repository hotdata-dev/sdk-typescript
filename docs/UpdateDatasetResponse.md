
# UpdateDatasetResponse

Response body for PUT /v1/datasets/{id}

## Properties

Name | Type
------------ | -------------
`id` | string
`label` | string
`tableName` | string
`updatedAt` | Date

## Example

```typescript
import type { UpdateDatasetResponse } from '@hotdata/sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "label": null,
  "tableName": null,
  "updatedAt": null,
} satisfies UpdateDatasetResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateDatasetResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


