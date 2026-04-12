
# WorkspaceDetail


## Properties

Name | Type
------------ | -------------
`publicId` | string
`name` | string
`provisionStatus` | string
`namespace` | string

## Example

```typescript
import type { WorkspaceDetail } from '@hotdata/sdk'

// TODO: Update the object below with actual values
const example = {
  "publicId": ws_abc123,
  "name": production-analytics,
  "provisionStatus": pending,
  "namespace": workspace-ws_abc123,
} satisfies WorkspaceDetail

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WorkspaceDetail
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


