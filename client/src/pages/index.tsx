import dayjs from "dayjs"
import { useEffect, useState } from "react"

export default function Home() {
  const baseUrl = process.env.NEXT_PUBLIC_SERVER_BASE_URL
  const [messages, setMessages] = useState([])
  useEffect(() => {
    fetch(`${baseUrl}/get-messages`)
      .then((response) => response.json())
      .then((data) => setMessages(data))
  }, [])
  return (
    <>
      <ul>
        {messages.map((message: any, index) => (
          <li key={index}>
            {message.text} / {dayjs(message.createdAt).format("YYYY. MM. DD.")}
          </li>
        ))}
      </ul>
    </>
  )
}
