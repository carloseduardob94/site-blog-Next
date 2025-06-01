import { useCallback, useEffect, useState } from "react"

type UseClipboardProps = {
  timeout?: number
}

export const useClipboard = ({ timeout = 2000 }: UseClipboardProps) => {
  const [isCopied, setIsCopied] = useState(false)

  const handleCopy = useCallback(async (text: string) => {
    if (!navigator.clipboard) {
      console.error("Failed to copy text to clipboard")
      return false
    }

    try {
      await navigator.clipboard.writeText(text)
      setIsCopied(true)
    } catch (error) {
      console.error("Failed to copy text to clipboard", error)
      return false
    }
  }, [])

  useEffect(() => {
    if (isCopied) {
      const timer = setTimeout(() => {
        setIsCopied(false)
      }, timeout)

      return () => clearTimeout(timer)
    }

  }, [isCopied, timeout])

  return { isCopied, handleCopy }
}