export interface Intervals {
  min: IntervalData[]
  max: IntervalData[]
}

export interface IntervalData {
  producer: string
  interval: number
  previousWin: number
  followingWin: number
}