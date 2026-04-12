
# CreateIndexRequest

Request body for POST .../indexes

## Properties

Name | Type
------------ | -------------
`async` | boolean
`columns` | Array&lt;string&gt;
`description` | string
`dimensions` | number
`embeddingProviderId` | string
`indexName` | string
`indexType` | string
`metric` | string
`outputColumn` | string

## Example

```typescript
import type { CreateIndexRequest } from '@hotdata/sdk'

// TODO: Update the object below with actual values
const example = {
  "async": null,
  "columns": null,
  "description": null,
  "dimensions": null,
  "embeddingProviderId": null,
  "indexName": null,
  "indexType": null,
  "metric": null,
  "outputColumn": null,
} satisfies CreateIndexRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateIndexRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


