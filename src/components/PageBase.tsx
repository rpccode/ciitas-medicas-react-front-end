import { FC, PropsWithChildren } from "react";

interface PageBaseProps {
    pageName: string;
    PageTitle: string;
  }
const PageBase:FC<PropsWithChildren<PageBaseProps>> = ({children,pageName,PageTitle}) => {
  return (
    <>
      <div className="w-full  px-4">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
          <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full max-w-full flex-grow flex-1">
                <h6 className="uppercase text-blueGray-400 mb-1 text-xs font-semibold">
                  {pageName}
                </h6>
                <h2 className="text-blueGray-700 text-xl font-semibold">
                  {PageTitle}
                </h2>
              </div>
            </div>
          </div>
          <div className="p-4 flex-auto">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default PageBase;
