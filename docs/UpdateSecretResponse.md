
# UpdateSecretResponse

Response body for PUT /secrets/{name}

## Properties

Name | Type
------------ | -------------
`name` | string
`updatedAt` | Date

## Example

```typescript
import type { UpdateSecretResponse } from '@hotdata/sdk'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "updatedAt": null,
} satisfies UpdateSecretResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateSecretResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


