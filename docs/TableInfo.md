
# TableInfo

Single table metadata

## Properties

Name | Type
------------ | -------------
`columns` | [Array&lt;ColumnInfo&gt;](ColumnInfo.md)
`connection` | string
`lastSync` | string
`schema` | string
`synced` | boolean
`table` | string

## Example

```typescript
import type { TableInfo } from '@hotdata/sdk'

// TODO: Update the object below with actual values
const example = {
  "columns": null,
  "connection": null,
  "lastSync": null,
  "schema": null,
  "synced": null,
  "table": null,
} satisfies TableInfo

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TableInfo
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


