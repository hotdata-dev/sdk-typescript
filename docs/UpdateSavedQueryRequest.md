
# UpdateSavedQueryRequest

Request body for PUT /v1/queries/{id}

## Properties

Name | Type
------------ | -------------
`categoryOverride` | string
`description` | string
`name` | string
`sql` | string
`tableSizeOverride` | string
`tags` | Array&lt;string&gt;

## Example

```typescript
import type { UpdateSavedQueryRequest } from '@hotdata/sdk'

// TODO: Update the object below with actual values
const example = {
  "categoryOverride": null,
  "description": null,
  "name": null,
  "sql": null,
  "tableSizeOverride": null,
  "tags": null,
} satisfies UpdateSavedQueryRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateSavedQueryRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


