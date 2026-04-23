
# RefreshWarning

Non-fatal warning that occurred during a refresh operation. Used to report issues like failed deletion scheduling that don\'t prevent the refresh from succeeding.

## Properties

Name | Type
------------ | -------------
`message` | string
`schemaName` | string
`tableName` | string

## Example

```typescript
import type { RefreshWarning } from '@hotdata/sdk'

// TODO: Update the object below with actual values
const example = {
  "message": null,
  "schemaName": null,
  "tableName": null,
} satisfies RefreshWarning

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RefreshWarning
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


