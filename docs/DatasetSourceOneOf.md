
# DatasetSourceOneOf

Create from a previously uploaded file

## Properties

Name | Type
------------ | -------------
`columns` | [{ [key: string]: ColumnDefinition; }](ColumnDefinition.md)
`format` | string
`uploadId` | string

## Example

```typescript
import type { DatasetSourceOneOf } from '@hotdata/sdk'

// TODO: Update the object below with actual values
const example = {
  "columns": null,
  "format": null,
  "uploadId": null,
} satisfies DatasetSourceOneOf

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DatasetSourceOneOf
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


