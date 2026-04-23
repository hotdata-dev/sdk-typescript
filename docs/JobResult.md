
# JobResult

Job-specific result payload. The shape depends on the job type. Null while the job is pending or running.

## Properties

Name | Type
------------ | -------------
`connectionId` | string
`durationMs` | number
`rowsSynced` | number
`schemaName` | string
`tableName` | string
`warnings` | [Array&lt;RefreshWarning&gt;](RefreshWarning.md)
`errors` | [Array&lt;TableRefreshError&gt;](TableRefreshError.md)
`tablesFailed` | number
`tablesRefreshed` | number
`totalRows` | number
`columns` | Array&lt;string&gt;
`createdAt` | Date
`indexName` | string
`indexType` | string
`metric` | string
`status` | [IndexStatus](IndexStatus.md)
`updatedAt` | Date

## Example

```typescript
import type { JobResult } from '@hotdata/sdk'

// TODO: Update the object below with actual values
const example = {
  "connectionId": null,
  "durationMs": null,
  "rowsSynced": null,
  "schemaName": null,
  "tableName": null,
  "warnings": null,
  "errors": null,
  "tablesFailed": null,
  "tablesRefreshed": null,
  "totalRows": null,
  "columns": null,
  "createdAt": null,
  "indexName": null,
  "indexType": null,
  "metric": null,
  "status": null,
  "updatedAt": null,
} satisfies JobResult

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as JobResult
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


