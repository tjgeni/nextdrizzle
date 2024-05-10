"use client"

import dynamic from "next/dynamic"
import { useState } from "react"

const NumberField = dynamic(() => import("@/components/clients/number-field"), {
  ssr: false,
})

const SuccessNotification = dynamic(
  () => import("@/components/clients/success-notification"),
  {
    ssr: false,
  }
)

export default function Home() {
  const [notificationOpened, setNotificationOpened] = useState(false)

  const openNotification = () => setNotificationOpened(true)
  const closeNotification = () => setNotificationOpened(false)

  return (
    <>
      <main className="flex min-h-screen flex-col items-center p-24 gap-4">
        <div>
          <button
            onClick={() => openNotification()}
            className="border px-4 py-2 rounded-md shadow-lg"
          >
            Show Notification
          </button>
        </div>
        <NumberField />
      </main>

      <SuccessNotification
        notificationOpened={notificationOpened}
        closeNotification={closeNotification}
      />
    </>
  )
}
