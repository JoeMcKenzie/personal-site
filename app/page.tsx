import ThemeToggle from "./theme-toggle";

export default function Home() {
  return (
    <main className="flex justify-center mt-16 px-4 relative">
    
      <div className="absolute top-4 right-4">
      <ThemeToggle />
      </div>

      <div className="max-w-prose w-full flex flex-col items-start text-left">
        <h1 className="text-left text-5xl font-bold mb-6">Joseph</h1>

        <p className="text-lg leading-relaxed">
          Hi, I'm Joseph, a developer passionate about building clean, modern web
          experiences. I enjoy working with Next.js, TypeScript, and intuitive UI
          design. Welcome to my personal site!
        </p>
      </div>
    </main>
  );
}




