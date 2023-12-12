import dayjs from "dayjs"
import { useEffect, useState } from "react"

export default function Home() {
  const [messages, setMessages] = useState([])
  useEffect(() => {
    fetch("http://localhost:8080/get-messages")
      .then((response) => response.json())
      .then((data) => setMessages(data))
  }, [])
  return (
    <>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>
            {message.text} / {dayjs(message.createdAt).format("YYYY. MM. DD.")}
          </li>
        ))}
      </ul>
    </>
  )
}
