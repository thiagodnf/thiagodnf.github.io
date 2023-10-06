import Layout from "../components/Layout";

/**
 * @param {Object} params
 * @param {string} params.name - The name of the award/recognition
 * @param {string} params.org - The name of the organization
 * @returns
 */
function Item({ name, org }) {

    return (
        <li>{name}<br /><span className="text-secondary small">{org}</span></li>
    );
}

export default function AwardsPage() {

    return (
        <Layout menu="Awards">

            <p>This is not the full list. We will update it as soon as possible.</p>

            <p className="text-dark">Awards</p>

            <ul>
                <Item name="Early Career Award Academic" org="2023 HFRCC Research Symposium" />
            </ul>

            <p className="text-dark">Recognitions</p>

            <ul>
                <Item name="Winter 2023 Golden Apple Recognition" org="Thompson Center for Learning & Teaching, University of Michigan-Flint" />
                <Item name="Fall 2022 Golden Apple Recognition" org="Thompson Center for Learning & Teaching, University of Michigan-Flint" />
            </ul>

        </Layout>
    );
}
