import HomePage from './pages/Home';
import { CMSConfiguration, CMSProvider } from "myheadless-react";

function App() {
  const config = new CMSConfiguration(
    "https://myheadless.io/cms",
    "your-api-key",
  );
  return (
    <CMSProvider config={config}>
      <HomePage />
    </CMSProvider>
  );
}

export default App;
