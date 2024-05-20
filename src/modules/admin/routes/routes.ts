import {
  RemixiconComponentType,
  RiTv2Line,
  RiToolsLine,
  RiTableLine,
  RiMapLine,
  RiUser2Line,
  RiNurseLine,
  RiUser4Line,
  RiTimeLine,
  RiAddBoxLine,
  RiServiceLine,
  RiTestTubeLine,
  RiUserSettingsLine
} from '@remixicon/react'
import { string, any } from 'zod';




export interface Route {
    name: string;
    path: string;
    icon: RemixiconComponentType;
    // Otros posibles campos dinámicos
    [key: string]: any;
  }
  
 export  interface Routes {
    [key: string]: Route[];
  }
  

const routes:Routes = {
    admin: [
      { name: 'Dashboard', path: '/admin/dashboard', icon: RiTv2Line },
      { name: 'Settings', path: '/admin/settings', icon: RiToolsLine },
      { name: 'Tables', path: '/admin/tables', icon: RiTableLine },
      { name: 'Maps', path: '/admin/maps', icon: RiMapLine },
    ],
    auth: [
      { name: 'Usuarios', path: '/admin/usuarios', icon: RiUser2Line },
      { name: 'Medicos', path: '/admin/medicos', icon: RiNurseLine },
      { name: 'Roles', path: '/admin/maps', icon: RiNurseLine },
      { name: 'Personal', path: '/admin/personal', icon: RiUser4Line },

    ],
    Configuracion: [
      { name: 'Horarios', path: '/landing', icon: RiTimeLine },
      { name: 'Especialidades', path: '/profile', icon: RiAddBoxLine },
      { name: 'Servicicos', path: '/profile', icon: RiServiceLine },
      { name: 'Tratamiientos', path: '/landing', icon:  RiTestTubeLine },
      { name: 'Profile Page', path: '/profile', icon: RiUserSettingsLine },
    ],
 
  };
  
  export default routes;