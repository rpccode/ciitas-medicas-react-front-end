import { Outlet } from "react-router-dom"
import registerBgImage from "@/assets/img/register_bg_2.png";

const AuthLayout = () => {
    return (
        <>
            {/* <Navbar transparent /> */}

            <section className="relative w-full h-full py-40 min-h-screen">
                <div
                    className="absolute top-0 w-full h-full bg-blue-900 bg-no-repeat bg-full"
                    style={{
                        backgroundImage:`url(${registerBgImage})`
                    }}
                ></div>
                <Outlet />
                {/* <FooterSmall absolute /> */}
            </section>

        </>
    )
}

export default AuthLayout