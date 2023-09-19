import Layout from "../components/Layout";
import PathUtils from "../utils/PathUtils.js";

function Item({ title, subtitle = []}) {

    let subtitleAsHTML = subtitle.map((el, i) => {
        return <small key={i} className="me-2 badge fw-normal text-primary-emphasis bg-primary-subtle border border-primary-subtle">{el}</small>;
    });

    return (
        <li>
            <span className="d-block">{title}</span>
            {subtitleAsHTML}
        </li>
    );
}

export default function ServicePage({ services }) {

    const journalReviewerAsHTML = services.journalReviewer.map((el, i) => <Item key={i} title={el} />);

    const sessionChairAsHTML = services.sessionChair.map((el, i) => <Item key={i} title={el} />);

    const programChairAsHTML = services.programChair.map((el, i) => {
        return <Item key={i} title={el.title} subtitle={el.roles} />;
    });

    const committeeMemberAsHTML = services.committeeMember.map((el, i) => {
        return <Item key={i} title={el.title} subtitle={el.roles} />;
    });

    return (
        <Layout menu="Service">

            <p>This is not the full list. We will update it as soon as possible.</p>

            <h5>Journal Reviewer</h5>
            <ul>
                {journalReviewerAsHTML}
            </ul>

            <h5>Program Committee Chair</h5>
            <ul>
                {programChairAsHTML}
            </ul>

            <h5>Program Committee Member</h5>
            <ul>
                {committeeMemberAsHTML}
            </ul>

            <h5>Session Chair of Conferences</h5>
            <ul>
                {sessionChairAsHTML}
            </ul>

        </Layout>
    );
}

export async function getStaticProps() {

    const service = PathUtils.get("data", "service");

    return {
        props: {
            services: {
                committeeMember: await PathUtils.readYml(PathUtils.get(service, "committee-member.yml")),
                journalReviewer: await PathUtils.readYml(PathUtils.get(service, "journal-reviewer.yml")),
                programChair: await PathUtils.readYml(PathUtils.get(service, "program-chair.yml")),
                sessionChair: await PathUtils.readYml(PathUtils.get(service, "session-chair.yml"))
            }
        },
    };
}
