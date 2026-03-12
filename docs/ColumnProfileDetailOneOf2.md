
# ColumnProfileDetailOneOf2

High-cardinality numeric column (>200 distinct values).

## Properties

Name | Type
------------ | -------------
`max` | string
`mean` | number
`min` | string
`type` | string

## Example

```typescript
import type { ColumnProfileDetailOneOf2 } from '@hotdata/sdk'

// TODO: Update the object below with actual values
const example = {
  "max": null,
  "mean": null,
  "min": null,
  "type": null,
} satisfies ColumnProfileDetailOneOf2

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ColumnProfileDetailOneOf2
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


