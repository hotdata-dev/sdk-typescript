
# ListWorkspaceContextsResponse

Response body for GET `/v1/context`.

## Properties

Name | Type
------------ | -------------
`contexts` | [Array&lt;WorkspaceContextEntry&gt;](WorkspaceContextEntry.md)

## Example

```typescript
import type { ListWorkspaceContextsResponse } from '@hotdata/sdk'

// TODO: Update the object below with actual values
const example = {
  "contexts": null,
} satisfies ListWorkspaceContextsResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ListWorkspaceContextsResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


