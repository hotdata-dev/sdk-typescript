
# ListSandboxesResponse


## Properties

Name | Type
------------ | -------------
`ok` | boolean
`sandboxes` | [Array&lt;Sandbox&gt;](Sandbox.md)

## Example

```typescript
import type { ListSandboxesResponse } from '@hotdata/sdk'

// TODO: Update the object below with actual values
const example = {
  "ok": true,
  "sandboxes": null,
} satisfies ListSandboxesResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ListSandboxesResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


