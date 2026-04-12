
# TextProfileDetail

High-cardinality text column (>200 distinct values).

## Properties

Name | Type
------------ | -------------
`avgLength` | number
`maxLength` | number
`minLength` | number

## Example

```typescript
import type { TextProfileDetail } from '@hotdata/sdk'

// TODO: Update the object below with actual values
const example = {
  "avgLength": null,
  "maxLength": null,
  "minLength": null,
} satisfies TextProfileDetail

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TextProfileDetail
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


