package com.app.eswar.Pizza;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;

public class MainActivity extends AppCompatActivity {


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    // On Click of Order Coffee
    public void orderPizza(View view) {
        Intent intent = new Intent(MainActivity.this, PizzaOrder.class);
        startActivity(intent);
    }

    }