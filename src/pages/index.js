import Link from "next/link";

import Layout from "../components/Layout";

function SocialIcon({ href, icon }) {

    return (
        <Link href={href} target="_blank">
            <i className={`${icon} me-3`} style={{ "fontSize": "1.5rem" }} ></i>
        </Link>
    );
}

export default function IndexPage() {

    return (
        <Layout menu="Home">

            <h5 className="mt-0">About Me</h5>

            <p>Dr. Thiago Ferreira is an Assistant Professor in the College of Innovation & Technology (CIT) at University of Michigan-Flint. In 2014, he received the Masters Degree in Computer Science from Ceara State University, advised by Prof. Dr Jerffeson Teixeira de Souza and in 2019, he received the PhD Degree in Computer Science from the Federal University of Parana advised by Prof. Dr. Silvia Regina Vergilio, with a sandwich PhD programme of 6 months at University of Michigan-Dearborn (USA). He  was also a Postdoctoral Research Fellow in the Intelligent Software Engineering Research Lab (ISE Lab) at University of Michigan-Dearborn with Prof. Dr. Marouane Kessentini (2020-2021). He has experience in the industry, where he worked as a software developer from 2012 to 2013. My research interests mainly focus on the use of User Preferences, Optimization Algorithms, and Artificial Intelligence techniques to address several Software Engineering problems such as Software Requirements, Software Testing, and Software Refactoring.</p>

            <h5>Contact</h5>

            <address>
                <div className="mt-3">
                    <i className={"bi bi-envelope me-2"} />
                    <a href="#">thiagod (the-at-symbol) umich.edu</a>
                </div>
                <div className="mt-3 row">
                    <div className="col-auto me-0 pe-0">
                        <i className={"bi bi-geo-alt me-2"} />
                    </div>

                    <div className="col ms-0 ps-0">
                        <strong>College of Innovation &amp; Technology</strong><br />
                        University of Michigan-Flint<br />
                        303 E. Kearsley Street<br />
                        Flint, Michigan 48502-1950, USA
                    </div>
                </div>
                <div className="mt-3 ms-3">
                    <SocialIcon icon="ai ai-dblp" href="http://dblp.uni-trier.de/pers/hd/f/Ferreira:Thiago_do_Nascimento" />
                    <SocialIcon icon="ai ai-researchgate" href="https://www.researchgate.net/profile/Thiago_Ferreira22" />
                    <SocialIcon icon="ai ai-google-scholar" href="https://scholar.google.com/citations?user=nKKlinQAAAAJ" />
                    <SocialIcon icon="bi bi-twitter" href="https://twitter.com/thiagodnf" />
                    <SocialIcon icon="bi bi-github" href="https://github.com/thiagodnf" />
                    <SocialIcon icon="bi bi-linkedin" href="https://www.linkedin.com/in/thiagodnf" />
                </div>
            </address>
        </Layout>
    );
};
