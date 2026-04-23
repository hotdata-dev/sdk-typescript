
# ListEmbeddingProvidersResponse

Response body for GET /embedding-providers

## Properties

Name | Type
------------ | -------------
`embeddingProviders` | [Array&lt;EmbeddingProviderResponse&gt;](EmbeddingProviderResponse.md)

## Example

```typescript
import type { ListEmbeddingProvidersResponse } from '@hotdata/sdk'

// TODO: Update the object below with actual values
const example = {
  "embeddingProviders": null,
} satisfies ListEmbeddingProvidersResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ListEmbeddingProvidersResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


