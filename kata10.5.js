const talkingCalendar = date => {
  date = date.split('/');
  let month = date[1];
  
  switch (month){
    case '01':
      month = 'January';
      break;
    case '02':
      month = 'February';
      break;
    case '03':
      month = 'March';
      break;
    case '04':
      month = 'April';
      break;
    case '05':
      month = 'May';
      break;
    case '06':
      month = 'June';
      break;
    case '07':
      month = 'July';
      break;
    case '08':
      month = 'August';
      break;
    case '09':
      month = 'September';
      break;
    case '10':
      month = 'October';
      break;
    case '11':
      month = 'November';
      break;
    case '12':
      month = 'December';
      break;
  }
  if(date[2][0] === '0'){
    date[2] = date[2][1];
  }
  if(date[2] === '11' || date[2] === '12'|| date[2] === '13'){
    date[2] += 'th';
  }
  else if(date[2] === '1' || date[2][1] === '1'){
    date[2] += 'st';
  }
  else if(date[2] === '2' || date[2][1] === '2'){
    date[2] += 'nd';
  }
  else if(date[2] === '3' || date[2][1] === '3'){
    date[2] += 'rd';
  }
  else{
    date[2] += 'th';
  }
  return `${month} ${date[2]}, ${date[0]}`;
}

console.log(talkingCalendar("2017/12/01"));
console.log(talkingCalendar("2007/11/02"));
console.log(talkingCalendar("1987/08/03"));
console.log(talkingCalendar("2017/12/07"));
console.log(talkingCalendar("2007/11/05"));
console.log(talkingCalendar("1987/08/19"));
console.log(talkingCalendar("2017/12/11"));
console.log(talkingCalendar("2007/11/12"));
console.log(talkingCalendar("1987/08/13"));
console.log(talkingCalendar("2017/12/18"));
console.log(talkingCalendar("2007/11/15"));
console.log(talkingCalendar("1987/08/20"));
console.log(talkingCalendar("2017/12/21"));
console.log(talkingCalendar("2007/11/22"));
console.log(talkingCalendar("1987/08/23"));
console.log(talkingCalendar("2017/12/24"));
console.log(talkingCalendar("2007/11/25"));
