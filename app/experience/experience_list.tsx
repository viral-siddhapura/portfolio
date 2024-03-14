import BackendSkills from "./backend_skills";
import BankOfAmerica from "./bank_of_america";
import CloudAndDevOpsSkills from "./cloud_dev_ops_skills";
import DatabaseSkills from "./database_skills";
import FrontendSkills from "./frontend_skills";
import GlobalITInfoSolutions from "./globalit";
import PersuasiveComputingLab from "./persuasive_computing_lab";

export default function ExperienceList() {
    return (
        <>
            <div>
                <div className="flex flex-row justify-evenly gap-10">
                    <div className="flex flex-col basis-1/3 experience_card_left_to_right bg-zinc-800 dark:bg-none rounded-lg dark:hover:shadow-md dark:hover:shadow-slate-300 hover:shadow-md hover:shadow-gray-700">
                        <PersuasiveComputingLab />
                    </div>
                    <div className="flex flex-col basis-1/3 experience_card_zoomIn bg-zinc-800 rounded-md hover:shadow-md hover:shadow-slate-300">
                        <BankOfAmerica/>
                    </div>
                    <div className="flex flex-col basis-1/3 experience_card_right_to_left bg-zinc-800 rounded-md hover:shadow-md hover:shadow-slate-300">
                        <GlobalITInfoSolutions/>
                    </div>
                </div>
                <div className="flex flex-row justify-evenly mt-40">
                    <div className="flex flex-col basis-1/4 experience_card_left_to_right bg-zinc-800 shadow-lg shadow-amber-200 rounded-lg hover:shadow-md hover:shadow-slate-300">
                        <FrontendSkills/>
                    </div>
                    <div className="flex flex-col basis-1/4 experience_card_right_to_left bg-zinc-800 shadow-lg shadow-lime-200 rounded-lg hover:shadow-md hover:shadow-slate-300">
                        <BackendSkills/>
                    </div>
                </div>
                <div className="flex flex-row justify-evenly mt-20">
                    <div className="flex flex-col basis-1/4 experience_card_left_to_right bg-zinc-800 shadow-lg shadow-cyan-200 rounded-lg hover:shadow-md hover:shadow-slate-300">
                        <DatabaseSkills/>
                    </div>
                    <div className="flex flex-col basis-1/4 experience_card_right_to_left bg-zinc-800 shadow-lg shadow-rose-200 rounded-lg hover:shadow-md hover:shadow-slate-300">
                        <CloudAndDevOpsSkills/>
                    </div>
                </div>
            </div>
        </>
    )
}