import React from 'react'

export const Card1 = () => {
  return (
    <div className="mt-24 first:mt-0">
    <div id="block-header" className="sm:flex sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
            <h2 id="account-and-user-management-1" className="-ml-[1em] cursor-pointer font-medium text-slate-900 sm:text-lg 
            scroll-mt-20 md:scroll-mt-24 before:mr-2 before:font-medium before:text-slate-400 before:opacity-0 before:content-['#']
             transition-opacity hover:before:opacity-100">
                <a href="#account-and-user-management-1">Account and User Management 1</a>
            </h2>
            <div className="flex items-center gap-2" />
        </div>
    </div>
    <div className="mt-6 flex items-center justify-between overflow-visible">
        <div id="set-device-view-buttons" className="flex items-center justify-between rounded-lg bg-slate-100/70 p-0.5 text-sm 
                    ring-1 ring-slate-100">
            <button type="button" className="rounded-md px-2 py-1.5 sm:px-3 sm:py-1.5 bg-white
                         text-slate-900 font-medium shadow-sm ring-1 ring-slate-200" disabled={true}>
                <div className="flex items-center space-x-2">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        fill="currentColor" className="remixicon h-5 w-5 text-blue-500">
                        <path d="M12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3ZM12.0003 19C16.2359 19 19.8603 16.052 20.7777 12C19.8603 7.94803 16.2359 5 
                                    12.0003 5C7.7646 5 4.14022 7.94803 3.22278 12C4.14022 16.052 7.7646 19 12.0003 19ZM12.0003 16.5C9.51498 16.5 7.50026 14.4853 7.50026 12C7.50026 9.51472 9.51498 7.5 12.0003 7.5C14.4855 7.5 16.5003 9.51472 16.5003 12C16.5003 14.4853 14.4855 16.5 12.0003 
                                    16.5ZM12.0003 14.5C13.381 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.381 9.5 12.0003 9.5C10.6196 9.5 9.50026 10.6193 9.50026 12C9.50026 13.3807 10.6196 14.5 12.0003 14.5Z" /></svg> <span className="hidden sm:block">Preview</span>
                </div>
            </button>
            <button type="button" className="rounded-md px-2 py-1.5 sm:px-3 sm:py-1.5 text-slate-600 font-medium ring-1 ring-transparent">
                <div className="flex items-center space-x-2">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                        className="remixicon h-5 w-5 text-slate-600 font-medium ring-1 ring-transparent">
                        <path d="M24 12L18.3431 17.6569L16.9289 16.2426L21.1716 12L16.9289 7.75736L18.3431 6.34315L24 12ZM2.82843 12L7.07107 
                        16.2426L5.65685 17.6569L0 12L5.65685 6.34315L7.07107 7.75736L2.82843 12ZM9.78845 21H7.66009L14.2116 3H16.3399L9.78845 21Z" />
                    </svg>
                    <span className="hidden sm:block">Code</span>
                </div>
            </button>
        </div>
        <div className="flex items-center gap-2">
            <button type="button" aria-label="Dark mode toggle" className="rounded-lg p-2 text-slate-500 hover:text-slate-400">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" aria-hidden="true" className="remixicon size-5">
                    <path d="M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM11 1H13V4H11V1ZM11 
                                                    20H13V23H11V20ZM3.51472 4.92893L4.92893 3.51472L7.05025 5.63604L5.63604 7.05025L3.51472 4.92893ZM16.9497 18.364L18.364 16.9497L20.4853 
                                                    19.0711L19.0711 20.4853L16.9497 18.364ZM19.0711 3.51472L20.4853 4.92893L18.364 7.05025L16.9497 5.63604L19.0711 3.51472ZM5.63604
                                                     16.9497L7.05025 18.364L4.92893 20.4853L3.51472 19.0711L5.63604 16.9497ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z" />
                </svg>
            </button>
            <div className="h-6 w-px bg-slate-200" />
            <button type="button" aria-label="Copy code" className="group rounded-lg p-1.5 undefined">
                <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-all">
                    <path d="M14 9.5V7C14 5.89543 13.1046 5 12 5H7C5.89543 5 5 5.89543 5 7V12C5 13.1046 5.89543 14 7 14H9.5" strokeWidth={1.5} className="stroke-slate-500 group-hover:stroke-slate-400 transition-all" />
                    <rect x="10" y="10" width="9" height="9" rx="2" strokeWidth={1.5} className="fill-slate-500/0 stroke-slate-500 group-hover:stroke-slate-400 transition-all" />
                    <path d="M12 9L10 11L14 15" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" strokeDasharray="8.5" strokeDashoffset={8.5} className="stroke-slate-900/0 transition-opacity" />
                </svg>
            </button>
        </div>
    </div>
</div>
  )
}
