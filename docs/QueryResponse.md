
# QueryResponse

Response body for POST /query  Query results are returned immediately along with a `result_id` for later retrieval. The actual persistence to storage happens asynchronously in the background.  To check if a result is ready for SQL queries, poll GET /results/{id} and check `status`: - `\"processing\"`: Persistence is still in progress - `\"ready\"`: Result is available for retrieval and SQL queries - `\"failed\"`: Persistence failed (check `error_message` for details)

## Properties

Name | Type
------------ | -------------
`columns` | Array&lt;string&gt;
`executionTimeMs` | number
`nullable` | Array&lt;boolean&gt;
`queryRunId` | string
`resultId` | string
`rowCount` | number
`rows` | Array&lt;Array&lt;string&gt;&gt;
`warning` | string

## Example

```typescript
import type { QueryResponse } from '@hotdata/sdk'

// TODO: Update the object below with actual values
const example = {
  "columns": null,
  "executionTimeMs": null,
  "nullable": null,
  "queryRunId": null,
  "resultId": null,
  "rowCount": null,
  "rows": null,
  "warning": null,
} satisfies QueryResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as QueryResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


