/* 4ESuscStripe

Copyright (c) 2020 4EVR and Hirosato Matsuura
Released under the MIT license
https://opensource.org/licenses/mit-license.php

*/

// Stripe API Key'
var stripe = Stripe('pk_test..');
var elements = stripe.elements();
// Custom Styling
var style = {
    base: {
  fontSize: '18px',
  lineHeight: '24px',
  padding: '10px 10px',
  boxSizing: 'border-box',
  borderRadius: '5px',
  border: '#b6b6b6 1px solid',
        '::placeholder': {
            color: '#aab7c4'
        }
    },
    invalid: {
        color: '#fa755a',
        iconColor: '#fa755a'
    }
};
// Create an instance of the card Element
var card = elements.create('card', {style: style, hidePostalCode: true});
// Add an instance of the card Element into the `card-element` <div>
card.mount('#card-element');
// Handle real-time validation errors from the card Element.
card.addEventListener('change', function(event) {
    var displayError = document.getElementById('card-errors');
if (event.error) {
        displayError.textContent = event.error.message;
    } else {
        displayError.textContent = '';
    }
});
// Handle form submission
var form = document.getElementById('payment-form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
stripe.createToken(card).then(function(result) {
        if (result.error) {
            // Inform the user if there was an error
            var errorElement = document.getElementById('card-errors');
            errorElement.textContent = result.error.message;
        } else {
            stripeTokenHandler(result.token);
        }
    });
});
// Send Stripe Token to Server
function stripeTokenHandler(token) {
    // Insert the token ID into the form so it gets submitted to the server
    var form = document.getElementById('payment-form');
// Add Stripe Token to hidden input
    var hiddenInput = document.createElement('input');
    hiddenInput.setAttribute('type', 'hidden');
    hiddenInput.setAttribute('name', 'stripeToken');
    hiddenInput.setAttribute('value', token.id);
    form.appendChild(hiddenInput);
// Submit form
    form.submit();
}
