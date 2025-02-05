import { useEffect, useState } from 'react'

const characters = 'abcdefghijklmnopqrstuvwxyz!<>-_\\/[]{}—=+*^?#'

const TextScramble = ({ text, className }) => {
  const [displayText, setDisplayText] = useState(text)
  const [isAnimating, setIsAnimating] = useState(false)

  // Add a container style to maintain consistent width
  const containerStyle = {
    minWidth: `${text.length}ch`,
    display: 'inline-block',
  }

  useEffect(() => {
    if (text === displayText) return
    setIsAnimating(true)
    
    let iteration = 0
    const maxIterations = 10
    
    const interval = setInterval(() => {
      setDisplayText(current => {
        const newText = text
          .split('')
          .map((letter, index) => {
            if (index < iteration) {
              return text[index]
            }
            // Use monospace-like characters for more consistent width
            return characters[Math.floor(Math.random() * characters.length)]
          })
          .join('')

        if (iteration >= text.length) {
          clearInterval(interval)
          setIsAnimating(false)
          return text
        }
        
        iteration += 1/3
        return newText
      })
    }, 30)

    return () => clearInterval(interval)
  }, [text])

  // Wrap the span in a div with fixed width
  return (
    <div style={containerStyle} className={className}>
      {displayText}
    </div>
  )
}

export default TextScramble 