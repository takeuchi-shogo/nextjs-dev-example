import { Liff } from '../components/Liff'

export default function Page() {
  return (
    <div>
      <Liff liffId={process.env.LIFF_ID} url={process.env.LIFF_REDIRECT_URL} />
    </div>
  )
}
