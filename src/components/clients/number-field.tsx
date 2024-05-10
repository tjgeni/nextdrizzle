"use client"

import { HorizontalLayout } from "@hilla/react-components/HorizontalLayout.js"
import { NumberField } from "@hilla/react-components/NumberField.js"
import React from "react"

export default function NumberFieldComponent() {
  return (
    <HorizontalLayout theme="spacing">
      <NumberField label="Balance">
        <div slot="prefix">$</div>
      </NumberField>

      <NumberField label="Balance">
        <div slot="suffix">€</div>
      </NumberField>
    </HorizontalLayout>
  )
}
