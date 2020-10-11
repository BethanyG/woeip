import moment from 'moment-timezone'
import { getPollutants } from 'components/Map/utils'
import { Collection, Pollutant } from 'components/Map/types'

export type ControlPanelProps = {
  date: moment.Moment
  setDate: (date: moment.Moment) => void
  setPollutants: (values: Pollutant[]) => void
  collections: Array<Collection>
  currentCollection: Collection
  getPollutants: typeof getPollutants
}
