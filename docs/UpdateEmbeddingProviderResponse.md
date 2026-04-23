
# UpdateEmbeddingProviderResponse

Response body for PUT /embedding-providers/{id}

## Properties

Name | Type
------------ | -------------
`id` | string
`name` | string
`updatedAt` | Date

## Example

```typescript
import type { UpdateEmbeddingProviderResponse } from '@hotdata/sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "updatedAt": null,
} satisfies UpdateEmbeddingProviderResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateEmbeddingProviderResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


