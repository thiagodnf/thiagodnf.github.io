import { Row, Col, Container } from "react-bootstrap";
import { Nav, Navbar } from "react-bootstrap";

import Head from "next/head";
import Link from "next/link";

import GoBackButton from "./GoBackButton";
import Package from "../../package.json";
import ColorThemeNavItem from "./ColorThemeNavItem";

function MenuItem({ active, href, icon, name, external = false }) {

    active = active.toLowerCase() == name.toLowerCase() ? "active" : "";

    return (
        <li className="nav-item">
            <Link href={href} className={`nav-link ${active}`}>
                <i className={`bi ps-2 ${icon} `}></i>
                <span className="ms-3">{name}</span>
                {external &&
                    <i className="float-end bi bi-box-arrow-up-right"></i>
                }
            </Link>
        </li>
    );
}

export default function Layout({ children, menu, title = "", hasGoBackButton = false }) {

    title = title ? title : menu;

    return (
        <>
            <Head>
                <title>{`${title} - ${Package.author}`}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <header>
                <Navbar className="navbar-top border-bottom pt-3 pt-md-2 mt-5 mt-md-0">
                    <Container fluid>
                        <div className="d-flex flex-row align-items-center">
                            {hasGoBackButton &&
                                <GoBackButton />
                            }
                            <span className="navbar-brand" href="#">{title}</span>
                        </div>
                        <Nav className="me-auto"></Nav>
                        <Nav>
                            <ColorThemeNavItem />
                        </Nav>
                    </Container>
                </Navbar>
            </header >
            <aside>
                <Navbar expand="md" fixed="top" id="sideNav" className="bg-body-tertiary">
                    <Container fluid >
                        <Link href="/" className="navbar-brand d-block d-md-none">{Package.author}</Link>
                        <Navbar.Toggle className="custom-toggler" />
                    </Container>
                    <Container fluid className="d-none d-md-block mb-1 text-center">
                        <Link href="/">
                            <img
                                src="/images/profile.jpg"
                                alt="the user profile"
                                width="150px"
                                className="img-fluid rounded-2 border border-light border-2"
                            />
                        </Link>
                        <div className="d-flex flex-column mb-1">
                            <h5 className="mb-2">{Package.author}</h5>
                            <small className="mb-2">Assistant Professor</small>
                            <small className="mb-0 text-secondary">University of Michigan-Flint</small>
                        </div>
                        <hr className="mx-2" />
                    </Container>
                    <Container fluid className="px-3">
                        <Navbar.Collapse id="navbar">
                            <ul className="navbar-nav nav-pills mt-3 mt-md-0">
                                <MenuItem active={menu} href="/" name="Home" icon="bi-house" />
                                <MenuItem active={menu} href="/curriculum" name="Curriculum" icon="bi-file-earmark-text" />
                                <MenuItem active={menu} href="/teaching" name="Teaching" icon="bi-person-workspace" />
                                <MenuItem active={menu} href="/awards" name="Awards" icon="bi-trophy" />
                                <MenuItem active={menu} href="/publications" name="Publications" icon="bi-journal-text" />
                                <MenuItem active={menu} href="https://s3researchlab.github.io?utm_source=personal-website&utm_campaign=side-menu" name="Research Lab" icon="bi-globe" external="true" />
                                <MenuItem active={menu} href="/service" name="Service" icon="bi-people" />
                                <MenuItem active={menu} href="/miscellaneous" name="Miscellaneous" icon="bi-puzzle" />
                            </ul>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </aside>
            <main>
                <Container fluid className="mt-3 test">
                    <Row>
                        <Col sm="12">
                            {children}
                        </Col>
                    </Row>
                </Container>
            </main>
        </>
    );
}
