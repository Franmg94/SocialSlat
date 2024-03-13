import dayjs from "dayjs"

export default function generateDate(
    month = dayjs().month(), 
    year = dayjs().year() 
)  {

    const firstDateOfMonth = dayjs().year(year).month(month).startOf("month");
    const lastDateOfMonth = dayjs().year(year).month(month).endOf("month");

    const arrayOfDate = []

    // CREATE PREFIX DATE
    for(let i = 0; i < firstDateOfMonth.day(); i++){
        arrayOfDate.push({currentMonth : false , date : firstDateOfMonth.day(i)})
    }


    // GENERATE CURRENT DATE
    for(let i = firstDateOfMonth.date(); i <= lastDateOfMonth.date(); i++){
        arrayOfDate.push({
            currentMonth : true ,
            date : firstDateOfMonth.date(i),
            today : firstDateOfMonth.date(i).toDate().toDateString() === dayjs().toDate().toDateString()
        })
    }

    // CREATE SUFIX DATE
    const remaining = 42 - arrayOfDate.length;

    for (let i = lastDateOfMonth.date()+1; i < lastDateOfMonth.date()+remaining; i++){
        arrayOfDate.push({currentMonth : false , date : firstDateOfMonth.date(i)})
    }

    return arrayOfDate;
}

export const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];