import HomePage from './pages/Home';
import { CMSConfig, CMSProvider } from "myheadless-react";

function App() {
  const config = new CMSConfig({
    baseURL: "https://myheadless.io/cms",
    apiKey: "your-api-key",
  });
  return (
    <CMSProvider config={config}>
      <HomePage />
    </CMSProvider>
  );
}

export default App;
