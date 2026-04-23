
# CreateEmbeddingProviderResponse

Response body for POST /embedding-providers

## Properties

Name | Type
------------ | -------------
`config` | any
`createdAt` | Date
`id` | string
`name` | string
`providerType` | string

## Example

```typescript
import type { CreateEmbeddingProviderResponse } from '@hotdata/sdk'

// TODO: Update the object below with actual values
const example = {
  "config": null,
  "createdAt": null,
  "id": null,
  "name": null,
  "providerType": null,
} satisfies CreateEmbeddingProviderResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateEmbeddingProviderResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


