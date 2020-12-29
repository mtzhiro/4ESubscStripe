<?php
require_once('/..../stripe/init.php');
\Stripe\Stripe::setApiKey("sk_test_........);
// Get the token from the JS script
$token = $_REQUEST['stripeToken'];
// Create a Customer
$customer = \Stripe\Customer::create(array(
//    "email" => "paying.user3@example.com",
    "email" => $_REQUEST['email'],
    "source" => $token,
));
// Subscribe the customer to the plan
$subscription = \Stripe\Subscription::create(array(
  "customer" => $customer->id,
  'items' => [
    ['price' => 'price_1.....'], // brung price plan from Stripe
  ],
));

?>
