package mobile.nutrition_app;

import android.content.Intent;
import android.os.Bundle;
import android.text.TextUtils;
import android.view.View;
import android.widget.EditText;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import com.google.firebase.auth.FirebaseAuth;


public class ForgotPasswordPage extends AppCompatActivity {

    private FirebaseAuth autherize;
    private EditText EmailInput;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.forgot_password);

        //Get Firebase auth instance
        autherize = FirebaseAuth.getInstance();

        // Set up the login form.
        EmailInput = (EditText) findViewById(R.id.forgot_email);
    }

    public void resetPassword(View v) {

        String email = EmailInput.getText().toString().trim();

        if (TextUtils.isEmpty(email)) {
            Toast.makeText(getApplication(), "Enter your registered email id", Toast.LENGTH_SHORT).show();
            return;
        }

        autherize.sendPasswordResetEmail(email)
                .addOnCompleteListener(new OnCompleteListener<Void>() {
                    @Override
                    public void onComplete(@NonNull Task<Void> task) {
                        if (task.isSuccessful()) {
                            Toast.makeText(ForgotPasswordPage.this, "We have sent you instructions to reset your password!", Toast.LENGTH_SHORT).show();
                        } else {
                            Toast.makeText(ForgotPasswordPage.this, "Failed to send reset email!", Toast.LENGTH_SHORT).show();
                        }
                    }
                });
    }

    public void goBack(View v) {
        Intent redirect = new Intent(ForgotPasswordPage.this, LoginPage.class);
        startActivity(redirect);
    }
}