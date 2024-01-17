export const mockSearchresult = {
    "count": 4,
    "result": [
      {
        "description": "APPLE INC",
        "displaySymbol": "AAPL",
        "symbol": "AAPL",
        "type": "Common Stock"
      },
      {
        "description": "APPLE INC",
        "displaySymbol": "AAPL.SW",
        "symbol": "AAPL.SW",
        "type": "Common Stock"
      },
      {
        "description": "APPLE INC",
        "displaySymbol": "APC.BE",
        "symbol": "APC.BE",
        "type": "Common Stock"
      },
      {
        "description": "APPLE INC",
        "displaySymbol": "APC.DE",
        "symbol": "APC.DE",
        "type": "Common Stock"
      }
    ]
  }

  export const companyDetails = {
    "country": "US",
    "currency": "USD",
    "exchange": "NASDAQ/NMS (GLOBAL MARKET)",
    "ipo": "1980-12-12",
    "marketCapitalization": 1415993,
    "name": "Apple Inc",
    "phone": "14089961010",
    "shareOutstanding": 4375.47998046875,
    "ticker": "AAPL",
    "weburl": "https://www.apple.com/",
    "logo": "https://static.finnhub.io/logo/87cb30d8-80df-11ea-8951-00000000092a.png",
    "finnhubIndustry":"Technology"
  }

  export const mockstockQuotes = {
    "c": 261.74,
    "h": 263.31,
    "l": 260.68,
    "o": 261.07,
    "pc": 259.45,
    "t": 1582641000 
  }

  export const mockHistoricalData = Array.from({ length: 20 }, (_, index) => {
    const date = new Date();
    date.setDate(date.getDate() - index); // Generate dates for the last 100 days
    const formattedDate = date.toISOString().split("T")[0]; // Format date as 'YYYY-MM-DD'

    // Simulate closing prices with a random variation
    const basePrice = 1000.0;
    const randomVariation = Math.random() * 10 - 50; // Random value between -5 and 5
    const closingPrice = basePrice + randomVariation;
console.log({ value: closingPrice.toFixed(2), date: formattedDate });
    return { value: closingPrice.toFixed(2), date: formattedDate };
  });

