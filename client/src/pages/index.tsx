import dayjs from "dayjs"
import { useEffect, useState } from "react"

export default function Home() {
  const baseUrl = "https://nemmindegy.vercel.app/"
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
