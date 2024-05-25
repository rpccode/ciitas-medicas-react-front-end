import BasePage from "@/components/BasePage";
import { PersonalForm } from "../components";
import { BaseTable } from "@/components/BaseTable";

export const PersonalPage = () => {
  return (
    <>
      <BasePage title="Personal"  ModalForm={PersonalForm} >
        <BaseTable/>
      </BasePage>
    </>
  );
};
