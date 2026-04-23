
# ResultInfo

Summary of a persisted query result for listing

## Properties

Name | Type
------------ | -------------
`createdAt` | Date
`errorMessage` | string
`id` | string
`status` | string

## Example

```typescript
import type { ResultInfo } from '@hotdata/sdk'

// TODO: Update the object below with actual values
const example = {
  "createdAt": null,
  "errorMessage": null,
  "id": null,
  "status": null,
} satisfies ResultInfo

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ResultInfo
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


