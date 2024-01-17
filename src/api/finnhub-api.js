const basePath  = "https://finnhub.io/api/v1";

export const searchSymbols = async(query) =>{
    const url = `${basePath}/search?q=${query}&token=${process.env.REACT_APP_API_KEY}`;

    const response = await fetch(url);

    if(!response.ok){
        const message = `An error occured in Fetchng the api: ${response.status}`;
        throw new Error(message);
        
    }
    return await response.json();
}



export const fetchStockDEtails = async(stockSymbol) =>{
    const url = `${basePath}/stock/profile2?symbol=${stockSymbol}&token=${process.env.REACT_APP_API_KEY}`;

    const response = await fetch(url);

    if(!response.ok){
        const message = `An error occured in Fetchng the api: ${response.status}`;
        throw new Error(message);
    }
        return await response.json();
    
}



export const fetchQuote = async(stockSymbol) =>{

    const url = `${basePath}/quote?symbol=${stockSymbol}&token=${process.env.REACT_APP_API_KEY}`;
console.log(url);
    const response = await fetch(url);

    if(!response.ok){
        const message = `An error occured in Fetchng the api: ${response.status}`;
        throw new Error(message);
    }
        return await response.json();
    
}

export const fetchHistoricalData = async(stockSymbol,resolution,from,to) =>{
    const url = `${basePath}/stock/candle?symbol=${stockSymbol}&resolution=${resolution}&from=${from}&to=${to}&token=ck0lomhr01qtrbkm4q9gck0lomhr01qtrbkm4qa0`;

    const response = await fetch(url);

    if(!response.ok){
        const message = `An error occured in Fetchng the api: ${response.status}`;
        throw new Error(message);
    }
        return await response.json();
    
}
