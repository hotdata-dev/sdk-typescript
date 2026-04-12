
# NumericProfileDetail

High-cardinality numeric column (>200 distinct values).

## Properties

Name | Type
------------ | -------------
`max` | string
`mean` | number
`min` | string

## Example

```typescript
import type { NumericProfileDetail } from '@hotdata/sdk'

// TODO: Update the object below with actual values
const example = {
  "max": null,
  "mean": null,
  "min": null,
} satisfies NumericProfileDetail

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as NumericProfileDetail
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


