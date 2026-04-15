
# SavedQueryDetail

Saved query detail (includes latest version\'s SQL)

## Properties

Name | Type
------------ | -------------
`category` | string
`createdAt` | Date
`description` | string
`hasAggregation` | boolean
`hasGroupBy` | boolean
`hasJoin` | boolean
`hasLimit` | boolean
`hasOrderBy` | boolean
`hasPredicate` | boolean
`id` | string
`latestVersion` | number
`name` | string
`numTables` | number
`sql` | string
`sqlHash` | string
`tableSize` | string
`tags` | Array&lt;string&gt;
`updatedAt` | Date

## Example

```typescript
import type { SavedQueryDetail } from '@hotdata/sdk'

// TODO: Update the object below with actual values
const example = {
  "category": null,
  "createdAt": null,
  "description": null,
  "hasAggregation": null,
  "hasGroupBy": null,
  "hasJoin": null,
  "hasLimit": null,
  "hasOrderBy": null,
  "hasPredicate": null,
  "id": null,
  "latestVersion": null,
  "name": null,
  "numTables": null,
  "sql": null,
  "sqlHash": null,
  "tableSize": null,
  "tags": null,
  "updatedAt": null,
} satisfies SavedQueryDetail

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SavedQueryDetail
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


