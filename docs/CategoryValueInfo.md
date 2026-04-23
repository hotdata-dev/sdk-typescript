
# CategoryValueInfo

A distinct value with its frequency count, used in categorical profiles.

## Properties

Name | Type
------------ | -------------
`count` | number
`value` | string

## Example

```typescript
import type { CategoryValueInfo } from '@hotdata/sdk'

// TODO: Update the object below with actual values
const example = {
  "count": null,
  "value": null,
} satisfies CategoryValueInfo

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CategoryValueInfo
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


