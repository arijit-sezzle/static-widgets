class Helper {
   
  
  /**
   * This is helper function for formatPrice
   * @param n char value
   * @return boolean [if it's numeric or not]
   */
  isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }
  

  
  /**
   * This is helper function for formatPrice
   * @param n char value
   * @return boolean [if it's alphabet or not]
   */
  isAlphabet(n) {
    return /^[a-zA-Z()]+$/.test(n);
  }
  
  /**
   * This function will return the price string
   * @param price - string value
   * @param includeComma - comma should be added to the string or not
   * @return string
   */
  parsePriceString(price, includeComma) {
    var formattedPrice = '';
    for (var i = 0; i < price.length; i++) {
      if (this.isNumeric(price[i]) || price[i] == '.' || (includeComma && price[i] == ',')) {
        // If current is a . and previous is a character, it can be something like Rs.
        // so ignore it
        if (i > 0 && price[i] == '.' && this.isAlphabet(price[i - 1])) continue;
  
        formattedPrice += price[i];
      }
    }
    return formattedPrice;
  }
  
  /**
   * This function will format the price
   * @param price - string value
   * @return float
   */
  parsePrice(price) {
    return parseFloat(this.parsePriceString(price, false));
  }
  

  
}

const HelperClass =  new Helper()
export default HelperClass;