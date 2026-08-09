import AppRouter from "./routes/AppRouter";
import useLenis from "./hooks/useLenis";
import CursorGlow from "./components/effects/CursorGlow";

function App() {

  useLenis();
  return(
     <> 
      <div className="site-background">
        <div className="background-image" />
        <div className="background-overlay" />
        <div className="background-grid" />
      </div>
      <CursorGlow />
      <AppRouter />
    </>)
    ;
}

export default App;