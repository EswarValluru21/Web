package com.example.pizzaapp;

import android.annotation.SuppressLint;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;
import androidx.appcompat.app.AppCompatActivity;
import android.text.Html;
// Create Order Summary
public class Summary_Order extends AppCompatActivity {

    TextView summary;
    Button OrderSubmit;
    @SuppressLint("SetTextI18n")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.order_summary);
        summary = findViewById(R.id.summary);
        OrderSubmit = findViewById(R.id.orderPizza);
        summary.setText(Html.fromHtml("<u>Your Order Summary</u><br/><br/>"));
        if (getIntent() != null) {
            summary.append(getIntent().getStringExtra("orderSummary"));
        } else {
            summary.setText("You have no orders !!");
        }
        summary.append(Html.fromHtml("<br/>"));
        summary.setVisibility(View.VISIBLE);

        OrderSubmit.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                reDirectToOrderingPage();
            }
        });
    }
        public void reDirectToOrderingPage() {
            Intent intent = new Intent(Summary_Order.this, Order_Pizza.class);
            startActivity(intent);
        }

}