import { Button, Col, Container, Form, Row, Stack } from "react-bootstrap";

import { Link } from "react-router-dom";
import React from "react";
import styles from "./styles.module.scss";

function Footer() {
  return (
    <div className="bg-dark">
    <Container fluid className="pt-4">
      <Row>
        <h3 className={styles.alignCenter}>Dejame tu mail :)</h3>
        <p className={styles.alignCenter}>
          Si estas interesad@ en mi perfil dejame un mail de referencia para
          contactarme con vos.
        </p>
      </Row>
      <Row>
        <div className={styles.formEmail}>
          <Form.Control placeholder="Escribe tu email..." />
          <Button variant="outline-secondary">Enviar</Button>
        </div>
      </Row>
      <Row className="justify-content-md-center text-light">
        <div className={styles.networks}>
          <p>
            <i className="fab fa-linkedin-in fa-lg"></i>
          </p>
          <p>
            <i className="fab fa-behance fa-lg"></i>
          </p>
          <p>
            <i className="fab fa-github fa-lg"></i>
          </p>
          <p>
            <i className="fab fa-instagram fa-lg"></i>
          </p>
        </div>
      </Row>
    </Container>
    </div>
  );
}

export default Footer;
