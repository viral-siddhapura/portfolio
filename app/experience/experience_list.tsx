import BackendSkills from "./backend_skills";
import BankOfAmerica from "./bank_of_america";
import CloudAndDevOpsSkills from "./cloud_dev_ops_skills";
import DatabaseSkills from "./database_skills";
import FrontendSkills from "./frontend_skills";
import GlobalITInfoSolutions from "./globalit";
import PersuasiveComputingLab from "./persuasive_computing_lab";

export default function ExperienceList() {
    return (
        <div>
            <div className="flex flex-col w-full md:flex-row lg:flex-row justify-evenly gap-10">
                <div className="experience_card_animation">
                    <PersuasiveComputingLab />
                </div>
                <div className="experience_card_animation">
                    <BankOfAmerica />
                </div>
                <div className="experience_card_animation">
                    <GlobalITInfoSolutions />
                </div>
            </div>
            <div className="flex flex-col w-full md:flex-row lg:flex-row justify-evenly mt-40">
                <div className="flex flex-col w-full basis-1/4 md:basis-1/4 lg:basis-1/4 bg-zinc-800 rounded-lg">
                    <FrontendSkills />
                </div>
                <div className="flex flex-col w-full basis-1/4 md:basis-1/4 lg:basis-1/4 bg-zinc-800 rounded-lg">
                    <BackendSkills />
                </div>
            </div>
            <div className="flex flex-col md:flex-row lg:flex-row justify-evenly mt-20">
                <div className="flex flex-col w-full basis-1/4 md:basis-1/4 lg:basis-1/4 bg-zinc-800 rounded-lg">
                    <DatabaseSkills />
                </div>
                <div className="flex flex-col w-full basis-1/4 md:basis-1/4 lg:basis-1/4 bg-zinc-800 rounded-lg">
                    <CloudAndDevOpsSkills />
                </div>
            </div>
        </div>
    )
}