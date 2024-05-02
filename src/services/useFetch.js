import { ref } from 'vue'

class HttpClient {
  constructor() {
    this.STATUS = {
      error: 'error',
      success: 'success',
      idle: 'idle',
      pending: 'pending',
    }
  }

  getUrl() {
    return import.meta.env.PUBLIC_API
  }

  getToken() {
    return import.meta.env.API_AUTH
  }

  async get(resource, params = [], langCode) {
    try {
      if (!resource) throw new Error('Resource is not provided')
      if (!langCode) throw new Error('Lang code is not provided')

      const formatParams = ref('')
      params.forEach((param) => {
        formatParams.value += `${param.name}=${param.value}&`
      })

      if (formatParams.value === '') formatParams.value = 'populate=*'
      const response = await fetch(
        `${this.getUrl()}${resource}?language=${langCode}&${formatParams.value}`,
        {
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
