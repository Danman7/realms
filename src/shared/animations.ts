export const animateFade = (reverse: boolean) => ({
  to: { opacity: 1 },
  from: { opacity: 0 },
  reset: true,
  reverse,
})
