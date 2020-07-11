package com.app.eswar.Pizza;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.view.View;
import android.widget.CheckBox;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import org.apache.commons.lang3.BooleanUtils;

public class PizzaOrder extends AppCompatActivity {

    private static final String MAIN_ACTIVITY_TAG = "MainActivity";
    final int FRAPPUCCINO = 5;
    final int HOT_CHOCOLATE_MOCHA = 3;
    final int COLD_COFFEE = 2;
    final int HOT_COFFEE = 4;
    final int COFFEE_PRICE = 1;
    final int WHITE_CHOCOLATE_MOCHA = 4;
    int quantity = 3;
    String order_Summary;
    float total_price;
    EditText userNameValue;
    TextView quantityTextView;
    CheckBox frappuccinoChecked, hot_chocolate_mochaChecked, cold_coffeeChecked, hot_coffeeChecked, white_chocolate_mochaChecked;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.pizza_order);

        // Fetching By Id's
        quantityTextView = findViewById(R.id.quantity_text_view);
        userNameValue = findViewById(R.id.name);
        frappuccinoChecked = findViewById(R.id.frappuccino_checkbox);
        hot_chocolate_mochaChecked = findViewById(R.id.hot_chocolate_mocha_checkbox);
        cold_coffeeChecked = findViewById(R.id.cold_coffee_checkbox);
        hot_coffeeChecked = findViewById(R.id.hot_coffee_checkbox);
        white_chocolate_mochaChecked = findViewById(R.id.white_chocolate_mocha_checkbox);
    }

    // Check for UserName error
    private boolean isUserEmpty(){
        // Checking If username is present or not
        String userName = userNameValue.getText().toString();
        if(userName == null || userName.isEmpty()){
            Context context = getApplicationContext();
            String upperLimitToast = "User Name is Required";
            int duration = Toast.LENGTH_SHORT;
            Toast toast = Toast.makeText(context, upperLimitToast, duration);
            toast.show();
            return true;
        }
        return false;
    }

    // Fetch Details
    private String fetchDetails() {
        boolean frapFlag = frappuccinoChecked.isChecked();
        boolean hcmFlag = hot_chocolate_mochaChecked.isChecked();
        boolean hcFlag = hot_coffeeChecked.isChecked();
        boolean ccFlag = cold_coffeeChecked.isChecked();
        boolean whiteFlag = white_chocolate_mochaChecked.isChecked();

        // Get the Total Price.
        total_price = calculatePrice(frapFlag, hcmFlag, hcFlag, ccFlag, whiteFlag, quantity);
        // Creating Order Summary
        return initiateOrderSummary(userNameValue.getText().toString(), frapFlag, hcmFlag, hcFlag, ccFlag, whiteFlag, total_price);
    }

    // On Click of Order Summary
    public void getOrderSummary(View view) {
        if (!isUserEmpty()) {
            order_Summary = fetchDetails();
            Intent intent = new Intent(PizzaOrder.this, Summary.class);
            intent.putExtra("orderSummary", order_Summary);
            startActivity(intent);
        }
    }

    // OnClick of Order
    public void coffeeMainOrderMail(View view) {
        if (!isUserEmpty()) {
            order_Summary = fetchDetails();
            Intent emailIntent = new Intent(Intent.ACTION_SEND);
            // The intent does not have a URI, so declare the "text/plain" MIME type
            emailIntent.setType("plain/text");
            // Recipients
            emailIntent.putExtra(Intent.EXTRA_EMAIL, new String[] {"CoffeeBar@gmail.com"});
            // Adding Subject
            emailIntent.putExtra(Intent.EXTRA_SUBJECT, "Order Summary");
            // Adding the Order Summary Text
            emailIntent.putExtra(Intent.EXTRA_TEXT, order_Summary);
            // Redirecting to Email Intent
            startActivity(Intent.createChooser(emailIntent, ""));
        }
    }



    private String initiateOrderSummary(String userInputName, boolean hasFrappucino, boolean hasHotChocolate,  boolean hasHotCoffee, boolean hasColdChocolate, boolean hasWhiteChocolate, float price) {
        String orderSummaryMessage = getString(R.string.order_summary_name, userInputName) + "\n" +
                getString(R.string.os_frappuccino, BooleanUtils.toStringYesNo(hasFrappucino)) + "\n" +
                getString(R.string.os_hot_chocolate_mocha, BooleanUtils.toStringYesNo(hasHotChocolate)) + "\n" +
                getString(R.string.os_cold_coffee, BooleanUtils.toStringYesNo(hasColdChocolate)) + "\n" +
                getString(R.string.os_hot_coffee, BooleanUtils.toStringYesNo(hasHotCoffee)) + "\n" +
                getString(R.string.os_white_chocolate_mocha, BooleanUtils.toStringYesNo(hasWhiteChocolate)) + "\n" +
                getString(R.string.order_summary_quantity, quantity) + "\n" +
                getString(R.string.order_summary_total_price, price) + "\n" +
                getString(R.string.thank_you);
        return orderSummaryMessage;
    }

    /**
     * Method to calculate the total price
     *
     * @return total Price
     */
    private float calculatePrice(boolean hasFrappucino, boolean hasHotChocolate,  boolean hasHotCoffee, boolean hasColdChocolate, boolean hasWhiteChocolate, Integer quantity) {
        int basePrice = COFFEE_PRICE;
        if (hasFrappucino) {
            basePrice += FRAPPUCCINO;
        }
        if (hasHotChocolate) {
            basePrice += HOT_CHOCOLATE_MOCHA;
        }
        if (hasColdChocolate) {
            basePrice += COLD_COFFEE;
        }
        if (hasHotCoffee) {
            basePrice += HOT_COFFEE;
        }
        if (hasWhiteChocolate) {
            basePrice += WHITE_CHOCOLATE_MOCHA;
        }
        return quantity * basePrice;
    }

    /**
     * This method displays the given quantity value on the screen.
     */
    private void display(int number)
    {
        quantityTextView.setText("" + number);
    }

    /**
     * This method increments the quantity of coffee cups by one
     *
     * @param view on passes the view that we are working with to the method
     */

    public void increment(View view) {
        if (quantity < 50) {
            quantity = quantity + 1;
            display(quantity);
        } else {
            Log.i("CoffeeOrder", "Please select less than 50 cups of coffee");
            Context context = getApplicationContext();
            String lowerLimitToast = "You have selected more than 49 cups of coffee";
            int duration = Toast.LENGTH_SHORT;
            Toast toast = Toast.makeText(context, lowerLimitToast, duration);
            toast.show();
            return;
        }
    }

    /**
     * This method decrements the quantity of coffee cups by one
     *
     * @param view passes on the view that we are working with to the method
     */
    public void decrement(View view) {
        if (quantity > 1) {
            quantity = quantity - 1;
            display(quantity);
        } else {
            Log.i("CoffeeOrder", "Please select atleast one item");
            Context context = getApplicationContext();
            String upperLimitToast = "Please select atleast one coffee";
            int duration = Toast.LENGTH_SHORT;
            Toast toast = Toast.makeText(context, upperLimitToast, duration);
            toast.show();
            return;
        }
    }


}
