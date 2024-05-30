import { Link } from "react-router-dom";
import close from '../../assets/close.png'
import menu from '../../assets/menu.png'



function LoginHeader() {

  return (
    <section>
      <div className="md:text-base-100  font-nunito flex justify-end items-center gap-10 h-24">
        <Link to="https://docs.nxtbn.com/" className="md:hover:text-base-200" target="_blank">Documentation</Link>
      </div>
    </section>
  );
}

export default LoginHeader;
