
# SqlQueryDatasetSource

Create dataset from a SQL query (auto-creates a saved query)

## Properties

Name | Type
------------ | -------------
`description` | string
`name` | string
`sql` | string

## Example

```typescript
import type { SqlQueryDatasetSource } from '@hotdata/sdk'

// TODO: Update the object below with actual values
const example = {
  "description": null,
  "name": null,
  "sql": null,
} satisfies SqlQueryDatasetSource

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SqlQueryDatasetSource
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


