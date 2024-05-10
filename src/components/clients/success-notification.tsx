"use client"

import { Button } from "@hilla/react-components/Button.js"
import { HorizontalLayout } from "@hilla/react-components/HorizontalLayout.js"
import { Icon } from "@hilla/react-components/Icon.js"
import { Notification } from "@hilla/react-components/Notification.js"
import "@vaadin/vaadin-lumo-styles/vaadin-iconset"

export default function SuccessNotification({
  notificationOpened,
  closeNotification,
}: {
  notificationOpened: boolean
  closeNotification: () => void
}) {
  return (
    <Notification
      theme="success"
      duration={0}
      position="top-center"
      opened={notificationOpened}
    >
      <HorizontalLayout theme="spacing" style={{ alignItems: "center" }}>
        <div>Hello Folks!</div>
        <Button
          theme="tertiary-inline icon"
          onClick={closeNotification}
          aria-label="Close"
        >
          <Icon icon="lumo:cross" />
        </Button>
      </HorizontalLayout>
    </Notification>
  )
}
