package mobile.nutrition_app;

import android.app.Activity;
import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.view.View;
import android.widget.ImageView;

public class AboutActivity extends Activity implements View.OnClickListener {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_about);

        ImageView facebook1 = (ImageView) findViewById(R.id.vandith_about);
        facebook1.setOnClickListener(this);
        ImageView facebook2 = (ImageView) findViewById(R.id.eswar_about);
        facebook2.setOnClickListener(this);
        ImageView facebook3 = (ImageView) findViewById(R.id.vish_about);
        facebook3.setOnClickListener(this);
        ImageView facebook4 = (ImageView) findViewById(R.id.jas_about);
        facebook4.setOnClickListener(this);
    }
    @Override
    public void onClick(View v) {
        // default method for handling onClick Events..

        switch (v.getId()) {

            case R.id.vandith_about:
                Intent fb1Intent = new Intent(Intent.ACTION_VIEW);
                fb1Intent.setData(Uri.parse("https://www.facebook.com/VandithThotla"));
                startActivity(fb1Intent);
                break;

            case R.id.eswar_about:
                Intent fb2Intent = new Intent(Intent.ACTION_VIEW);
                fb2Intent.setData(Uri.parse("https://www.facebook.com/EswarValluru"));
                startActivity(fb2Intent);
                break;

            case R.id.vish_about:
                Intent fb3Intent = new Intent(Intent.ACTION_VIEW);
                fb3Intent.setData(Uri.parse("https://www.facebook.com/vishnuvardhanreddymanne"));
                startActivity(fb3Intent);
                break;

            case R.id.jas_about:
                Intent fb4Intent = new Intent(Intent.ACTION_VIEW);
                fb4Intent.setData(Uri.parse("https://www.facebook.com/saijaswanth.gattidi.1"));
                startActivity(fb4Intent);
                break;

            default:
                break;
        }
    }


}