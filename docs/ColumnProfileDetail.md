
# ColumnProfileDetail

Type-specific column profile detail. The `type` discriminator field determines which variant is present. Profile type is chosen based on the column\'s Arrow data type and cardinality:  - **categorical**: Text or numeric columns with ≤200 distinct values. Lists each value with its frequency. - **text**: Text columns with >200 distinct values. Reports string length statistics. - **numeric**: Numeric columns with >200 distinct values. Reports min, max, and mean. - **temporal**: Date and timestamp columns. Reports min and max as ISO-8601 strings. - **boolean**: Boolean columns. Reports true and false counts.

## Properties

Name | Type
------------ | -------------
`type` | string
`values` | [Array&lt;CategoryValueInfo&gt;](CategoryValueInfo.md)
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
  "type": null,
  "values": null,
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


