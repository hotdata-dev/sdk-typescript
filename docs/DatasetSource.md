
# DatasetSource

Dataset source specification

## Properties

Name | Type
------------ | -------------
`columns` | { [key: string]: string; }
`format` | string
`uploadId` | string
`savedQueryId` | string
`version` | number
`description` | string
`name` | string
`sql` | string
`url` | string
`inline` | [InlineData](InlineData.md)

## Example

```typescript
import type { DatasetSource } from '@hotdata/sdk'

// TODO: Update the object below with actual values
const example = {
  "columns": null,
  "format": null,
  "uploadId": null,
  "savedQueryId": null,
  "version": null,
  "description": null,
  "name": null,
  "sql": null,
  "url": null,
  "inline": null,
} satisfies DatasetSource

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DatasetSource
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


