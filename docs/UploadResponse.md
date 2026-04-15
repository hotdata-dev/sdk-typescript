
# UploadResponse

Response body for POST /v1/files

## Properties

Name | Type
------------ | -------------
`contentType` | string
`createdAt` | Date
`id` | string
`sizeBytes` | number
`status` | string

## Example

```typescript
import type { UploadResponse } from '@hotdata/sdk'

// TODO: Update the object below with actual values
const example = {
  "contentType": null,
  "createdAt": null,
  "id": null,
  "sizeBytes": null,
  "status": null,
} satisfies UploadResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UploadResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


