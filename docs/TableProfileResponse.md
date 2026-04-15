
# TableProfileResponse

Column-level statistics for a synced table. Profiles are computed at sync time and include per-column cardinality, null counts, and type-specific details.

## Properties

Name | Type
------------ | -------------
`columns` | [Array&lt;ColumnProfileInfo&gt;](ColumnProfileInfo.md)
`connection` | string
`rowCount` | number
`schema` | string
`syncedAt` | string
`table` | string

## Example

```typescript
import type { TableProfileResponse } from '@hotdata/sdk'

// TODO: Update the object below with actual values
const example = {
  "columns": null,
  "connection": null,
  "rowCount": null,
  "schema": null,
  "syncedAt": null,
  "table": null,
} satisfies TableProfileResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TableProfileResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


