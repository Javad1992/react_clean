import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import UserProfile from './user-feature/presentation/components/UserProfile';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <div className="App">
      <UserProfile />
    </div>
    </QueryClientProvider>
  );
}

export default App;
