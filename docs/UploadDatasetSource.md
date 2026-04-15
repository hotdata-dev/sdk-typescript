
# UploadDatasetSource

Create dataset from a previously uploaded file

## Properties

Name | Type
------------ | -------------
`columns` | { [key: string]: string; }
`format` | string
`uploadId` | string

## Example

```typescript
import type { UploadDatasetSource } from '@hotdata/sdk'

// TODO: Update the object below with actual values
const example = {
  "columns": null,
  "format": null,
  "uploadId": null,
} satisfies UploadDatasetSource

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UploadDatasetSource
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


