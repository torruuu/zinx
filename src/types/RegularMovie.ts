export type RegularMovie = {
  backdrop_path: string | null
  id: number
  original_title: string
  overview: string
  poster_path: string | null
  media_type: string
  adult: boolean
  title: string
  original_language: string
  genre_ids: number[]
  popularity: number
  release_date: string
  video: boolean
  vote_average: number
  vote_count: number
}
