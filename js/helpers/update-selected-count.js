export default ticketPrice => {
  let selectedSeats = document.querySelectorAll(
    '.seats-container .seat.seat--selected'
  );

  const selectedSeatsCount = selectedSeats.length;
  const countSpanElement = document.getElementById('count');
  const totalSpanElement = document.getElementById('total');

  countSpanElement.innerText = selectedSeatsCount;
  totalSpanElement.innerText = selectedSeatsCount * ticketPrice;
};
