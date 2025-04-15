export default function Contact() {
  return (
    <div className="p-6 max-w-xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <form className="space-y-4">
        <input type="text" placeholder="Name" className="w-full p-2 border rounded" />
        <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
        <textarea placeholder="Your message" className="w-full p-2 border rounded h-32" />
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Send</button>
      </form>
    </div>
  );
}
