
# ConnectionHealthResponse

Response body for GET /connections/{connection_id}/health

## Properties

Name | Type
------------ | -------------
`connectionId` | string
`error` | string
`healthy` | boolean
`latencyMs` | number

## Example

```typescript
import type { ConnectionHealthResponse } from '@hotdata/sdk'

// TODO: Update the object below with actual values
const example = {
  "connectionId": null,
  "error": null,
  "healthy": null,
  "latencyMs": null,
} satisfies ConnectionHealthResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ConnectionHealthResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


