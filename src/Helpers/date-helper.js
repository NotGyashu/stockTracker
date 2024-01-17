export const convertDateToUnixTimestamp =(date) =>{
           console.log(Math.floor(date.getTime() / 1000))
    return Math.floor(date.getTime() / 1000);

};

export const convertUnixTimestampToDate = (unixTimestamp) => {

    const milliseconds = unixTimestamp * 1000;
    console.log(unixTimestamp*1000/1000);
    return unixTimestamp*1000/100;

};

export const CreateDate = (date, days,weeks, months, years) =>{

    let newDate = new Date(date);
    newDate.setDate(newDate.getDate() + days + 7 * weeks);
    newDate.setMonth(newDate.getMonth() + months );
    newDate.setFullYear(newDate.getFullYear() + years);

    return newDate;

};
