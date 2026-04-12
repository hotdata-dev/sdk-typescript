
# UrlDatasetSource

Create dataset from an external HTTP URL

## Properties

Name | Type
------------ | -------------
`columns` | { [key: string]: string; }
`format` | string
`url` | string

## Example

```typescript
import type { UrlDatasetSource } from '@hotdata/sdk'

// TODO: Update the object below with actual values
const example = {
  "columns": null,
  "format": null,
  "url": null,
} satisfies UrlDatasetSource

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UrlDatasetSource
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


