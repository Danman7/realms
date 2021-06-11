import { config } from 'react-spring'

export const animateFade = (reverse: boolean) => ({
  from: { opacity: 0 },
  to: { opacity: 1 },
  reset: true,
  reverse,
})

export const animateSlideUpOffScreen = (reverse: boolean) => ({
  from: { opacity: 0, transform: 'scale(0.8) translateY(200px)' },
  to: { opacity: 1, transform: 'scale(1) translateY(0px)' },
  reset: true,
  reverse,
  config: config.gentle,
})
