
# SandboxResponse


## Properties

Name | Type
------------ | -------------
`ok` | boolean
`sandbox` | [Sandbox](Sandbox.md)

## Example

```typescript
import type { SandboxResponse } from '@hotdata/sdk'

// TODO: Update the object below with actual values
const example = {
  "ok": true,
  "sandbox": null,
} satisfies SandboxResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SandboxResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


