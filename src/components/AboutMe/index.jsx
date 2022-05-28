import React from "react";
import styles from "./styles.module.scss";

function AboutMe() {
  return (
    <div className="container pb-4">
      <div className={styles.aboutme}>
        <div className="col-lg-6 col-sm-12">
          <h1 style={{ paddingLeft: "10vh" }} className="mb-5">
            Hola soy Jesica!
          </h1>
          <p style={{ paddingLeft: "10vh" }}>
            Soy Diseñadora y Comunicadora Visual con orientación en Diseño UX/
            UI, amante del Diseño y la Fotografía, super curiosa de todo lo
            relacionado con esta hermosa carrera y sus diversas áreas donde se
            aplica. <br />
            Me desempeñe a lo largo de la carrera y vida laboral como Diseñadora
            Gráfica Freelance, he realizado varios proyectos de diferentes
            magnitudes, también colaboraciones y soporte en proyectos ajenos;
            también me desempeñé como Community Manager en una empresa datada en
            mí CV, por más de un año. <br />
            Cuento con conocimientos avanzados de Indesign, Illustrator y
            Photoshop, entre otros conocimientos detallo el uso de Adobe XD,
            Visual Studio Code. Me perseverante con los objetivos laborales
            propuestos. Soy inquieta en marco de expandir horizontes para
            complementar con nuevos conocimientos al desarrollo, tanto
            profesionalmente como para solidificar experiencias en dichas áreas.
            <br />
            Mi intención es aportar un valor diferencial a cada proyecto,
            considerando la oportunidad de contribuir con mis compañeros de
            trabajo y clientes para el crecimiento en general.
          </p>
        </div>
        <div
          style={{ paddingRight: "10vh", paddingLeft: "3rem" }}
          className="col-lg-6 col-sm-12"
        >
          <img
            className="img-fluid rounded-2"
            src="sobremi-ushuaia.jpeg"
            alt="sobre mi ushuaia"
          />
        </div>
      </div>
      <div className="d-flex justify-content-center p-5">
        <button className="btn btn-dark">Descargar Cv</button>
      </div>
      <div className="container mb-5">
      <h1 style={{ paddingLeft: "10vh" }} className="mb-5">Skills</h1>
        <div className="row">
          <div className="col-lg-3 col-sm-2 w-auto">
            <img className={styles.skills} src="adobe-xd-icon.png" alt="logo" />
          </div>
          <div className="col-lg-3 col-sm-2 w-auto">
            <img className={styles.skills} src="adobe-aftereffects-icon.png" alt="logo" />
          </div>
          <div className="col-lg-3 col-sm-2 w-auto">
            <img className={styles.skills} src="adobe-illustrator-icon.png" alt="logo" />
          </div>
          <div className="col-lg-3 col-sm-2 w-auto">
            <img className={styles.skills} src="adobe-indesign-icon.png" alt="logo" />
          </div>
          <div className="col-lg-3 col-sm-2 w-auto">
            <img className={styles.skills} src="adobe-lightroom-icon.png" alt="logo" />
          </div>
          <div className="col-lg-3 col-sm-2 w-auto">
            <img className={styles.skills} src="adobe-photoshop-icon.png" alt="logo" />
          </div>
          <div className="col-lg-3 col-sm-2 w-auto">
            <img className={styles.skills} src="adobe-premiere-icon.png" alt="logo" />
          </div>
          <div className="col-lg-3 col-sm-2 w-auto">
            <img className={styles.skills} src="visual-studio-code.png" alt="logo" />
          </div>
          <div className="col-lg-3 col-sm-2 w-auto">
            <img className={styles.skills} src="html-5.png" alt="logo" />
          </div>
          <div className="col-lg-3 col-sm-2 w-auto">
            <img className={styles.skills} style={{width: "165px", height: "165px", marginTop: "0px"}} src="css-3.png" alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
