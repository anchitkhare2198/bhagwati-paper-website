import { FunctionComponent } from "react";

import "./OurClientsComponent.scss";

import L_T_Logo from "../../assets/images/clients/L&T_Logo.webp";
import UltraTechLogo from "../../assets/images/clients/UltraTech_Logo.png";
import VarunLogo from "../../assets/images/clients/Varun_Logo.png";
import PnCLogo from "../../assets/images/clients/PNC-Infratech-Ltd-Logo.png";
import PspLogo from "../../assets/images/clients/PSP_Logo.jpg";
import FinolexLogo from "../../assets/images/clients/Finolex_Logo.png";

const OurClientsComponent: FunctionComponent = () => {
  const clients = [
    { logo: L_T_Logo, name: "Larsen and tourbo" },
    { logo: UltraTechLogo, name: "Ultratech" },
    { logo: VarunLogo, name: "Varun beverages" },
    { logo: PnCLogo, name: "Pnc infratech" },
    { logo: PspLogo, name: "Psp projects" },
    { logo: FinolexLogo, name: "Finolex pipes" },
  ];
  return (
    <section className="our-clients" id="clients">
      <h2>Our Clients</h2>
      <p>Meet our happy clients</p>
      <div className="clients-grid">
        {clients.map((client, index) => (
          <div key={index} className="client-card">
            <img src={client.logo} alt={client.name} className="client-logo" />
            <p>{client.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurClientsComponent;
