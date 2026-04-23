
# JobStatusResponse

Response body for GET /v1/jobs/{id}

## Properties

Name | Type
------------ | -------------
`attempts` | number
`completedAt` | Date
`createdAt` | Date
`errorMessage` | string
`id` | string
`jobType` | [JobType](JobType.md)
`result` | [JobResult](JobResult.md)
`status` | [JobStatus](JobStatus.md)

## Example

```typescript
import type { JobStatusResponse } from '@hotdata/sdk'

// TODO: Update the object below with actual values
const example = {
  "attempts": null,
  "completedAt": null,
  "createdAt": null,
  "errorMessage": null,
  "id": null,
  "jobType": null,
  "result": null,
  "status": null,
} satisfies JobStatusResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as JobStatusResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


