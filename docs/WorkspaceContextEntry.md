
# WorkspaceContextEntry

One context entry returned by the API.

## Properties

Name | Type
------------ | -------------
`content` | string
`name` | string
`updatedAt` | Date

## Example

```typescript
import type { WorkspaceContextEntry } from '@hotdata/sdk'

// TODO: Update the object below with actual values
const example = {
  "content": null,
  "name": null,
  "updatedAt": null,
} satisfies WorkspaceContextEntry

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WorkspaceContextEntry
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


