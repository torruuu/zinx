import { ref } from 'vue'

class HttpClient {
  getUrl(): string {
    return import.meta.env.PUBLIC_API_MOVIES
  }

  getToken(): string {
    return import.meta.env.API_TOKEN
  }

  async get(resource: string, params: { [key: string]: string }[] = [], lang: string) {
    try {
      if (!resource) throw new Error('Resource is not provided')
      if (!lang) throw new Error('Lang is not provided')

      const formatParams = ref<string>('')
      params.forEach((param) => {
        formatParams.value += `${param.name}=${param.value}&`
      })

      if (formatParams.value === '') formatParams.value = 'populate=*'
      const response = await fetch(
        `${this.getUrl()}${resource}?language=${lang}&${formatParams.value}`,
        {
          headers: {
            Authorization: `Bearer ${this.getToken()}`,
            accept: 'application/json',
          },
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
