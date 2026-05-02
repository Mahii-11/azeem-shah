import HomePage from "./pages/HomePage";
import MediaPage from "./pages/MediaPage";
import ContactPage from "./pages/ContactPage";
import { Route, Switch } from "wouter";
import FloatingSocialSidebar from "./layout/FloatingSocialSidebar";

export default function App() {
  return (
    <>
      <FloatingSocialSidebar />
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/media" component={MediaPage} />
        <Route path="/contact" component={ContactPage} />
        <Route>
          <HomePage />
        </Route>
      </Switch>
    </>
  )
}
