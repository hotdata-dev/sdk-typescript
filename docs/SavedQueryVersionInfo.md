
# SavedQueryVersionInfo

Single saved query version

## Properties

Name | Type
------------ | -------------
`category` | string
`createdAt` | Date
`hasAggregation` | boolean
`hasGroupBy` | boolean
`hasJoin` | boolean
`hasLimit` | boolean
`hasOrderBy` | boolean
`hasPredicate` | boolean
`numTables` | number
`sql` | string
`sqlHash` | string
`tableSize` | string
`version` | number

## Example

```typescript
import type { SavedQueryVersionInfo } from '@hotdata/sdk'

// TODO: Update the object below with actual values
const example = {
  "category": null,
  "createdAt": null,
  "hasAggregation": null,
  "hasGroupBy": null,
  "hasJoin": null,
  "hasLimit": null,
  "hasOrderBy": null,
  "hasPredicate": null,
  "numTables": null,
  "sql": null,
  "sqlHash": null,
  "tableSize": null,
  "version": null,
} satisfies SavedQueryVersionInfo

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SavedQueryVersionInfo
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


