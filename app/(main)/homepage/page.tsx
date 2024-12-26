import Link from "next/link"

export default function Home() {
  return (
    <div>
      <div>Welcome to Feeds.app</div>
      <p>Save your favorite social media posts</p>
      <Link href="/privacy">Privacy Policy</Link>
    </div>
  )
}
