
# DatasetVersionSummary

Dataset version summary

## Properties

Name | Type
------------ | -------------
`createdAt` | Date
`id` | string
`sourceType` | string
`version` | number

## Example

```typescript
import type { DatasetVersionSummary } from '@hotdata/sdk'

// TODO: Update the object below with actual values
const example = {
  "createdAt": null,
  "id": null,
  "sourceType": null,
  "version": null,
} satisfies DatasetVersionSummary

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DatasetVersionSummary
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


