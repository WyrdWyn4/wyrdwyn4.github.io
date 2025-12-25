import { Hero } from "@/components/sections/hero";
import { IdeExperience } from "@/components/sections/ide-experience";
import { EducationTerminal } from "@/components/sections/education-terminal";
import { CareerPipeline } from "@/components/sections/career-pipeline";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full animate-in fade-in duration-700">
      <Hero />
      <IdeExperience />
      <EducationTerminal />
      <CareerPipeline />
    </div>
  );
}