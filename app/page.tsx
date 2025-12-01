import ThemeToggle from "./theme-toggle";

export default function Home() {
  return (
    <main className="flex justify-center mt-16 px-4 relative">
    
      <div className="absolute top-4 right-4">
      <ThemeToggle />
      </div>

      <div className="max-w-prose w-full flex flex-col items-start text-left">
        <h1 className="text-left text-3xl font-bold mb-6 text-[#2596be]">Joseph McKenzie</h1>

        <p className="text-lg leading-relaxed">
          Hello World! I'm Joseph, a developer passionate about making the world a better place
          and building a brighter future one line of code at a time. Most of my work lies at the
          intersection of computer science and biology, but I am always looking for new experiences 
          to expand my horizons!
        </p>
        <br></br>
        <p className="text-lg leading-relaxed">
          Last summer, I worked at Los Alamos National Laboratories. My work centered around the
          applications of machine learning to solve some of the most pressing questions in medicine.
          I also developed AI agent systems to help run complex molecular dynamics simulations.
        </p>
        <br></br>
        <p className="text-lg leading-relaxed">
          Before that, I worked as a bioinformatics research intern at the University of Kansas. 
          My research involved computationally modeling protein peptide interactions 
          with HPEPDOCK and gaussian accelerated molecular dynamics simulations.
        </p>
        <br></br>
        <p className="text-lg leading-relaxed">
          Outside of school and work, you can usually find me at the gym, travelling somewhere new, 
          drawing pictures, or playing games!
        </p>
      </div>
    </main>
  );
}




