
# CreateSavedQueryRequest

Request body for POST /v1/queries

## Properties

Name | Type
------------ | -------------
`description` | string
`name` | string
`sql` | string
`tags` | Array&lt;string&gt;

## Example

```typescript
import type { CreateSavedQueryRequest } from '@hotdata/sdk'

// TODO: Update the object below with actual values
const example = {
  "description": null,
  "name": null,
  "sql": null,
  "tags": null,
} satisfies CreateSavedQueryRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateSavedQueryRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


