
# IndexInfoResponse

Result payload for a `create_index` job, and response for index endpoints.

## Properties

Name | Type
------------ | -------------
`columns` | Array&lt;string&gt;
`createdAt` | Date
`indexName` | string
`indexType` | string
`metric` | string
`status` | [IndexStatus](IndexStatus.md)
`updatedAt` | Date

## Example

```typescript
import type { IndexInfoResponse } from '@hotdata/sdk'

// TODO: Update the object below with actual values
const example = {
  "columns": null,
  "createdAt": null,
  "indexName": null,
  "indexType": null,
  "metric": null,
  "status": null,
  "updatedAt": null,
} satisfies IndexInfoResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as IndexInfoResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


