
# EmbeddingProviderResponse

Single embedding provider for API responses

## Properties

Name | Type
------------ | -------------
`config` | any
`createdAt` | Date
`hasSecret` | boolean
`id` | string
`name` | string
`providerType` | string
`source` | string
`updatedAt` | Date

## Example

```typescript
import type { EmbeddingProviderResponse } from '@hotdata/sdk'

// TODO: Update the object below with actual values
const example = {
  "config": null,
  "createdAt": null,
  "hasSecret": null,
  "id": null,
  "name": null,
  "providerType": null,
  "source": null,
  "updatedAt": null,
} satisfies EmbeddingProviderResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EmbeddingProviderResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


