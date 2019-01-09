module.exports = {
  get (options) {
    options.method = 'GET'
    return xhr(options)
  },
  post (options, data) {
    options.method = 'POST'
    return xhr(options)
  }
}

function xhr (options) {

  const data = options.data || null
  const headers = options.headers || []

  const promise = new Promise((resolve, reject) => {

    const xhr = new XMLHttpRequest()
    xhr.open(options.method, options.url, true)

    if (headers.length > 0) {
      headers.forEach((header) => {
        xhr.setRequestHeader(header.key, header.value)
      })
    }

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve({body: JSON.parse(xhr.response)})
        } else {
          reject(new Error(xhr.status))
        }
      }
    }
    xhr.send(data)
  })

  return promise
}
