
# ColumnProfileDetail


## Properties

Name | Type
------------ | -------------
`values` | [Array&lt;CategoryValueInfo&gt;](CategoryValueInfo.md)
`type` | string
`avgLength` | number
`maxLength` | number
`minLength` | number
`max` | string
`mean` | number
`min` | string
`falseCount` | number
`trueCount` | number

## Example

```typescript
import type { ColumnProfileDetail } from '@hotdata/sdk'

// TODO: Update the object below with actual values
const example = {
  "values": null,
  "type": null,
  "avgLength": null,
  "maxLength": null,
  "minLength": null,
  "max": null,
  "mean": null,
  "min": null,
  "falseCount": null,
  "trueCount": null,
} satisfies ColumnProfileDetail

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ColumnProfileDetail
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


