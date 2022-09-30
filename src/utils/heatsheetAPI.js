import tokenService from "./tokenService";

const BASE_URL = "/api/heatsheet";

export function create(heatsheet) {
    console.log('this is the heatsheet', heatsheet);
    return fetch(BASE_URL, {
        method: 'POST',
        body: JSON.stringify(heatsheet),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    }).then( res => {
        if(res.ok) return res.json()

        throw new Error('Check your server terminal for error.')
    }) 
}

export function getAllHeatsheets() {
    return fetch(BASE_URL, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + tokenService.getToken(), // This grabs thee JWT token out
        // local storage and send its in the header to the server
      },
    }).then((res) => {
      if (res.ok) return res.json();
  
      return res.json().then((response) => {
        console.log(response);
        throw new Error(response.err, '<< response.err create(): heatsheetAPI');
      });
    });
  }

export function getHeatsheet() {
    return fetch(BASE_URL, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + tokenService.getToken(), // This grabs thee JWT token out
        // local storage and send its in the header to the server
      },
    }).then((res) => {
      if (res.ok) return res.json();
  
      return res.json().then((response) => {
        console.log(response);
        throw new Error(response.err, '<< response.err create(): heatsheetAPI');
      });
    });
  }

  export function deleteHeatsheet(heatsheetID) {
    return fetch(`${BASE_URL}/${heatsheetID}`, {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + tokenService.getToken(),
      },
    }).then((res) => {
      if (res.ok) return res.json();
      throw new Error(res.error, '<< res.error from deleteHeatsheet(): heatsheetAPI');
    });
  }