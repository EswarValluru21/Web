package mobile.nutrition_app;


import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;

import androidx.fragment.app.Fragment;


public class AboutFragment extends Fragment {


    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.fragment_about, container, false);

        ImageView facebook1 = (ImageView) view.findViewById(R.id.vandith_about);
        facebook1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                try {
                    Intent fbIntent = new Intent(Intent.ACTION_VIEW);
                    fbIntent.setData(Uri.parse("https://www.facebook.com/VandithThotla"));
                    startActivity(fbIntent);
                } catch (Exception e) {}
            }
        });

        ImageView facebook2 = (ImageView) view.findViewById(R.id.eswar_about);
        facebook2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                try {
                    Intent tIntent = new Intent(Intent.ACTION_VIEW);
                    tIntent.setData(Uri.parse("https://www.facebook.com/EswarValluru"));
                    startActivity(tIntent);
                } catch (Exception e) {}
            }
        });
        ImageView facebook3 = (ImageView) view.findViewById(R.id.eswar_about);
        facebook3.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                try {
                    Intent tIntent = new Intent(Intent.ACTION_VIEW);
                    tIntent.setData(Uri.parse("https://www.facebook.com/vishnuvardhanreddymanne"));
                    startActivity(tIntent);
                } catch (Exception e) {}
            }
        });
        ImageView facebook4 = (ImageView) view.findViewById(R.id.eswar_about);
        facebook4.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                try {
                    Intent tIntent = new Intent(Intent.ACTION_VIEW);
                    tIntent.setData(Uri.parse("https://www.facebook.com/saijaswanth.gattidi.1"));
                    startActivity(tIntent);
                } catch (Exception e) {}
            }
        });
        return view;
    }

}
