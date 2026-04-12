
# ListResultsResponse

Response body for GET /results

## Properties

Name | Type
------------ | -------------
`count` | number
`hasMore` | boolean
`limit` | number
`offset` | number
`results` | [Array&lt;ResultInfo&gt;](ResultInfo.md)

## Example

```typescript
import type { ListResultsResponse } from '@hotdata/sdk'

// TODO: Update the object below with actual values
const example = {
  "count": null,
  "hasMore": null,
  "limit": null,
  "offset": null,
  "results": null,
} satisfies ListResultsResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ListResultsResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


