
# ColumnInfo

Column metadata for API responses

## Properties

Name | Type
------------ | -------------
`dataType` | string
`name` | string
`nullable` | boolean

## Example

```typescript
import type { ColumnInfo } from '@hotdata/sdk'

// TODO: Update the object below with actual values
const example = {
  "dataType": null,
  "name": null,
  "nullable": null,
} satisfies ColumnInfo

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ColumnInfo
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


