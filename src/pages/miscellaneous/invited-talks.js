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

            <h5>Panels</h5>

            <ul>

                <Item title="WiCyS Student Panel" subtitle="2026 Cybersecurity Symposium, University of Michigan-Flint, Flint, United States, October 30th, 2025" />

                <Item title="Inside the Industry of Information Technology Roundtable" subtitle="Michigan Rehabilitation Services’s STEMM-Up, Online, August 14th, 2025" />

                <Item title="2024 First-Generation Networking Event" subtitle="UM-Flint's Student Government, University of Michigan-Flint, United States, March 26, 2025" />

                <Item title="2025 First-Generation Networking Event" subtitle="UM-Flint's Student Government, University of Michigan-Flint, United States, April 9, 2024" />
            </ul>

        </Layout>
    );
}
