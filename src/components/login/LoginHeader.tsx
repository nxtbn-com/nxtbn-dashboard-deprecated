import { Link } from "react-router-dom";



function LoginHeader() {

  return (
    <section className="absolute top-0 md:right-[5%] right-0">
      <div className="md:text-base-100 font-nunito flex justify-end items-center gap-10 h-24">
        <Link to="https://docs.nxtbn.com/" className="md:hover:text-base-200" target="_blank">Documentation</Link>
      </div>
    </section>
  );
}

export default LoginHeader;
