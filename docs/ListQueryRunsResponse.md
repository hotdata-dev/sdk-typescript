
# ListQueryRunsResponse

Response body for GET /query-runs

## Properties

Name | Type
------------ | -------------
`count` | number
`hasMore` | boolean
`limit` | number
`nextCursor` | string
`queryRuns` | [Array&lt;QueryRunInfo&gt;](QueryRunInfo.md)

## Example

```typescript
import type { ListQueryRunsResponse } from '@hotdata/sdk'

// TODO: Update the object below with actual values
const example = {
  "count": null,
  "hasMore": null,
  "limit": null,
  "nextCursor": null,
  "queryRuns": null,
} satisfies ListQueryRunsResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ListQueryRunsResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


