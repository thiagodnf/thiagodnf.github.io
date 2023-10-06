"user client";

function generateId(text) {
    return "p-" + text.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "-");
}

export default function CollapseGroup({ id, title, children, collapsed = false }) {

    const key = id || generateId(title);
    const collapsedAsCls = collapsed ? "collapsed" : "";
    const showAsCls = collapsed ? "" : "show";

    return (
        <div className="collapse-group" key={key}>
            <h5 className={`${collapsedAsCls}`} data-bs-toggle="collapse" data-bs-target={`#${key}`} >
                <i className={"bi bi-chevron-right"} />{title}
            </h5>
            <div className={`collapse ${showAsCls}`} id={key}>
                {children}
            </div>
        </div>
    );
}
