import Layout from "../components/Layout";

/**
 * @param {Object} params
 * @param {string} params.name - The name of the award/recognition
 * @param {string} params.org - The name of the organization
 * @returns
 */
function Item({ name, org }) {

    return (
        <li>{name}<br /><span className="text-secondary">{org}</span></li>
    );
}

export default function AwardsPage() {

    return (
        <Layout menu="Awards">

            <p>This is not the full list. We will update it as soon as possible.</p>

            <h5>Recognitions</h5>

            <ul>
                <Item name="Winter 2023 Golden Apple Recognition" org="Thompson Center for Learning & Teaching, University of Michigan-Flint" />
                <Item name="Fall 2022 Golden Apple Recognition" org="Thompson Center for Learning & Teaching, University of Michigan-Flint" />
            </ul>

        </Layout>
    );
}
