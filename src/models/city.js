const url = `http://localhost:4000/api/v1/cities`

class CityModel {
  static getAllCities = () => {
    return fetch(url)
      .then((response) => response.json())
  }

  static getCityById = (cityId) => {
    return fetch(`${url}/${cityId}`)
      .then((response) => response.json())
  }

  static createCity = (city) => {
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(city)
    })
      .then((response) => response.json())
  }
}



export default CityModel
