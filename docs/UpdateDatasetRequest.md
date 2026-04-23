
# UpdateDatasetRequest

Request body for PUT /v1/datasets/{id}

## Properties

Name | Type
------------ | -------------
`label` | string
`pinnedVersion` | number
`tableName` | string

## Example

```typescript
import type { UpdateDatasetRequest } from '@hotdata/sdk'

// TODO: Update the object below with actual values
const example = {
  "label": null,
  "pinnedVersion": null,
  "tableName": null,
} satisfies UpdateDatasetRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateDatasetRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


