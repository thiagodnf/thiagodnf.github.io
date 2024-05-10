import { useState } from "react";
import { Col } from "react-bootstrap";

import Layout from "../components/Layout";
import CollapseGroup from "../components/CollapseGroup";

import bibtex2html from "bibtex2html";
import PathUtils from "../utils/PathUtils";

const groups = {
    "journal": { order: 1, title: "Refereed Journal Papers" },
    "conference": { order: 2, title: "Refereed Conference Papers" },
    "book": { order: 3, title: "Book Chapters" },
    "short-paper": { order: 4, title: "Refereed Short Papers, Videos, Demos, and Posters" },
    "no-proceedings": { order: 5, title: "Workshop and Conferences without Proceedings" },
    "invited-talks": { order: 6, title: "Major Invited Talks" },
    "thesis": { order: 7, title: "Thesis" },
    "unrefereed": { order: 8, title: "Unrefereed Publications" },
    "unrefereed-poster": { order: 9, title: "Unrefereed Conference Posters" },
    "under-review": { order: 10, title: "Under Review" }
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

    const [type, setType] = useState("year");
    const [searchTerm, setSearchTerm] = useState("");

    function handleType(event) {
        setType(event.target.value);
    }

    function handleSearchTerm(event) {
        setSearchTerm(event.target.value);
    }

    let items = filterOut(entries, searchTerm);

    let groupedList = createGroupsBy(items, type);

    let groupsAsHtml = createHTML(groupedList);

    return (
        <Layout menu="Publications">

            <p>This is not the full list. We will update it as soon as possible.</p>

            <form className="row g-1 mb-3">
                <Col xs="12" sm="3" md="2" lg="2" xl="1">
                    <select className="form-select" value={type} onChange={handleType}>
                        <option value="year">Year</option>
                        <option value="annote">Type</option>
                    </select>
                </Col>
                <Col xs="12" sm="9" md="10" lg="10" xl="11">
                    <input type="search" className="form-control" placeholder="Start typing to filter..." autoComplete="off" value={searchTerm} onChange={handleSearchTerm} />
                </Col>
            </form>
            <div className="publications">
                {groupsAsHtml}
            </div>
        </Layout>
    );
}

export async function getStaticProps() {

    const path = PathUtils.get("data", "references.bib");

    const content = await PathUtils.readFileContent(path);

    return {
        props: {
            entries: new bibtex2html().parse(content)
        }
    };
}
