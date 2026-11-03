import { describe, expect, it } from 'vite-plus/test'

import { createHttpHandler } from './helpers'

describe('setStatusCode', () => {
  it('should work', async () => {
    const handler = createHttpHandler(({ setStatusCode }) => {
      setStatusCode(404)
    })

    const res = await handler({})

    expect(res.statusCode).toEqual(404)
  })
})
