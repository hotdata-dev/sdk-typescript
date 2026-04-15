
# CreateDatasetRequest

Request body for POST /v1/datasets

## Properties

Name | Type
------------ | -------------
`label` | string
`source` | [DatasetSource](DatasetSource.md)
`tableName` | string

## Example

```typescript
import type { CreateDatasetRequest } from '@hotdata/sdk'

// TODO: Update the object below with actual values
const example = {
  "label": null,
  "source": null,
  "tableName": null,
} satisfies CreateDatasetRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateDatasetRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


