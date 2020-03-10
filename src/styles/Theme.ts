import React from "react"

type ThemeType = {
  colors: {
    orange: string
    lightGrey: string
  }
  fonts: string[]
  fontSizes: {
    small: string
    medium: string
    large: string
  }
}

const theme: ThemeType = {
  colors: {
    orange: "#EE6113",
    lightGrey: "#979797",
  },
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "1rem",
    medium: "2rem",
    large: "3rem",
  },
}

export default theme
