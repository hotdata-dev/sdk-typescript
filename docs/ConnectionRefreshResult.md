
# ConnectionRefreshResult

Response for connection-wide data refresh

## Properties

Name | Type
------------ | -------------
`connectionId` | string
`durationMs` | number
`errors` | [Array&lt;TableRefreshError&gt;](TableRefreshError.md)
`tablesFailed` | number
`tablesRefreshed` | number
`totalRows` | number
`warnings` | [Array&lt;RefreshWarning&gt;](RefreshWarning.md)

## Example

```typescript
import type { ConnectionRefreshResult } from '@hotdata/sdk'

// TODO: Update the object below with actual values
const example = {
  "connectionId": null,
  "durationMs": null,
  "errors": null,
  "tablesFailed": null,
  "tablesRefreshed": null,
  "totalRows": null,
  "warnings": null,
} satisfies ConnectionRefreshResult

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ConnectionRefreshResult
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


