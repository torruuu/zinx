import { ref } from 'vue'

class HttpClient {
  getUrl() {
    return import.meta.env.PUBLIC_API_MOVIES
  }

  getToken() {
    return import.meta.env.API_TOKEN
  }

  async get(resource, params = [], lang) {
    try {
      if (!resource) throw new Error('Resource is not provided')
      if (!lang) throw new Error('Lang is not provided')

      const formatParams = ref('')
      params.forEach((param) => {
        formatParams.value += `${param.name}=${param.value}&`
      })

      if (formatParams.value === '') formatParams.value = 'populate=*'
      const response = await fetch(
        `${this.getUrl()}${resource}?language=${lang}&${formatParams.value}`,
        {
          accept: 'application/json',
          headers: { Authorization: `Bearer ${this.getToken()}` },
        },
      )
      if (!response.ok) throw new Error(response.statusText)
      const data = await response.json()
      return data
    } catch (error) {
      console.error(error)
      throw error
    }
  }
}

export const httpClient = new HttpClient()
