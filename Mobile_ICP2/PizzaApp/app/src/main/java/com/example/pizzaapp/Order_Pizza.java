package com.example.pizzaapp;

import android.os.Bundle;
import android.view.View;
import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.util.Log;
import android.widget.CheckBox;
import android.widget.EditText;
import android.widget.Spinner;
import android.widget.TextView;
import android.widget.Toast;
import androidx.appcompat.app.AppCompatActivity;
import org.apache.commons.lang3.BooleanUtils;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;


public class Order_Pizza extends AppCompatActivity implements
        AdapterView.OnItemSelectedListener {
    String[] country = { "Chicken", "Pepperoni", "Sausage", "Veggie Delight"};

    private static final Integer base_rate = 10;
    private static final Integer peppers_rate = 3;
    private static final Integer onions_rate = 2;
    private static final Integer olives_rate = 2;
    private static final Integer tomatoes_rate = 1;
    float totalPrice;
    Integer quantity = 1;
    String orderSummary;

    // From the Layout
    EditText userNameText;
    TextView quantityTextView;
    CheckBox peppersChecked, onionsChecked, olivesChecked, tomatoesChecked;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.pizza_order);

        // Fetching By Id's
        quantityTextView = findViewById(R.id.quantity_text_view);
        userNameText = findViewById(R.id.name);
        peppersChecked = findViewById(R.id.peppers_checkbox);
        onionsChecked = findViewById(R.id.onions_checkbox);
        olivesChecked = findViewById(R.id.olives_checkbox);
        tomatoesChecked = findViewById(R.id.tomatoes_checkbox);




        Spinner spin = (Spinner) findViewById(R.id.spinner);
        spin.setOnItemSelectedListener(this);
        //Creating the ArrayAdapter instance having the country list
        ArrayAdapter aa = new ArrayAdapter(this,android.R.layout.simple_spinner_item,country);
        aa.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
        //Setting the ArrayAdapter data on the Spinner
        spin.setAdapter(aa);
    }

    // Check for UserName error
    private boolean isUserEmpty(){
        // Checking If username is present or not
        String userName = userNameText.getText().toString();
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
        boolean peppersFlag = peppersChecked.isChecked();
        boolean onionsFlag = onionsChecked.isChecked();
        boolean olivesFlag = olivesChecked.isChecked();
        boolean tomatoesFlag = tomatoesChecked.isChecked();

        // Get the Total Price.
        totalPrice = calculatePrice(peppersFlag, onionsFlag, olivesFlag, tomatoesFlag, quantity);
        // Creating Order Summary
        return fetchOrderSummary(userNameText.getText().toString(), peppersFlag, onionsFlag, olivesFlag, tomatoesFlag, totalPrice);
    }

    // On Click of Order Summary
    public void orderSummary(View view) {
        if (!isUserEmpty()) {
            orderSummary = fetchDetails();
            Intent intent = new Intent(Order_Pizza.this, Summary_Order.class);
            intent.putExtra("orderSummary", orderSummary);
            startActivity(intent);
        }
    }

    // OnClick of Order
    public void orderPizzaMain(View view) {
        if (!isUserEmpty()) {
            orderSummary = fetchDetails();
            Intent emailIntent = new Intent(Intent.ACTION_SEND);
            // The intent does not have a URI, so declare the "text/plain" MIME type
            emailIntent.setType("plain/text");
            // Recipients
            emailIntent.putExtra(Intent.EXTRA_EMAIL, new String[] {"PizzaOrder@gmail.com"});
            // Adding Subject
            emailIntent.putExtra(Intent.EXTRA_SUBJECT, "Order Summary");
            // Adding the Order Summary Text
            emailIntent.putExtra(Intent.EXTRA_TEXT, orderSummary);
            // Redirecting to Email Intent
            startActivity(Intent.createChooser(emailIntent, ""));
        }
    }

    // On Click of Order Pizza


    private String fetchOrderSummary(String userName, boolean peppersFlag, boolean onionsFlag,
                                     boolean olivesFlag, boolean tomatoesFlag, float totalPrice) {
        return getString(R.string.order_summary_name,userName) +"\n"+
                getString(R.string.order_summary_peppers, BooleanUtils.toStringYesNo(peppersFlag))+"\n"+
                getString(R.string.order_summary_onions,BooleanUtils.toStringYesNo(onionsFlag)) +"\n"+
                getString(R.string.order_summary_olives,BooleanUtils.toStringYesNo(olivesFlag)) +"\n"+
                getString(R.string.order_summary_tomatoes,BooleanUtils.toStringYesNo(tomatoesFlag)) +"\n"+
                getString(R.string.order_summary_quantity,quantity)+"\n"+
                getString(R.string.order_summary_total_price,totalPrice) +"\n"+
                getString(R.string.thank_you);
    }

    // Method to Calculate total Price
    private float calculatePrice(boolean peppers, boolean onions, boolean olives, boolean tomatoes, Integer quantity) {
        int basePrice = base_rate;
        if (peppers) {
            basePrice += peppers_rate;
        }
        if (onions) {
            basePrice += onions_rate;
        }
        if (olives){
            basePrice += olives_rate;
        }
        if(tomatoes){
            basePrice += tomatoes_rate;
        }
        return quantity * basePrice;
    }

    /**
     * This method increments the quantity of coffee cups by one
     *
     */
    public void more(View view) {
        if (quantity < 50) {
            quantity = quantity + 1;
            display(quantity);
        } else {
            Log.i("PizzaOrder", "Please select less than 50 Pizzas");
            Context context = getApplicationContext();
            String lowerLimitToast = "Not more than 49 pizzas";
            int duration = Toast.LENGTH_SHORT;
            Toast toast = Toast.makeText(context, lowerLimitToast, duration);
            toast.show();
            return;
        }
    }

    /**
     * This method decrements the quantity of coffee cups by one
     *
     */
    public void less(View view) {
        if (quantity > 1) {
            quantity = quantity - 1;
            display(quantity);
        } else {
            Log.i("CoffeOrder", "Please select atleast one Pizza");
            Context context = getApplicationContext();
            String upperLimitToast = "Please select atleast 1 Pizza";
            int duration = Toast.LENGTH_SHORT;
            Toast toast = Toast.makeText(context, upperLimitToast, duration);
            toast.show();
            return;
        }
    }

    // Displays the Quantity
    private void display(int number) {
        quantityTextView.setText("" + number);
    }

    // On Click of Call
    public void callStore(View view) {
        Intent callIntent = new Intent(Intent.ACTION_CALL);
        callIntent.setData(Uri.parse("tel:(123)456-7890"));
        // Redirecting to Email Intent
        startActivity(Intent.createChooser(callIntent, ""));
    }

    @Override
    public void onItemSelected(AdapterView<?> arg0, View arg1, int position, long id) {
        Toast.makeText(getApplicationContext(),country[position] , Toast.LENGTH_LONG).show();
    }

    @Override
    public void onNothingSelected(AdapterView<?> adapterView) {

    }
}