export const languages = {
  es: 'Español',
  en: 'English',
}

export const defaultLang = 'es'

export const ui = {
  es: {
    'nav.home': 'Inicio',
    'nav.movies': 'Películas',
    'nav.series': 'Series',
    'nav.searcher.placeholder': '¿Qué estás buscando?',
    'title.trend': 'En tendencia',
    'title.results': 'Resultados para',
    'movies.popular': 'Películas populares',
    'movies.trend': 'Películas en tendencia',
    'movies.top': 'Top películas',
    'movies.theaters': 'Películas en cines',
    'movies.action': 'Películas de acción',
    'movies.crime': 'Películas policíacas',
    'movies.drama': 'Películas de drama',
    'movies.history': 'Películas históricas',
    'movies.horror': 'Películas de terror',
    'movies.mistery': 'Películas de misterio',
    'movies.scifi': 'Películas de ciencia ficción',
    'movies.war': 'Películas de guerra',
    'tv.popular': 'Series populares',
    'tv.top': 'Top series',
    'tv.trend': 'Series en tendencia',
    'tv.animation': 'Series de animación',
    'tv.comedy': 'Series de comedia',
    'tv.documentary': 'Series documental',
    'tv.family': 'Series familiares',
    'tv.soap': 'Telenovelas',
    'slider.next': 'Siguiente diapositiva',
    'slider.prev': 'Diapositiva anterior',
    'loaderror.title': 'Error al cargar datos',
    'loaderror.description':
      'Hubo un error al cargar los datos. Por favor, inténtalo de nuevo.',
    'button.retry': 'Reintentar',
    'button.trailer': 'Ver tráiler',
    'media-detail.hours': 'h',
    'media-detail.minutes': 'min',
    'media-detail.season': 'temporada',
    'media-detail.seasons': 'temporadas',
    'media-detail.synopsis': 'Sinopsis',
    'media-detail.creator': 'Creada por',
    'media-detail.director': 'Dirigida por',
    'media-detail.actors': 'Reparto',
    'media-detail.script': 'Guión',
    'media-detail.similar': 'Similar',
    'footer.zinx.title': 'Zinx',
    'footer.zinx.description':
      'Ofrece una gran experiencia a través de la API The Movie Database(TMDb). Esta enfocada con fines educativos y aprendizaje.',
    'footer.contact.title': 'Contacto',
    'footer.contact.description':
      'Para cualquier consulta contáctemos a través de nuestro correo: ale.torrubiano@gmail.com.',
    'footer.about.title': 'Acerca de',
    'footer.about.description':
      'En Zinx encontrarás las últimas novedades sobre tus películas y series favoritas gracias a nuestras frecuentes actualizaciones.',
    'footer.updates.title': 'Actualizaciones',
    'footer.updates.description':
      'Siempre estamos trabajando para mejorar y añadir nuevas funcionalidades para ofrecerte la mejor experiencia posible.',
    'footer.copyright': 'Copyright 2024',
    'youtube.player': 'Reproductor de video de YouTube',
    'notfound.title': 'No se encontraron resultados coincidentes',
  },
  en: {
    'nav.home': 'Home',
    'nav.movies': 'Movies',
    'nav.searcher.placeholder': 'Search here',
    'title.trend': 'Trending',
    'title.results': 'Results for',
    'movies.popular': 'Popular Movies',
    'movies.trend': 'Trending movies',
    'movies.top': 'Top movies',
    'movies.theaters': 'Movies in theaters',
    'movies.action': 'Action movies',
    'movies.crime': 'Crime movies',
    'movies.drama': 'Drama movies',
    'movies.history': 'History movies',
    'movies.horror': 'Horror movies',
    'movies.mistery': 'Mistery movies',
    'movies.scifi': 'Science fiction movies',
    'movies.war': 'War movies',
    'tv.popular': 'Popular series',
    'tv.trend': 'Trending series',
    'tv.animation': 'Animation series',
    'tv.comedy': 'Comedy series',
    'tv.documentary': 'Documentary series',
    'tv.family': 'Family series',
    'tv.soap': 'Tv soaps',
    'slider.next': 'Next slide',
    'slider.prev': 'Previous slide',
    'loaderror.title': 'Error loading data',
    'loaderror.description': 'There was an error loading the data. Please try again.',
    'button.retry': 'Retry',
    'button.trailer': 'Watch trailer',
    'media-detail.season': 'season',
    'media-detail.seasons': 'seasons',
    'media-detail.synopsis': 'Synopsis',
    'media-detail.creator': 'Created by',
    'media-detail.director': 'Directed by',
    'media-detail.actors': 'Cast',
    'media-detail.script': 'Script',
    'footer.zinx.title': 'Zinx',
    'footer.zinx.description':
      'Offers a great experience through The Movie Database (TMDb) API. It is focused on educational purposes and learning.',
    'footer.contact.title': 'Contact',
    'footer.contact.description':
      'For any inquiries, contact us via email: ale.torrubiano@gmail.com.',
    'footer.about.title': 'About',
    'footer.about.description':
      'At Zinx, you will find the latest updates on your favorite movies and TV shows thanks to our frequent updates.',
    'footer.updates.title': 'Updates',
    'footer.updates.description':
      'We are always working to improve and add new features to provide you with the best possible experience.',
    'youtube.player': 'YouTube video player',
    'notfound.title': 'No matching results found',
  },
} as const

