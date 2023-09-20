import { useState } from "react";
import { Col } from "react-bootstrap";

import Layout from "../components/Layout";
import CollapseGroup from "../components/CollapseGroup";
import BibTexUtils from "../utils/bibtex-util";

const groups = {
    "journal": { order: 1, title: "Refereed Journal Papers" },
    "conference": { order: 2, title: "Refereed Conference Papers" },
    "book": { order: 3, title: "Book Chapters" },
    "short-paper": { order: 4, title: "Refereed Short Papers, Videos, Demos, and Posters" },
    "no-proceedings": { order: 5, title: "Workshop and Conferences without Proceedings" },
    "unrefereed": { order: 6, title: "Unrefereed Publications" },
    "invited-talks": { order: 7, title: "Major Invited Talks" },
    "thesis": { order: 8, title: "Thesis" },
    "under-review": { order: 9, title: "Under Review" }
};

for (let i = 2000; i < 2040; i++) {
    groups[i] = { order: 2040 - i, title: i + "" };
}

function createCollapseGroup(title, entries) {

    title = groups[title].title;

    let items = entries.map((entry) => {

        return (
            <li className="ms-1" key={entry.key}>
                <span dangerouslySetInnerHTML={{ __html: entry.HTML }} />
            </li>
        );
    });

    return (
        <CollapseGroup title={title} key={title}>
            <ul>
                {items}
            </ul>
        </CollapseGroup>
    );
}

function createGroupsBy(array, key) {

    let groups = new Map();

    array.forEach(item => {

        const prop = item[key.toUpperCase()];

        if (!groups.has(prop)) {
            groups.set(prop, []);
        }

        groups.get(prop).push(item);
    });

    return groups;
}

function createHTML(groupedList) {

    let keys = Array.from(groupedList.keys());

    keys = keys.sort((a, b) => {
        return groups[a].order - groups[b].order;
    });

    return keys.map(key => createCollapseGroup(key, groupedList.get(key)));
}

function filterOut(array, searchTerm = "") {

    return array.filter(item => {

        if (!searchTerm) {
            return true;
        }

        return item.HTML.toLowerCase().includes(searchTerm.toLowerCase());
    });
}

export default function PublicationsPage({ entries }) {

    const [publicationType, setPublicationType] = useState("year");
    const [searchTerm, setSearchTerm] = useState("");

    function handlePublicationType(event) {
        setPublicationType(event.target.value);
    }

    function handleSearchTerm(event) {
        setSearchTerm(event.target.value);
    }

    let items = filterOut(entries.formatted, searchTerm);

    let groupedList = createGroupsBy(items, publicationType);

    let groupsAsHtml = createHTML(groupedList);

    return (
        <Layout menu="Publications">

            <p>This is not the full list. We will update it as soon as possible.</p>

            <form className="row g-1 mb-3">
                <Col xs="12" sm="3" md="2" lg="2" xl="1">
                    <select className="form-select" value={publicationType} onChange={handlePublicationType}>
                        <option value="year">Year</option>
                        <option value="annote">Type</option>
                    </select>
                </Col>
                <Col xs="12" sm="9" md="10" lg="10" xl="11">
                    <input type="search" className="form-control" placeholder="Search papers" autoComplete="off" value={searchTerm} onChange={handleSearchTerm} />
                </Col>
            </form>
            <div className="publications">
                {groupsAsHtml}
            </div>
        </Layout>
    );
}

export async function getStaticProps() {

    const res = await fetch("https://raw.githubusercontent.com/s3researchlab/s3researchlab.github.io/main/data/references.bib");

    const fileContent = await res.text();

    return {
        props: {
            entries: BibTexUtils.parseFileContent(fileContent)
        },
    };
}
