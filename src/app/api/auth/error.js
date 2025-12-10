export default function AuthError({ error }) {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <h1 className="text-red-500 text-2xl font-semibold">
        Login failed: {error || "Unknown error occurred"}
      </h1>
    </div>
  );
}
