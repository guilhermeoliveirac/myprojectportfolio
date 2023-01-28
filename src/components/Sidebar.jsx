import SocialNetworkContainer from "./SocialNetworkContainer";
import InformationContainer from "./InformationContainer";

import Avatar from "../img/eu.jpg";

import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Guilherme Carvalho" />
      <p className="title">DevOps Jr</p>
      <SocialNetworkContainer />
      <InformationContainer />
      <a href="https://drive.google.com/file/d/1_EzLNb-ygZFHgBysYzfpG7RFxGm8Qd6P/view?usp=sharing" className="btn">
        Download currículo
      </a>
    </aside>
  );
};

export default Sidebar;
