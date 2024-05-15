import { ref } from 'vue'

class HttpClientLocal {
  getUrl(): string {
    return window.location.origin
  }

  async get(
    resource: string,
    params: { name: string; value: string }[] = [],
    lang: string,
  ) {
    try {
      if (!resource) throw new Error('Resource is not provided')
      if (!lang) throw new Error('Lang is not provided')

      const formatParams = ref<string>('')
      params.forEach((param) => {
        formatParams.value += `${param.name}=${param.value}&`
      })

      if (formatParams.value === '') formatParams.value = 'populate=*'
      const response = await fetch(
        `${this.getUrl()}/api/${lang}/${resource}?${formatParams.value}`,
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

export const httpClientLocal = new HttpClientLocal()
