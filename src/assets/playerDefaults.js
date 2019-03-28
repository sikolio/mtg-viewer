import dukeImage from './duke.png'
import juzaImage from './juza.png'
import USA from './flags/usa.PNG'
import CZECH from './flags/czech.svg'

export const PlayerA = {
  country: USA,
  name: 'Reid Duke',
  winRate: .7,
  deck1: 'monored',
  deck2: 'monowhite',
  image: dukeImage,
}

export const PlayerB = {
  country: CZECH,
  name: 'Martin Juza',
  winRate: .63,
  deck1: 'esper',
  deck2: 'monored',
  image: juzaImage,
}

export const PlayerC = {
  country: USA,
  name: 'John Rolf',
  winRate: .63,
  deck1: 'esper',
  deck2: 'monored',
  image: juzaImage,
}

export const PlayerD = {
  country: USA,
  name: 'Luis Scott-Vargas',
  winRate: .63,
  deck1: 'esper',
  deck2: 'monored',
  image: juzaImage,
}