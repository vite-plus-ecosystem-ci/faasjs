import { testApi } from '@faasjs/dev'
import { describe, it, expect } from 'vite-plus/test'

import api from '../hello.api'

describe('features/home/api/hello', () => {
  it('should work', async () => {
    const handler = testApi(api)

    const { statusCode, data } = await handler({ name: 'world' })

    expect(statusCode).toEqual(200)
    expect(data).toEqual({
      message: 'Hello, world!',
    })
  })
})
