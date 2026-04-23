
# ConnectionSchemaError

Error details for a failed connection schema refresh

## Properties

Name | Type
------------ | -------------
`connectionId` | string
`error` | string

## Example

```typescript
import type { ConnectionSchemaError } from '@hotdata/sdk'

// TODO: Update the object below with actual values
const example = {
  "connectionId": null,
  "error": null,
} satisfies ConnectionSchemaError

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ConnectionSchemaError
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


