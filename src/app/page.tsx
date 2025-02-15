export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-3xl"> به پروژه من خوش آمدید!</h1>
      </header>
      <main className="flex-grow p-8">
        <p className="text-lg text-gray-700">
          این یک صفحه معرفی ساده است که با استفاده از Next.js 15+ و Tailwind CSS
          ساخته شده است.
        </p>
      </main>
      <footer className="bg-blue-600 text-white p-4 mt-8">
        <p className="text-center">© صفحه معرفی من 1403</p>
      </footer>
    </div>
  );
}
