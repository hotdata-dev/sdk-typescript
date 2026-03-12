
# ColumnProfileInfo

Statistics for a single column.

## Properties

Name | Type
------------ | -------------
`cardinality` | number
`dataType` | string
`name` | string
`nullCount` | number
`nullPercentage` | number
`profile` | [ColumnProfileDetail](ColumnProfileDetail.md)

## Example

```typescript
import type { ColumnProfileInfo } from '@hotdata/sdk'

// TODO: Update the object below with actual values
const example = {
  "cardinality": null,
  "dataType": null,
  "name": null,
  "nullCount": null,
  "nullPercentage": null,
  "profile": null,
} satisfies ColumnProfileInfo

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ColumnProfileInfo
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


