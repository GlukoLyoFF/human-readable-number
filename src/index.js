module.exports = function toReadable (number) {
  let readable_numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
                          'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    readable_tens = [0, 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  if (number < readable_numbers.length) {
    return readable_numbers[number];
  };
  let res = '';
  let hundreds = parseInt(number / 100);
  let decimals = number % 100;
  (hundreds > 0) ? res = readable_numbers[hundreds] + ' hundred' : {};
  if (decimals >= 20) {
    res = res + ' ' + readable_tens[parseInt(decimals / 10)];
    (decimals % 10 > 0) ? res = res + ' ' + readable_numbers[decimals % 10] : {};
  } else if (decimals > 0) {
    res = res + ' ' + readable_numbers[decimals];
  };
  (res.startsWith(' ')) ? res = res.slice(1) : {};
  return res;
}
