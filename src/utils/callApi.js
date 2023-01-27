
const callApi = async (endpoint) => {
    
    const res = await fetch('https://contact.mediusware.com/api/contacts/', {
        method: 'GET',
        headers: {
            'accept': 'application/json',
            'X-CSRFToken': 'a7rlnuzYo8yU6Kf3E2i24oH0Jcun8vDpuJLsvyy6kQgeuiKmYyJwKnZvrAUau7AQ'
        }
    })
    
    return res.json()

};
export default callApi;
