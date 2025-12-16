function speedCheck(speed, limit) {
  const speedKPH = speed * 1.60934;
  const difference = speedKPH - limit;
  
  if (difference <= 0) {
    return "Not Speeding";
  } else if (difference <= 5) {
    return "Warning";
  } else {
    return "Ticket";
  }
