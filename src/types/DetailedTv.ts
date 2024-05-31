import type { RegularMovie } from '@/types/RegularMovie'
import type {
  Credits,
  CrewMember,
  Genre,
  Episode,
  Network,
  ProductionCompany,
  Season,
  SpokenLanguage,
} from '@/types/Subtypes'

export type DetailedTv = {
  adult: boolean
  backdrop_path: string | null
  created_by: CrewMember[]
  episode_run_time: number[]
  first_air_date: string
  genres: Genre[]
  homepage: string
  id: number
  in_production: boolean
  languages: string[]
  last_air_date: string
  last_episode_to_air: Episode | null
  name: string
  next_episode_to_air: Episode | null
  networks: Network[]
  number_of_episodes: number
  number_of_seasons: number
  origin_country: string[]
  original_language: string
  original_name: string
  overview: string
  popularity: number
  poster_path: string | null
  production_companies: ProductionCompany[]
  production_countries: { iso_3166_1: string; name: string }[]
  seasons: Season[]
  spoken_languages: SpokenLanguage[]
  status: string
  tagline: string
  type: string
  vote_average: number
  vote_count: number
  credits: Credits
  similar: {
    page: number
    results: RegularMovie[]
  }
}
