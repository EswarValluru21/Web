package com.example.logintemplate;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.graphics.Color;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

public class login extends AppCompatActivity {
    Button b1;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);

        b1 = (Button)findViewById(R.id.logoutb);

        b1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                    Intent launchActivity1= new Intent(login.this,MainActivity.class);
                    startActivity(launchActivity1);

            }
        });
    }
}