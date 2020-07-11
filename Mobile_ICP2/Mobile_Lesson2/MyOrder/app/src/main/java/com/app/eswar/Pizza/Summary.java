package com.app.eswar.Pizza;

import android.annotation.SuppressLint;
import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.text.Html;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

public class Summary extends AppCompatActivity {
    TextView summary;
    Button OrderSubmit;
    @SuppressLint("SetTextI18n")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.order_summary);
        summary = findViewById(R.id.summaryText);
        OrderSubmit = findViewById(R.id.orderCoffee);
        summary.setText(Html.fromHtml("<u>Your Order Summary</u><br/><br/>"));
        if (getIntent() != null) {
            summary.append(getIntent().getStringExtra("orderSummary"));
        } else {
            summary.setText("Dude No Orders Yet!!");
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
        Intent intent = new Intent(Summary.this, PizzaOrder.class);
        startActivity(intent);
    }

}
