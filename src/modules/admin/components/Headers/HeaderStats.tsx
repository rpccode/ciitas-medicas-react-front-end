import { RiBarChart2Line, RiPercentLine, RiPieChart2Line, RiUser2Line } from "@remixicon/react";
import CardStats from "../Cards/CardStats";
import { useLocation, useNavigate, useNavigation } from "react-router-dom";
import { useEffect, useState } from "react";
import { StatsList } from "./StatsList";


export default function HeaderStats() {
  const location = useLocation();
  const [mostrarStats, setMostrarStats] = useState(false)

  useEffect(() => {
    setMostrarStats(false)
    if(location.pathname === '/admin/dashboard'){
      setMostrarStats(true);
    }
  }, [location]); 
  return (
    <>
      {/* Header */}
      <div className="relative bg-blue-900 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
         {
             mostrarStats && <StatsList/>
         }
        </div>
      </div>
    </>
  );
}
