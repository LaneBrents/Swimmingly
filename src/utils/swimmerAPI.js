import tokenService from "./tokenService";

const BASE_URL = "/api/swimmer";

export function create(swimmer) {
    console.log('this is the swimmer', swimmer);
    return fetch(BASE_URL, {
        method: 'POST',
        body: JSON.stringify(swimmer),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    }).then( res => {
        if(res.ok) return res.json()

        throw new Error('Check your server terminal for error.')
    }) 
}

  export function deleteSwimmer(swimmerId) {
    return fetch(`${BASE_URL}/${swimmerId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + tokenService.getToken(),
      },
    }).then((res) => {
      if (res.ok) return res.json();

      throw new Error(res.error, '<< res.error from deleteSwimmer(): swimmerAPI');
    });
  }

  export function getSwimmers() {
    return fetch(BASE_URL, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + tokenService.getToken(),
      },
    }).then((res) => {
      if (res.ok) return res.json();
  
      return res.json().then((response) => {
        console.log(response);
        throw new Error(response.err, '<< response.err create(): swimmerAPI');
      });
    });
  }