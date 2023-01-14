import { QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/Home";
import { queryClient } from "./service/tanstackQuery";
import "react-color-palette/lib/css/styles.css";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
}

export default App;
