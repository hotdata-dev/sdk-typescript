
# AsyncQueryResponse

Response returned when a query is submitted asynchronously (202 Accepted).  Poll GET /query-runs/{id} to track progress. Once status is \"succeeded\", retrieve results via GET /results/{result_id}.

## Properties

Name | Type
------------ | -------------
`queryRunId` | string
`reason` | string
`status` | string
`statusUrl` | string

## Example

```typescript
import type { AsyncQueryResponse } from '@hotdata/sdk'

// TODO: Update the object below with actual values
const example = {
  "queryRunId": null,
  "reason": null,
  "status": null,
  "statusUrl": null,
} satisfies AsyncQueryResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AsyncQueryResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


