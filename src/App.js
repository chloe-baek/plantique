import { Outlet } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Nav from './components/Nav';
import { UserContextProvider } from './components/context/UserContext';

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserContextProvider>
        <Nav />
        <Outlet />
      </UserContextProvider>
    </QueryClientProvider>
  );
}

export default App;
