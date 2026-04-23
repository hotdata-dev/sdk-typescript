
# ColumnTypeSpec

Detailed column type specification with optional properties.

## Properties

Name | Type
------------ | -------------
`geometryType` | string
`precision` | number
`scale` | number
`srid` | number
`type` | string

## Example

```typescript
import type { ColumnTypeSpec } from '@hotdata/sdk'

// TODO: Update the object below with actual values
const example = {
  "geometryType": null,
  "precision": null,
  "scale": null,
  "srid": null,
  "type": null,
} satisfies ColumnTypeSpec

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ColumnTypeSpec
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


