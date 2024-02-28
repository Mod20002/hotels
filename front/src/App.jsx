import useAuth from "./hooks/useAuth";
import AppRouter from "./routes/AppRouter";

function App() {
  const {loading} = useAuth()

  if(loading) {
    return (
      <p className="loading loading-spinner text-error">Loading..</p>
    )
  }

  return (
    <div className="min-h-screen">
      <AppRouter />
    </div>
  );
}

export default App;
