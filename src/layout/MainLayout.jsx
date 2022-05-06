import { useRouter } from "next/router";
import Header from "@containers/Header";
import Nav from "@common/Nav";

const MainLayout = ({ children })=>{
  const router = useRouter();
  const route = router.pathname.substring(1);
  return(
    <>
      <div className="min-h-full">
        {
          (route === "" || route === 'login') ? null : 
          <>
          <Header /> 
          <Nav />
          </>
        }
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </>
  );
};

export default MainLayout;