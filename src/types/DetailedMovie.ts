import type { RegularMedia } from '@/types/RegularMedia'
import type {
  BelongsToCollection,
  Credits,
  Genre,
  ProductionCompany,
  SpokenLanguage,
  Video,
} from '@/types/Subtypes'

export type DetailedMovie = {
  adult: boolean
  backdrop_path: string | null
  belongs_to_collection: BelongsToCollection | null
  budget: number
  genres: Genre[]
  homepage: string
  id: number
  imdb_id: string
  origin_country: string[]
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string | null
  production_companies: ProductionCompany[]
  production_countries: { iso_3166_1: string; name: string }[]
  release_date: string
  revenue: number
  runtime: number
  spoken_languages: SpokenLanguage[]
  status: string
  tagline: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
  credits: Credits
  recommendations: {
    page: number
    results: RegularMedia[]
  }
  videos: { results: Video[] }
}
