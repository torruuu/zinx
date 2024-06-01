export type BelongsToCollection = {
  id: number
  name: string
  poster_path: string | null
  backdrop_path: string | null
}

export type CastMember = {
  adult: boolean
  gender: number
  id: number
  known_for_department: string
  name: string
  original_name: string
  popularity: number
  profile_path: string
  cast_id: number
  character: string
  credit_id: string
  order: number
}

export type Credits = {
  cast: CastMember[]
  crew: CastMember[]
}

export type CrewMember = {
  id: number
  credit_id: string
  name: string
  original_name: string
  gender: number
  profile_path: string | null
}

export type Genre = {
  id: number
  name: string
}

export type Network = {
  id: number
  logo_path: string | null
  name: string
  origin_country: string
}

export type Episode = {
  id: number
  overview: string
  name: string
  vote_average: number
  vote_count: number
  air_date: string
  episode_number: number
  episode_type: string
  production_code: string
  runtime: number
  season_number: number
  show_id: number
  still_path: string | null
}

export type ProductionCompany = {
  id: number
  logo_path: string | null
  name: string
  origin_country: string
}

export type Season = {
  air_date: string | null
  episode_count: number
  id: number
  name: string
  overview: string
  poster_path: string | null
  season_number: number
  vote_average: number
}

export type SpokenLanguage = {
  english_name: string
  iso_639_1: string
  name: string
}

export type Video = {
  iso_639_1: string
  iso_3166_1: string
  name: string
  key: string
  site: string
  size: number
  type: string
  official: boolean
  published_at: string
  id: string
}
