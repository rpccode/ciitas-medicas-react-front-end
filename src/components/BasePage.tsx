// src/components/BasePage.tsx
import { RiAddLine } from "@remixicon/react";
import { Icon } from "@tremor/react";
import useModal from "@/hooks/useModal";
import React from "react";
import { ModalBase } from "./Modals/ModalBase";

interface Props {
  children: string | JSX.Element | JSX.Element[] | (() => JSX.Element);
  ModalForm: string | JSX.Element | JSX.Element[] | (() => JSX.Element);
  title: string;
}

const BasePage: React.FC<Props> = ({ children, title, ModalForm }) => {
  const { handleToggleModal, modals } = useModal();
  const isModalOpen = Boolean(modals[title]);
  
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">{title}s</h6>
            <div className="text-center flex justify-between">
              <div className="bg-lightBlue-500 rounded-md text-white mr-1">
                <Icon icon={RiAddLine} size="sm" color="white" />
              </div>
              <button
                className="bg-lightBlue-500 text-center text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => handleToggleModal(title)}
              >
                Nuevo {title}
              </button>
            </div>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          {typeof children === "function" ? children() : children}
          <ModalBase handleOpen={() => handleToggleModal(title)} isOpen={isModalOpen}>
            {typeof ModalForm === "function" ? ModalForm() : ModalForm}
          </ModalBase>
        </div>
      </div>
    </>
  );
};

export default BasePage;
