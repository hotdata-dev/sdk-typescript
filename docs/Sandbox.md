
# Sandbox


## Properties

Name | Type
------------ | -------------
`publicId` | string
`name` | string
`markdown` | string
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { Sandbox } from '@hotdata/sdk'

// TODO: Update the object below with actual values
const example = {
  "publicId": sb_abc123,
  "name": null,
  "markdown": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies Sandbox

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Sandbox
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


