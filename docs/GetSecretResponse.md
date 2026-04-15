
# GetSecretResponse

Response body for GET /secrets/{name}

## Properties

Name | Type
------------ | -------------
`createdAt` | Date
`name` | string
`updatedAt` | Date

## Example

```typescript
import type { GetSecretResponse } from '@hotdata/sdk'

// TODO: Update the object below with actual values
const example = {
  "createdAt": null,
  "name": null,
  "updatedAt": null,
} satisfies GetSecretResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetSecretResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


