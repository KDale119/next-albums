"use client"
import DataDisplay from "@/components/DataDisplay";
import {QueryClient, QueryClientProvider, useQuery} from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function Home() {
  return (
      <div className="App">
          <QueryClientProvider client={queryClient}>
        <DataDisplay/>
          </QueryClientProvider>
      </div>
  );
}
