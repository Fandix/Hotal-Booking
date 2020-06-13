import _axios from "axios"

const axios = (baseURL) => {
    const instance = _axios.create({
            baseURL: baseURL || 'https://challenge.thef2e.com/api/thef2e2019/stage6/', 
            timeout: 3000,
            headers: {
                Authorization : `Bearer vH0Gm3vZgiYKxa6D5iTIcHC44iYVXGFhFTeJ3Nhyc9uU839K2DtplTB5gsaJ`,
                Accept : 'application/json',
                'Content-Type': 'application/json',
            }
        });

     return instance;
}

export {axios};
export default axios();