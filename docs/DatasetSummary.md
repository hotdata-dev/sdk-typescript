
# DatasetSummary

Dataset summary for listing

## Properties

Name | Type
------------ | -------------
`createdAt` | Date
`id` | string
`label` | string
`latestVersion` | number
`pinnedVersion` | number
`schemaName` | string
`tableName` | string
`updatedAt` | Date

## Example

```typescript
import type { DatasetSummary } from '@hotdata/sdk'

// TODO: Update the object below with actual values
const example = {
  "createdAt": null,
  "id": null,
  "label": null,
  "latestVersion": null,
  "pinnedVersion": null,
  "schemaName": null,
  "tableName": null,
  "updatedAt": null,
} satisfies DatasetSummary

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DatasetSummary
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


