import FormPage from "../../features/ContactUsPage/component/form";
import SideBar from "../../features/ContactUsPage/component/sidebar";

export default function ContactUsPage() {
  return (
    <>
      <div className="md:flex md:gap-8 px-5 mt-20 md:mt-10 md:px-25 md:py-5">
        <div className="flex-1">{<FormPage/>}</div>
        <SideBar />
      </div>
    </>
  );
}
