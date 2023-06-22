export const dateTimeFormatter = (date) => {
  const givenTime = new Date(date);
  let hours = givenTime.getHours();
  let minutes = givenTime.getMinutes();
  const year = givenTime.getFullYear();
  const month = givenTime.getMonth();
  const day = givenTime.getDate();

  // Check whether AM or PM
  const amPm = hours >= 12 ? 'PM' : 'AM';
              
  // Find current hour in AM-PM Format
  hours = hours % 12;
    
  // To display "0" as "12"
  hours = hours ? hours : 12;
  hours = hours < 10 ? `0${hours}`: hours;
  minutes = (minutes < 10) ? (`0${minutes}`) : minutes;

  const formattedTime = `${hours} : ${minutes} ${amPm}`;
  const formattedDate = `${day}/${month}/${year} `;
  const formattedDateNTime = `${formattedDate} ${formattedTime}`;

  return formattedDateNTime;
};