export const genres = {
  es: {
    'movies.genres': [
      { id: 28, name: 'Acción' },
      { id: 12, name: 'Aventura' },
      { id: 16, name: 'Animación' },
      { id: 35, name: 'Comedia' },
      { id: 80, name: 'Crimen' },
      { id: 99, name: 'Documental' },
      { id: 18, name: 'Drama' },
      { id: 10751, name: 'Familia' },
      { id: 14, name: 'Fantasía' },
      { id: 36, name: 'Historia' },
      { id: 27, name: 'Terror' },
      { id: 10402, name: 'Música' },
      { id: 9648, name: 'Misterio' },
      { id: 10749, name: 'Romance' },
      { id: 878, name: 'Ciencia ficción' },
      { id: 10770, name: 'Película de TV' },
      { id: 53, name: 'Suspense' },
      { id: 10752, name: 'Bélica' },
      { id: 37, name: 'Western' },
    ],
    'series.genres': [
      { id: 10759, name: 'Action & Adventure' },
      { id: 16, name: 'Animación' },
      { id: 35, name: 'Comedia' },
      { id: 80, name: 'Crimen' },
      { id: 99, name: 'Documental' },
      { id: 18, name: 'Drama' },
      { id: 10751, name: 'Familia' },
      { id: 10762, name: 'Kids' },
      { id: 9648, name: 'Misterio' },
      { id: 10763, name: 'News' },
      { id: 10764, name: 'Reality' },
      { id: 10765, name: 'Sci-Fi & Fantasy' },
      { id: 10766, name: 'Soap' },
      { id: 10767, name: 'Talk' },
      { id: 10768, name: 'War & Politics' },
      { id: 37, name: 'Western' },
    ],
  },
  en: {
    'movies.genres': [
      { id: 28, name: 'Action' },
      { id: 12, name: 'Adventure' },
      { id: 16, name: 'Animation' },
      { id: 35, name: 'Comedy' },
      { id: 80, name: 'Crime' },
      { id: 99, name: 'Documentary' },
      { id: 18, name: 'Drama' },
      { id: 10751, name: 'Family' },
      { id: 14, name: 'Fantasy' },
      { id: 36, name: 'History' },
      { id: 27, name: 'Horror' },
      { id: 10402, name: 'Music' },
      { id: 9648, name: 'Mystery' },
      { id: 10749, name: 'Romance' },
      { id: 878, name: 'Science Fiction' },
      { id: 10770, name: 'TV Movie' },
      { id: 53, name: 'Thriller' },
      { id: 10752, name: 'War' },
      { id: 37, name: 'Western' },
    ],
    'series.genres': [
      { id: 10759, name: 'Action & Adventure' },
      { id: 16, name: 'Animation' },
      { id: 35, name: 'Comedy' },
      { id: 80, name: 'Crime' },
      { id: 99, name: 'Documentary' },
      { id: 18, name: 'Drama' },
      { id: 10751, name: 'Family' },
      { id: 10762, name: 'Kids' },
      { id: 9648, name: 'Mystery' },
      { id: 10763, name: 'News' },
      { id: 10764, name: 'Reality' },
      { id: 10765, name: 'Sci-Fi & Fantasy' },
      { id: 10766, name: 'Soap' },
      { id: 10767, name: 'Talk' },
      { id: 10768, name: 'War & Politics' },
      { id: 37, name: 'Western' },
    ],
  },
}
