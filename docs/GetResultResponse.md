
# GetResultResponse

Response body for GET /results/{id} Returns status and optionally the result data

## Properties

Name | Type
------------ | -------------
`columns` | Array&lt;string&gt;
`errorMessage` | string
`nullable` | Array&lt;boolean&gt;
`resultId` | string
`rowCount` | number
`rows` | Array&lt;Array&lt;string&gt;&gt;
`status` | string

## Example

```typescript
import type { GetResultResponse } from '@hotdata/sdk'

// TODO: Update the object below with actual values
const example = {
  "columns": null,
  "errorMessage": null,
  "nullable": null,
  "resultId": null,
  "rowCount": null,
  "rows": null,
  "status": null,
} satisfies GetResultResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetResultResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


