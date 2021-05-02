import React , {useState} from 'react';
import Features from './Features/Features';
import Header from './Header/Header';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Banner from './Banner/Banner';
import Add from './Add/Add';
import Query from './Query/Query';

// import Feature
import Features_Method from './Feature_Constrain';
import FeatureDetail from './Features/Feature/FeatureDetail';

const App = () => {

    const [feature_id , setFeature_id] = useState(0);
  
    return(
        <Router>
          <div>
          <Header/>
            <Switch>
              {/* Index Page */}
              <Route path="/" exact><Banner/><Features setFeature_id={setFeature_id} Features_Method = {Features_Method}/></Route>

              {/* AddPage */}
              <Route path="/add"><Add/></Route>

              {/* QueryPage */}
              <Route path="/query"><Query/></Route>

              {/* Feature */}
              <Route path="/featureDetail"><FeatureDetail feature_id={feature_id} Features_Method = {Features_Method}/></Route>
            </Switch>
          </div>
        </Router>
    )

}

export default App;