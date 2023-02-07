import { useState } from 'react';
import { trpc } from './utils/trpc';
import { httpBatchLink } from '@trpc/client';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

import NotesList from './components/NotesList';

export default function App () {

  const [queryClient] = useState(() => new QueryClient()); 
 const [trpcClient] = useState( () => 
  trpc.createClient({
    links: [
      httpBatchLink({
        url: 'http://localhost:3000/trpc',
        headers() {
            return {
              authorization: ''
            }
        },
      })
    ]
  })
 )

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <NotesList />
      </QueryClientProvider>
    </trpc.Provider>
  );
}
