import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Navigation from './App/Nav/Navigation'
import { QueryClient, QueryClientProvider } from "react-query";

export default function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar
        animated={true}/>
      <Navigation />
    </QueryClientProvider>
  );
}