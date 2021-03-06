export function checkLoginStatus() {
    return (dispatch) => {
        return fetch(`http://localhost:3001/logged_in`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            withCredentials: true
        })
    .then(resp => resp.json())
    .then(data => dispatch({ type: 'CHECK_STATUS', payload: data }))}
}

export function handleLogout() {
    return (dispatch) => {
        return fetch(`http://localhost:3001/logout`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            withCredentials: true
        })
        .then(resp => resp.json())
        .then(data => dispatch({ type: 'LOGOUT', payload: data }))
        .catch(err => console.log(err));
    }
}

export function handleLogin(formdata, history) {
    return (dispatch) => {
        return fetch(`http://localhost:3001/sessions`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                email: formdata.email,
                password: formdata.password
            }),
            withCredentials: true
        })
        .then(resp => resp.json())
        .then(data => 
            {if (data.status === 'created') {
                dispatch({ type: 'LOGIN', payload: data });
                history.push('/dashboard')
            }
            else {
                alert("Error: Either email or password incorrect. Please try again.");
            }})
        .catch(err => console.log("registration error", err));
    }
}

export function register(formdata) {
    return (dispatch) => {
        return fetch(`http://localhost:3001/users`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                email: formdata.email,
                password: formdata.password,
                password_confirmation: formdata.password_confirmation
            }),
            withCredentials: true
        })
        .then(resp => resp.json())
        .then(data => {
            dispatch({ type: 'REGISTER', payload: data });
            alert("User created!")
        })
        .catch(err => alert("Registration Error: " + err));
    }
}

export function fetchCampaigns() {
    return (dispatch) => {
        return fetch('http://localhost:3001/campaigns')
        .then(response => response.json())
        .then(data => dispatch({ type: 'GET_CAMPAIGNS', payload: data }))
        .catch(err => alert(err))
    };
}

export function addCampaign(formData, history) {
    return (dispatch) => {
        return fetch(`http://localhost:3001/campaigns`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: formData.name,
                user_id: formData.user_id
            })
        })
        .then(response => response.json())
        .then(data => 
            {if (data.status === 'created') {
                alert(data.campaign.name + " created!");
                dispatch({ type: 'ADD_CAMPAIGN', payload: data.campaign })
            }
            else {
                alert("Error: Campaign name is invalid. Please review campaigns and try again.");
            }}
        )
        .then(promise => {history.push(`/dashboard`)})
        .catch(err => alert(err)) 
    };
}

export function fetchCharacters() {
    return (dispatch) => {
        return fetch('http://localhost:3001/characters')
        .then(response => response.json())
        .then(data => dispatch({ type: 'GET_CHARACTERS', payload: data }))
        .catch(err => alert(err))
    };
}

export function addCharacter(formData, history) {
    debugger
    return (dispatch) => {
        return fetch(`http://localhost:3001/characters`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: formData.name,
                race: formData.race,
                character_class: formData.character_class,
                background: formData.background,
                level: formData.level,
                armor_class: formData.armor_class,
                perception: formData.perception,
                investigation: formData.investigation,
                insight: formData.insight,
                spell_save_dc: formData.spell_save_dc,
                user_id: formData.user_id,
                campaign_id: formData.campaign_id
            })
        })
        .then(response => response.json())
        .then(data => 
            {if (data.status === 'created') {
                alert(data.character.name + " created!");
                dispatch({ type: 'ADD_CHARACTER', payload: data.character })
            }
            else {
                alert("Error: Character info is invalid. Please review characters and try again.");
            }}
        )
        .then(promise => {history.push(`/dashboard`)})
        .catch(err => alert(err)) 
    };
}