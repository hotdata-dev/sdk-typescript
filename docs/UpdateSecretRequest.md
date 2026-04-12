
# UpdateSecretRequest

Request body for PUT /secrets/{name}

## Properties

Name | Type
------------ | -------------
`value` | string

## Example

```typescript
import type { UpdateSecretRequest } from '@hotdata/sdk'

// TODO: Update the object below with actual values
const example = {
  "value": null,
} satisfies UpdateSecretRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateSecretRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


