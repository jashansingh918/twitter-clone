import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="p-6">
        <h2 className="text-2xl font-bold">Home Feed</h2>
        <p className="text-gray-600">Tweets will appear here...</p>
      </main>
    </div>
  );
}
