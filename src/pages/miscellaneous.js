import { Card, Row, Col } from "react-bootstrap";

import Link from "next/link";
import { usePathname } from "next/navigation";

import Layout from "../components/Layout";

function MenuItem({ icon, name, href }) {

    return (

        <Col xs="12" sm="6" md="6" lg="3" className="mb-3">
            <Card>
                <Card.Body>
                    <Link href={`${usePathname()}${href}`} className={"stretched-link"}>
                        <i className={`bi bi-${icon} me-2`}></i>{name}
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default function MiscellaneousPage() {

    return (
        <Layout menu="Miscellaneous">

            <p>Many things of different kinds</p>

            <Row>
                <MenuItem icon="mic" name="Invited Talks" href="/invited-talks" />
                <MenuItem icon="megaphone" name="News &amp; Media" href="/news-and-media" />
                <MenuItem icon="link" name="Links" href="/links" />
                <MenuItem icon="question-circle" name="FAQ" href="/faq" />
                <MenuItem icon="game" name="My Games" href="/my-games" />
            </Row>

        </Layout>
    );
}
