import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { TempProvider } from "./contexts/TempContext";

//Lazy load page (Although not necessary)
const Home = lazy(() => import("../src/components/pages/Home"));
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TempProvider>
        <Router>
          <Suspense fallback={<div />}>
            <Switch>
              <Route path="/" component={Home} />
            </Switch>
          </Suspense>
        </Router>
      </TempProvider>
    </QueryClientProvider>
  );
}

export default App;
