
# ListSecretsResponse

Response body for GET /secrets

## Properties

Name | Type
------------ | -------------
`secrets` | [Array&lt;SecretMetadataResponse&gt;](SecretMetadataResponse.md)

## Example

```typescript
import type { ListSecretsResponse } from '@hotdata/sdk'

// TODO: Update the object below with actual values
const example = {
  "secrets": null,
} satisfies ListSecretsResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ListSecretsResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


