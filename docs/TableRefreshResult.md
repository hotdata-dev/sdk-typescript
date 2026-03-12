
# TableRefreshResult

Response for single table data refresh

## Properties

Name | Type
------------ | -------------
`connectionId` | string
`durationMs` | number
`rowsSynced` | number
`schemaName` | string
`tableName` | string
`warnings` | [Array&lt;RefreshWarning&gt;](RefreshWarning.md)

## Example

```typescript
import type { TableRefreshResult } from '@hotdata/sdk'

// TODO: Update the object below with actual values
const example = {
  "connectionId": null,
  "durationMs": null,
  "rowsSynced": null,
  "schemaName": null,
  "tableName": null,
  "warnings": null,
} satisfies TableRefreshResult

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TableRefreshResult
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


