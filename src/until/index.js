


export const sendData = async (url = "", method = "GET", data = {}) => {
    try {
        const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
                'Access-Control-Allow-Origin': 'http://localhost:3000',
                'Access-Control-Allow-Credentials': 'true',
            },
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        return await response.json();
    }  catch (error) {
        console.log(error)
        if(error===408){
            console.log(error)
        }
    }
}