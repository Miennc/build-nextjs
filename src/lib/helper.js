export const calcDate = (startTime, endTime) => {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  var checkStart = Math.abs(new Date() - new Date(startTime));
  if (checkStart < 0) {
    const dd = String(new Date(startTime).getDate()).padStart(2, "0");
    const mm = monthNames[String(new Date(startTime).getMonth())];
    const yyyy = new Date(startTime).getFullYear();
    const hour = new Date(startTime).getHours();
    const minus = new Date(startTime).getMinutes();
    return `Early start <br/> at ${hour}:${minus} </br/> on ${dd}, ${mm} ${yyyy}`;
  }

  var checkEnd = Math.abs(new Date() - new Date(endTime));
  if (checkEnd > 0) {
    const dd = String(new Date(endTime).getDate()).padStart(2, "0");
    const mm = monthNames[String(new Date(endTime).getMonth())];
    const yyyy = new Date(endTime).getFullYear();
    const hour = new Date(endTime).getHours();
    const minus = new Date(endTime).getMinutes();
    return `Ended <br/> at ${hour}:${minus} </br/> on ${dd}, ${mm} ${yyyy}`;
  }
};

export const formatDate = (time) => {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const dd = String(new Date(time).getDate()).padStart(2, "0");
  const mm = monthNames[String(new Date(time).getMonth())];
  const yyyy = new Date(time).getFullYear();
  return `${dd}, ${mm} ${yyyy}`;
};

export const formatMoney = (money) => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    currencyDisplay: "symbol",
    minimumFractionDigits: 0,
  }).format(parseFloat(money));
};

export const keywords = (str) => {
  return str.split(" ");
};
