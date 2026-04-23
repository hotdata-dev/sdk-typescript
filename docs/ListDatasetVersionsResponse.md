
# ListDatasetVersionsResponse

Response body for GET /v1/datasets/{id}/versions

## Properties

Name | Type
------------ | -------------
`count` | number
`datasetId` | string
`hasMore` | boolean
`limit` | number
`offset` | number
`versions` | [Array&lt;DatasetVersionSummary&gt;](DatasetVersionSummary.md)

## Example

```typescript
import type { ListDatasetVersionsResponse } from '@hotdata/sdk'

// TODO: Update the object below with actual values
const example = {
  "count": null,
  "datasetId": null,
  "hasMore": null,
  "limit": null,
  "offset": null,
  "versions": null,
} satisfies ListDatasetVersionsResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ListDatasetVersionsResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


