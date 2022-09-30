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

export function getAllSwimmers() {
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
        throw new Error(response.err, '<< response.err create(): swimmerAPI');
      });
    });
  }


export function getSwimmer() {
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
        throw new Error(response.err, '<< response.err create(): swimmerAPI');
      });
    });
  }

  export function deleteSwimmer(swimmerID) {
    return fetch(`${BASE_URL}/${swimmerID}`, {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + tokenService.getToken(),
      },
    }).then((res) => {
      if (res.ok) return res.json();
      throw new Error(res.error, '<< res.error from deleteSwimmer(): swimmerAPI');
    });
  }

//   export function updateSwimmer(swimmerID) {
//     return fetch(`${BASE_URL}/${swimmerID}`, {
//         method: 'UPDATE',
//         headers: {
//           Authorization: 'Bearer ' + tokenService.getToken(),
//         },
//       }).then((res) => {
//         if (res.ok) return res.json();
//         throw new Error(res.error, '<< res.error from deleteSwimmer(): swimmerAPI');
//       });
//     }