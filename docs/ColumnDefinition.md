
# ColumnDefinition

Column type specification - either a simple type string or detailed spec with properties.  Simple form: `\"VARCHAR\"`, `\"INT\"`, `\"DATE\"` Detailed form: `{ \"type\": \"DECIMAL\", \"precision\": 10, \"scale\": 2 }`

## Properties

Name | Type
------------ | -------------
`geometryType` | string
`precision` | number
`scale` | number
`srid` | number
`type` | string

## Example

```typescript
import type { ColumnDefinition } from '@hotdata/sdk'

// TODO: Update the object below with actual values
const example = {
  "geometryType": null,
  "precision": null,
  "scale": null,
  "srid": null,
  "type": null,
} satisfies ColumnDefinition

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ColumnDefinition
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


