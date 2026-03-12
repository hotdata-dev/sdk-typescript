
# QueryRunInfo

Single query run for listing

## Properties

Name | Type
------------ | -------------
`completedAt` | Date
`createdAt` | Date
`errorMessage` | string
`executionTimeMs` | number
`id` | string
`resultId` | string
`rowCount` | number
`savedQueryId` | string
`savedQueryVersion` | number
`snapshotId` | string
`sqlHash` | string
`sqlText` | string
`status` | string
`traceId` | string
`warningMessage` | string

## Example

```typescript
import type { QueryRunInfo } from '@hotdata/sdk'

// TODO: Update the object below with actual values
const example = {
  "completedAt": null,
  "createdAt": null,
  "errorMessage": null,
  "executionTimeMs": null,
  "id": null,
  "resultId": null,
  "rowCount": null,
  "savedQueryId": null,
  "savedQueryVersion": null,
  "snapshotId": null,
  "sqlHash": null,
  "sqlText": null,
  "status": null,
  "traceId": null,
  "warningMessage": null,
} satisfies QueryRunInfo

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as QueryRunInfo
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


