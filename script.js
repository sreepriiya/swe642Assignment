// Last Name: NALLA
// Javascript code for Automatically generating City and State fields using Zip code 
document.addEventListener('DOMContentLoaded', function() {
    var zipCodeInput = document.getElementById('zipCode');
    var cityNewValue = document.getElementById('city');
    var stateNewValue = document.getElementById('state');
  
    zipCodeInput.addEventListener('blur', handleZipCodeBlur);
  
    function handleZipCodeBlur() {
      var zipCode = zipCodeInput.value;

        // Ajax call to retrieve zipcode json file data 
      var asyncRequest = new XMLHttpRequest();
      asyncRequest.open('GET', 'zipcodes.json', true);
      asyncRequest.onload = function() {
        if (asyncRequest.status === 200) {
          var data = JSON.parse(asyncRequest.responseText);
          var zipCodes = data.zipcodes;
          var found = false;
  
          for (var i = 0; i < zipCodes.length; i++) {
            if (zipCodes[i].zip === zipCode) {
                // When the Zip code matches with the example zipcodes 
              cityNewValue.textContent = zipCodes[i].city;
              stateNewValue.textContent = zipCodes[i].state;
              found = true;
              break;
            }
          }
  
          if (!found) {
            // Code for Invalid Zip 
            cityNewValue.textContent = 'Invalid zip';
            stateNewValue.textContent = '';
          }
        }
      };
      asyncRequest.send();
    }
  });
  