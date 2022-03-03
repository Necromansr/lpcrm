


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


export function parserText(text, type, count) {
    let start = text.length;
    if (type === 'purchaser') {
        let parse = text.toLowerCase();
        let temp = parse.replace(/[^а-яёa-zA-ZЁА-Я "'-]/g, x => '').replace(/([ -]|^)[а-яёa-z]/g, x => x.toUpperCase())
            .replace(/( |-|')(?=\1)/g, x => "").replace(/"/g, x => "'");
        return [temp.slice(0, 80), start - temp.length]
    } else if (type === 'phone') {
        let temp = text.replace(/[^0-9]/g, x => x = "")
        let len = temp.length;

        temp = temp.slice(0, count);
        return [temp, start - temp.length - (len - temp.length)]
    } else if (type === 'ppo') {
        let temp = text.replace(/[^0-9a-z-]/g, x => x = "")
        let len = temp.length;
        temp = temp.slice(0, count);
        return [temp, start - temp.length - (len - temp.length)]
    } else if (type === 'id') {
        let temp = text.replace(/[^0-9]/g, x => x = "")
        let len = temp.length;
        temp = temp.slice(0, count);
        return [temp, start - temp.length - (len - temp.length)]
    } else if (type === 'ip') {
        let temp = text.replace(/[^0-9.,]/g, x => x = "").replace(/,/g, x => ".").replace(/(\.)(?=\1)/g, x => "")
        let len = temp.length;
        temp = temp.slice(0, 15);
        return [temp, start - temp.length - (len - temp.length)]
    }
    else if (type === 'price') {
        let temp = text.replace(/[^0-9.,]/g, x => x = "").replace(/,/g, x => ".").replace(/(\.)(?=\1)/g, x => "").replace(/\.(?=.*\..*)/g, x => "")
        let len = temp.length;
        temp = temp.slice(0, 10);
        return [temp, start - temp.length - (len - temp.length)]
    } else if (type === 'comment') {
        let temp;
        if (text.match(/(^)[а-яёa-z]/g))
            temp = text[0].toUpperCase() + text.slice(1);
        else
            temp = text;
        if (count === '200') {
            temp = temp.replace(/( )(?=\1)/g, x => "")
        }
        let len = temp.length;
        temp = temp.slice(0, count);
        return [temp, start - temp.length - (len - temp.length)]
    } else if (type === 'site') {
        let temp = text.replace(/(^https?:\/\/|www.)/g, x => '');
        temp = temp.replace(/[^а-яёa-zA-ZЁА-Я0-9.\/%?=&+_-]/g, x => '')
        if (temp.match(/(^)[а-яёa-z]/g))
            temp = temp[0].toUpperCase() + temp.slice(1);
        else
            temp = temp;
        return [temp.slice(0, 500), start - temp.length]
    } else if (type === 'find') {
        let temp;
        if (text.match(/(^)[а-яёa-z]/g))
            temp = text[0].toUpperCase() + text.slice(1);
        else
            temp = text;
        let len = temp.length;
        return [temp, start - temp.length - (len - temp.length)]
    }

}