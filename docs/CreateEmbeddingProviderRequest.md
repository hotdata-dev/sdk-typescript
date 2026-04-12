
# CreateEmbeddingProviderRequest

Request body for POST /embedding-providers

## Properties

Name | Type
------------ | -------------
`apiKey` | string
`config` | any
`name` | string
`providerType` | string
`secretName` | string

## Example

```typescript
import type { CreateEmbeddingProviderRequest } from '@hotdata/sdk'

// TODO: Update the object below with actual values
const example = {
  "apiKey": null,
  "config": null,
  "name": null,
  "providerType": null,
  "secretName": null,
} satisfies CreateEmbeddingProviderRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateEmbeddingProviderRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


