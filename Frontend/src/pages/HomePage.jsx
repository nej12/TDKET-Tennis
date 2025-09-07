import React, { useState } from "react";
import { NavigationBar } from "../components/NavigationBar";
import '../styles/HomePage.css';

export function HomePage() {
  const [isOpen, setIsOpen] = useState(false);
  const fullText =
    "The two founders of TDKET are Tariku and Desta Tesfaye. The brothers themselves come from poor backgrounds and even managed to becomentennis players in the Ethiopian national team. The two founders of TDKET are Tariku and Desta Tesfaye. The brothers themselves come from poor backgrounds and even managed to becomentennis players in the Ethiopian national team. The two founders of TDKET are Tariku and Desta Tesfaye. The brothers themselves come from poor backgrounds and even managed to becomentennis players in the Ethiopian national team. The two founders of TDKET are Tariku and Desta Tesfaye. The brothers themselves come from poor backgrounds and even managed to becomentennis players in the Ethiopian national team";
  return (
    <div className="home-page">
      <NavigationBar />
      <section className="home-first-section">
        <h1>
          Tariku And Desta Kids'
          <br /> Education Through <br /> Tennis Development
        </h1>
        <p>
          TDKET is a non-profit in Addis Ababa, Ethiopia, that uses tennis to
          educate underprivileged children, empowering them with essential
          skills to drive positive change in their communities.
        </p>
        <div className="total-children">
          <h4>
            <span>216</span> Children Served Over The Years
          </h4>
          <h4>
            <span>100</span> Current children served
          </h4>
        </div>
      </section>
      <section className="home-second-section">
        <div className="about-video">
          <img src="public/homeBackground1.jpg" alt="about-video" />
        </div>
        <div className="description">
          <h2>Transforming Good Intentions into Good Actions</h2>
          {isOpen ? (
            fullText
          ) : (
            <p>
              The two founders of TDKET are Tariku and Desta Tesfaye. The
              brothers themselves come from poor backgrounds and even managed to
              become tennis players in the Ethiopian national team.click here
              for more detail.....
            </p>
          )}
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "view less" : "view details"}
          </button>
        </div>
      </section>
    </div>
  );
}
