import { Container } from "./styles";
import prakerja from "../../assets/prakerja.png"
import deplaza from "../../assets/deplaza.png"
import deplazaMobile from "../../assets/dplazamobile.png"
import damogo from "../../assets/damogo.png"
import damogoMobile from "../../assets/damogo-mobile.png"
import pegadaianMobile from "../../assets/pegadaian-mobile.jpg"
import pegadaianWeb from "../../assets/pegadaian-web.png"
import pegadaianAdmin from "../../assets/pegadaian-web-admin.png"
import semestaBergoyang from "../../assets/semesta-bergoyang.png"

import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
        
        <ScrollAnimation animateIn="flipInX">
          <a className="project" href="https://www.prakerja.go.id/" target="_blank" rel="noreferrer">
            <header>
              <div className="project-links" style={{ flex: 1 }}>
                <text style={{fontWeight: 'bold', color: 'white', fontSize: '2.5rem'}}>Prakerja</text>
              </div>
            </header>
            <div className="body">
              <img src={prakerja} style={{borderRadius: 5}} className="project-img" alt="Visit site" />
              <p>
                This website aims to be a pre-employment training program created by the government since 2020 which aims to increase the competency of the workforce and provide social assistance to the community.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>prakerja.go.id</li>
              </ul>
            </footer>
          </a>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <a className="project" href="https://deplaza.id/" target="_blank" rel="noreferrer">
            <header>
              <div className="project-links" style={{ flex: 1 }}>
                <text style={{fontWeight: 'bold', color: 'white', fontSize: '2.5rem'}}>dePlaza (Web App)</text>
              </div>
            </header>
            <div className="body">
              <img src={deplaza} style={{borderRadius: 5}} className="project-img" alt="Visit site" />
              <p>
              dePLAZA is an online Dropship shop application which contains thousands of Dropship Reseller products. These products are provided by well-known Top Sellers in large marketplaces.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>deplaza.id</li>
              </ul>
            </footer>
          </a>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <a className="project" href="https://apkgk.com/id/com.versiondeplaza" target="_blank" rel="noreferrer">
            <header>
              <div className="project-links" style={{ flex: 1 }}>
                <text style={{fontWeight: 'bold', color: 'white', fontSize: '2.5rem'}}>dePlaza (Mobile App)</text>
              </div>
            </header>
            <div className="body">
              <img src={deplazaMobile} style={{borderRadius: 5}} className="project-img" alt="Visit site" />
              <p>
              Mobile App to Dropship / Resell that supports Cash On Delivery and Connected to Large Marketplace & Facebook.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>deplaza.id</li>
              </ul>
            </footer>
          </a>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <a className="project" href="https://damogo.co/" target="_blank" rel="noreferrer">
            <header>
              <div className="project-links" style={{ flex: 1 }}>
                <text style={{fontWeight: 'bold', color: 'white', fontSize: '2.5rem'}}>DamoGO (Web Admin)</text>
              </div>
            </header>
            <div className="body">
              <img src={damogo} style={{borderRadius: 5}} className="project-img" alt="Visit site" />
              <p>
              DamoGO is an application that supports F&B businesses in managing suppliers/vendors and arranging orders for needs and recording digitally in a simple, effective and efficient manner.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>damogo.co</li>
              </ul>
            </footer>
          </a>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <a className="project" href="https://www.apkmonk.com/app/com.damogostore/" target="_blank" rel="noreferrer">
            <header>
              <div className="project-links" style={{ flex: 1 }}>
                <text style={{fontWeight: 'bold', color: 'white', fontSize: '2.5rem'}}>DamoGO (Mobile App)</text>
              </div>
            </header>
            <div className="body">
              <img src={damogoMobile} style={{borderRadius: 5}} className="project-img" alt="Visit site" />
              <p>
              DamoGO is an application that supports F&B businesses in managing suppliers/vendors and arranging orders for needs and recording digitally in a simple, effective and efficient manner.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>damogo.co</li>
              </ul>
            </footer>
          </a>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <a className="project" href="https://play.google.com/store/apps/details?id=com.pegadaiandigital&hl=en&gl=US" target="_blank" rel="noreferrer">
            <header>
              <div className="project-links" style={{ flex: 1 }}>
                <text style={{fontWeight: 'bold', color: 'white', fontSize: '2.3rem'}}>Pegadaian Digital (Mobile App)</text>
              </div>
            </header>
            <div className="body">
              <img src={pegadaianMobile} style={{borderRadius: 5}} className="project-img" alt="Visit site" />
              <p>
              Pegadaian Digital Servive is an application-based pawnshop service that helps make it easier for customers to carry out Pegadaian transactions because customers can carry out various transactions with the service features provided in this application via smartphone.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>digital.pegadaian.co.id</li>
              </ul>
            </footer>
          </a>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <a className="project" href="https://digital.pegadaian.co.id/" target="_blank" rel="noreferrer">
            <header>
              <div className="project-links" style={{ flex: 1 }}>
                <text style={{fontWeight: 'bold', color: 'white', fontSize: '2.3rem'}}>Pegadaian Digital (Web App)</text>
              </div>
            </header>
            <div className="body">
              <img src={pegadaianWeb} style={{borderRadius: 5}} className="project-img" alt="Visit site" />
              <p>
              Pegadaian Digital Web is a website application that provides convenience and comfort for accessing and transacting Pegadaian products digitally. One application at your fingertips to meet your financial and investment needs.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>digital.pegadaian.co.id</li>
              </ul>
            </footer>
          </a>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <a className="project" href="https://digital.pegadaian.co.id/admin/" target="_blank" rel="noreferrer">
            <header>
              <div className="project-links" style={{ flex: 1 }}>
                <text style={{fontWeight: 'bold', color: 'white', fontSize: '2.3rem'}}>Pegadaian Digital (Web App)</text>
              </div>
            </header>
            <div className="body">
              <img src={pegadaianAdmin} style={{borderRadius: 5}} className="project-img" alt="Visit site" />
              <p>
              Pegadaian Digital Web Admin is a dashboard to create data user when applying on the site or Pegadaian Branch.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>digital.pegadaian.co.id/admin</li>
              </ul>
            </footer>
          </a>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <a className="project" href="https://semestabergoyang.com/" target="_blank" rel="noreferrer">
            <header>
              <div className="project-links" style={{ flex: 1 }}>
                <text style={{fontWeight: 'bold', color: 'white', fontSize: '2.3rem'}}>Semesta Bergoyang</text>
              </div>
            </header>
            <div className="body">
              <img src={semestaBergoyang} style={{borderRadius: 5}} className="project-img" alt="Visit site" />
              <p>
              More than just a music festival, SEMESTA BERGOYANG wants to be a movement that invites the young generation of Indonesia (& the world) to continue preserving Dangdut music culture in accordance with current developments throughout the world. By involving legendary musicians across genres to COLLABORATE.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>semestabergoyang.com</li>
              </ul>
            </footer>
          </a>
        </ScrollAnimation>

      </div>
    </Container>
  );
}