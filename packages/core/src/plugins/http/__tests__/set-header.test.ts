import { describe, expect, it } from 'vite-plus/test'

import { createHttpHandler } from './helpers'

describe('setHeader', () => {
  it('should work', async () => {
    const handler = createHttpHandler(({ setHeader }) => {
      setHeader('key', 'value')
    })

    const res = await handler({})

    expect(res.statusCode).toEqual(204)
    expect(res.headers.key).toEqual('value')
  })
})
