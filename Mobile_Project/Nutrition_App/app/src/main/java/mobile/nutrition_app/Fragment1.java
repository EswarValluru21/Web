package mobile.nutrition_app;


import android.graphics.Typeface;
import android.os.Bundle;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;

public class Fragment1 extends Fragment implements View.OnClickListener {

    Button b1, b2;
    View view;
    FragmentsCommunicator fc;
    Typeface tf;


    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        view = inflater.inflate(R.layout.f1_layout, container, false);



        b1 = (Button) view.findViewById(R.id.maleBtn);
        b2 = (Button) view.findViewById(R.id.femaleBtn);
        b1.setOnClickListener(this);
        b2.setOnClickListener(this);

        return view;
    }

    @Override
    public void onClick(View view) {
        fc = (FragmentsCommunicator) getActivity();

        if (view.getId() == R.id.maleBtn){
            fc.respond("male", 0);

        }else if (view.getId() == R.id.femaleBtn){
            fc.respond("female", 0);
        }
    }
}
