import randomize from 'randomatic'

export const generateId = () => randomize('Aa0', 10)

export const generateArrayFromNumber = (number: number) => [...Array(number)]

export const scrollToElement = (id: string, isSmooth?: boolean) => {
  const element = document.getElementById(id)

  if (element) {
    element.scrollIntoView({
      behavior: isSmooth ? 'smooth' : 'auto',
      block: 'center',
      inline: 'center',
    })
  }
}

export const getRandomNumber = (minimum: number, maximum: number): number =>
  Math.floor(Math.random() * (maximum - minimum + 1)) + minimum
