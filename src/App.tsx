import AppRouter from "./routes/AppRouter";
import useLenis from "./hooks/useLenis";
import CursorGlow from "./components/effects/CursorGlow";

function App() {

  useLenis();
  return(
     <> 
      <CursorGlow />
      <AppRouter />
    </>)
    ;
}

export default App;