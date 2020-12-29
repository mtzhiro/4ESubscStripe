<form action="/subscstripe.php" method="post" id="payment-form">
    <div>
     クレジットカード番号 
    &nbsp; &nbsp; / &nbsp; &nbsp;  有効期限　 / セキュリティコード
    </div>
    <div id="card-element">
      <!-- a Stripe Element will be inserted here. -->
    </div>
    <!-- Used to display form errors -->
    <div id="card-errors"></div>

<p class="input_btn red_btn sm_wide_btn">
<input type="submit" value="次へ">
</p>
</form>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="https://js.stripe.com/v3/"></script>
<script src="subsc_stripe_token.js"></script>
