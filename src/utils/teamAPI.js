import tokenService from "./tokenService";

const BASE_URL = "/api/team";

export function create(team) {
    return fetch(BASE_URL, {
        method: 'POST',
        body: team,
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    }).then( res => {
        if(res.ok) return res.json()

        throw new Error('Check your server terminal for error.')
    }) 
}

export function getTeam() {
    return fetch(BASE_URL, {
      headers: {
        Authorization: 'Bearer ' + tokenService.getToken(), // This grabs thee JWT token out
        // local storage and send its in the header to the server
      },
    }).then((res) => {
      if (res.ok) return res.json();
  
      return res.json().then((response) => {
        console.log(response);
        throw new Error(response.err, '<< response.err create(): teamAPI');
      });
    });
  }

  export function deleteTeam(teamID) {
    return fetch(`${BASE_URL}/${teamID}`, {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + tokenService.getToken(),
      },
    }).then((res) => {
      if (res.ok) return res.json();
      throw new Error(res.error, '<< res.error from deleteTeam(): teamAPI');
    });
  }