"use client";

export default function Home() {
  const makeRequest = async (endpoint: string) => {
    const response = await fetch(endpoint);
    const data = await response.json();
    console.log(endpoint, data);
  }
  
  return (
    <main className="p-24">
      <h1 className="text-3xl font-bold">Main app</h1>
      <div className="flex flex-wrap gap-3 mt-6">
        <button onClick={() => makeRequest('https://api.sampleapis.com/coffee/hot')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Direct request
        </button>    
        <button onClick={() => makeRequest('/proxy/coffee/hot')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Proxy (Config rewrite) request without slash
        </button>    
        <button onClick={() => makeRequest('/proxy/coffee/hot/')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Proxy (Config rewrite) request with slash
        </button>
        <button onClick={() => makeRequest('/api/proxy/coffee/hot')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Proxy (API route) request without slash
        </button>    
        <button onClick={() => makeRequest('/api/proxy/coffee/hot/')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Proxy (API route) request with slash
        </button>
      </div>
    </main>
  );
}
