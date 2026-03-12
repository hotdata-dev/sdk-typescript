
# RefreshResponse

Unified response type for refresh operations

## Properties

Name | Type
------------ | -------------
`connectionsFailed` | number
`connectionsRefreshed` | number
`errors` | [Array&lt;TableRefreshError&gt;](TableRefreshError.md)
`tablesAdded` | number
`tablesDiscovered` | number
`tablesModified` | number
`connectionId` | string
`durationMs` | number
`rowsSynced` | number
`schemaName` | string
`tableName` | string
`warnings` | [Array&lt;RefreshWarning&gt;](RefreshWarning.md)
`tablesFailed` | number
`tablesRefreshed` | number
`totalRows` | number

## Example

```typescript
import type { RefreshResponse } from '@hotdata/sdk'

// TODO: Update the object below with actual values
const example = {
  "connectionsFailed": null,
  "connectionsRefreshed": null,
  "errors": null,
  "tablesAdded": null,
  "tablesDiscovered": null,
  "tablesModified": null,
  "connectionId": null,
  "durationMs": null,
  "rowsSynced": null,
  "schemaName": null,
  "tableName": null,
  "warnings": null,
  "tablesFailed": null,
  "tablesRefreshed": null,
  "totalRows": null,
} satisfies RefreshResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RefreshResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


