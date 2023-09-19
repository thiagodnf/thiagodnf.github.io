import Layout from "../../components/Layout";

function Item({ key, title, subtitle }) {

    return (
        <li key={key}>
            <span>{title}</span>
            {subtitle &&
                <span className="d-block text-secondary">{subtitle}</span>
            }
        </li>
    );
}

export default function InvitedTalksPage() {

    return (
        <Layout title="Invited Talks" menu="Miscellaneous" hasGoBackButton={true}>

            <p>Occasions where I was invited to speak about my expertise/research.</p>

            <h5>Seminars</h5>

            <ul>
                <Item title="A Preference-based Approach For Reducing The Number Of Objectives Applied To The Variability Testing Of Software Product Line" subtitle="CIS Research Seminar, University of Michigan-Dearborn, United States, October 10, 2021" />
                <Item title="Chatbot Demo - Integration in your Classroom" subtitle="CIS Research Seminar, University of Michigan-Dearborn, United States, April 30, 2020" />
            </ul>

        </Layout>
    );
}
