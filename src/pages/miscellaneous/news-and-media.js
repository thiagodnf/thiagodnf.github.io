import { Card } from "react-bootstrap";
import Layout from "../../components/Layout";

const style = {
    "lineHeight": "1.5em",
    "height": "3em",
    "overflow": "hidden",
    "textOverflow": "ellipsis",
};

function Entry({ author, link, title, when, children }) {
    return (
        <Card className="mb-3">
            <Card.Body>
                <a href={link} className="stretched-link">{title}</a>
                <p className="my-2" style={style} >
                    {children}
                </p>
                <small className="text-secondary">{author}, {when}</small>
            </Card.Body>
        </Card>
    );
}

export default function NewsAndMediaPage() {

    return (
        <Layout title="News &amp; Media" menu="Miscellaneous" hasGoBackButton={true}>

            <p>Occasions where I was invited to speak about me or my projects</p>

            <Entry
                title="University of Michigan-Flint has plans for a new technology facility"
                author="Flint Beat"
                when="April 1, 2023"
                link="https://flintbeat.com/university-of-michigan-flint-plans-for-a-new-technology-facility/">
                The University of Michigan Board of Regents unanimously approved the construction of a new facility at UM-Flint on March 23, 2023. The facility will serve as the auxiliary building of UM-Flint’s College of Innovation & Technology (CIT), which currently operates out of the William R. Murchie Science Building.
            </Entry>

            <Entry
                title="Dr. Ferreira gave a research seminar in CIS"
                author="UM-Dearborn CIS"
                when="October 22, 2021"
                link="https://umdearborn.edu/cecs/departments/computer-and-information-science/articles/dr-ferreira-gave-research-seminar-cis">
                Dr. Thiago Ferreira, Assistant Professor at the University of Michigan - Flint, visited (virtually) the CIS Department and gave a research seminar on a preference-based framework for reducing the number of objectives in variability testing of software product line.
            </Entry>

            <Entry
                title="Meet the CIT Faculty: Thiago Ferreira"
                author="UM-Flint NOW"
                when="October 6, 2021"
                link="https://news.umflint.edu/2021/10/06/meet-the-cit-faculty-thiago-ferreira/">
                Thiago Ferreira is beginning his first year as an Assistant Professor of Information Technology &amp; Informatics in UM-Flint's College of Innovation and Technology. Ferreira has most recently held academic appointments (postdoctoral fellow and intermittent lecturer) at the University of Michigan-Dearborn. He investigates software refactoring, which is the restructuring of source code for the purpose of improving software quality. Continue reading to learn more about Ferreira and his fascination with technology.
            </Entry>

        </Layout>
    );
}
