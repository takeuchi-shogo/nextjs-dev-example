import Sample from '@/components/Sample'
import { render } from '@testing-library/react'

describe('Sample', () => {
  it('コンポーネントのレンダリングのテスト', async () => {
    render(<Sample />)
  })
})
