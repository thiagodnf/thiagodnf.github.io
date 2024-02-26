import Link from "next/link";

import { Row, Col } from "react-bootstrap";
import Layout from "../components/Layout";

function SocialIcon({ href, icon }) {

    return (
        <Link href={href} target="_blank">
            <i className={`${icon} me-3`} style={{ "fontSize": "1.5rem" }} ></i>
        </Link>
    );
}

export default function IndexPage() {

    return (
        <Layout menu="Home">

            <h5 className="mt-0">About Me</h5>

            <p>Thiago Ferreira is an Assistant Professor in the College of Innovation & Technology (CIT) at University of Michigan-Flint. He received the Ph.D. degree in Computer Science from the Federal University of Parana in 2019. His research interests focus on the use of user preferences, optimization algorithms, and artificial intelligence techniques to address several software engineering problems such as software requirements, software testing, and software refactoring.</p>

            <h5>Contact</h5>

            <Row className="mt-3 text-start">
                <Col xs="auto" className="me-0 pe-0">
                    <i className={"bi bi-envelope"} />
                </Col>
                <Col>
                    <a href="#">thiagod (the-at-symbol) umich.edu</a>
                </Col>
            </Row>

            <Row className="mt-3 text-start">
                <Col xs="auto" className="me-0 pe-0">
                    <i className={"bi bi-geo-alt"} />
                </Col>
                <Col>
                    <strong>College of Innovation &amp; Technology</strong><br />
                    University of Michigan-Flint<br />
                    303 E. Kearsley Street<br />
                    Flint, Michigan 48502-1950, United States
                </Col>
            </Row>

            <Row className="mt-3 text-start">
                <Col xs="auto" className="me-0 pe-0">
                    <i className={"bi bi-geo-alt opacity-0"} />
                </Col>
                <Col>
                    <SocialIcon icon="ai ai-dblp" href="http://dblp.uni-trier.de/pers/hd/f/Ferreira:Thiago_do_Nascimento" />
                    <SocialIcon icon="ai ai-researchgate" href="https://www.researchgate.net/profile/Thiago_Ferreira22" />
                    <SocialIcon icon="ai ai-google-scholar" href="https://scholar.google.com/citations?user=nKKlinQAAAAJ" />
                    <SocialIcon icon="bi bi-twitter" href="https://twitter.com/thiagodnf" />
                    <SocialIcon icon="bi bi-github" href="https://github.com/thiagodnf" />
                    <SocialIcon icon="bi bi-linkedin" href="https://www.linkedin.com/in/thiagodnf" />
                </Col>
            </Row>

        </Layout>
    );
};
