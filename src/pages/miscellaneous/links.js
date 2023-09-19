import Layout from "../../components/Layout";

function Item({ href, children }) {

    return (
        <li>
            <a target="_blank" href={href}>{children}</a>
        </li>
    );
}

export default function LinksPage() {

    return (
        <Layout title="Links" menu="Miscellaneous" hasGoBackButton={true}>

            <p>Many things of different kinds</p>

            <ul>
                <Item href="https://andreas-zeller.info/2021/04/15/the-devils-guide-to-incremental-research.html">The Devil's Guide to Incremental Research</Item>
                <Item href="https://faculty.washington.edu/ajko/advice#goodwriting">How can I become a good technical writer?</Item>
            </ul>
        </Layout>
    );
}
