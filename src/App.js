import { Suspense, lazy } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
const Home = lazy(()=> import('../src/components/pages/Home'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div/>}>
        <Switch>
            <Route path="/" component={Home} />
        </Switch>
        </Suspense>
    </Router>
  );
}

export default App;
