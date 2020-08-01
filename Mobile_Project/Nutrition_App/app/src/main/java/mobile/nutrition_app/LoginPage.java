package mobile.nutrition_app;

import android.content.Intent;
import android.os.Bundle;
import android.text.TextUtils;
import android.view.View;
import android.widget.AutoCompleteTextView;
import android.widget.EditText;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import com.google.firebase.auth.AuthResult;
import com.google.firebase.auth.FirebaseAuth;

public class LoginPage extends AppCompatActivity {


    private static final int REQUEST_READ_CONTACTS = 0;


    private static final String[] DUMMY_CREDENTIALS = new String[]{
            "foo@example.com:hello", "bar@example.com:world"
    };

    private FirebaseAuth autherize;

    private AutoCompleteTextView mViewEmail;
    private EditText mViewPassword;
    private View mProgressView;
    private View mLoginFormView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {

        //Get Firebase auth instance
        autherize = FirebaseAuth.getInstance();
        super.onCreate(savedInstanceState);
        setContentView(R.layout.first_screen);
        // Set up the login form.
        mViewEmail = (AutoCompleteTextView) findViewById(R.id.create_username);
        mViewPassword = (EditText) findViewById(R.id.create_password);

    }

    /**
     * Attempts to sign in or register the account specified by the login form.
     * If there are form errors (invalid email, missing fields, etc.), the
     * errors are presented and no actual login attempt is made.
     */
    public void attemptLogin(View v) {

        // Reset errors.
        mViewEmail.setError(null);
        mViewPassword.setError(null);

        // Store values at the time of the login attempt.
        final String email = mViewEmail.getText().toString();
        final String password = mViewPassword.getText().toString();

        // Check for a valid password, if the user entered one.
        if (!TextUtils.isEmpty(password) && !isPasswordValid(password)) {
            mViewPassword.setError(getString(R.string.error_invalid_password));
        }

        // Check for a valid email address.
        if (TextUtils.isEmpty(email)) {
            mViewEmail.setError(getString(R.string.error_field_required));
        } else if (!isEmailValid(email)) {
            mViewEmail.setError(getString(R.string.error_invalid_email));
        }

        //authenticate user
        autherize.signInWithEmailAndPassword(email, password)
                .addOnCompleteListener(LoginPage.this, new OnCompleteListener<AuthResult>() {
                    @Override
                    public void onComplete(@NonNull Task<AuthResult> task) {
                        // If sign in fails, display a message to the user. If sign in succeeds
                        // the auth state listener will be notified and logic to handle the
                        // signed in user can be handled in the listener.

                        if (!task.isSuccessful()) {
                            // there was an error
                            Toast.makeText(LoginPage.this, getString(R.string.auth_fail_msg), Toast.LENGTH_LONG).show();

                        }
                        else {
                            Intent intent = new Intent(LoginPage.this, MainActivity.class);
                            startActivity(intent);
                            finish();
                        }
                    }
                });
    }

    private boolean isEmailValid(String email) {
        return email.contains("@");
    }

    private boolean isPasswordValid(String password) {
        return password.length() > 4;
    }

    public void redirectToSignUpPage(View v) {
        Intent redirect = new Intent(LoginPage.this, CreateAccount.class);
        startActivity(redirect);
    }

    public void redirectToForgotPasswordPage(View v) {
        Intent redirect = new Intent(LoginPage.this, ForgotPasswordPage.class);
        startActivity(redirect);
    }
}