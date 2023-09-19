import Layout from "../../components/Layout";
import CollapseGroup from "../../components/CollapseGroup";

export default function FaqPage() {

    return (
        <Layout title="FAQ" menu="Miscellaneous" hasGoBackButton={true}>

            <p>These are questions I'm frequently asked.</p>

            <CollapseGroup title="Will you write me a letter of recommendation?" collapsed="true" id="letter-of-recommendation">

                <p>Maybe. All of the following must be true before I commit to writing you a letter:</p>

                <ul className="ms-4">
                    <li>You've asked for it two weeks in advance of the deadline.</li>
                    <li>You've given me all of the information you have about what is expected in the letter.</li>
                    <li>You've shared with me why you need the letter.</li>
                    <li>You've explained why I'm one of the best people in your network to write the letter.</li>
                    <li>I've had multiple conversations about things beyond the scope of a class and its requirements (e.g., in office hours, in research, or other settings).</li>
                </ul>

                <p>For many students, this is easy to satisfy. For example, undergraduate researchers in my research lab easily satisfy all of the criteria above. They don't even need to ask if I'll write; it's a given. But I receive many requests from students I've had in classes that I've never talked to. In these cases, what would I even say in the letter?</p>

                <p className="ps-4 text-secondary fst-italic">"They were in my class, but I don't know them"</p>

                <p>If you're in that situation, I would love to get to know you, but if I spent the time to do that with every student who asked for a letter, I would probably be spending more than a dozen hours a week meeting with students just to write letters. I definitely cannot do that; I have too many other responsibilities in research, teaching, and service.</p>

                <p>There are some exceptions to the policy above. If the "letter" you need is really just a form that I fill out attesting that I had you in class, I'm happy to do that. If you just need a reference for a job, I'm happy to be a reference; I rarely get called, and when I do, it's rarely onerous.</p>

            </CollapseGroup>

            <CollapseGroup title="What is the difference between computer science and informatics?" collapsed="true" id="computer-science-and-informatics">

                <p>Computer Science and Informatics are like we think about Physics versus Engineering: the former concerns itself with a phenomenon as it occurs in nature and the latter is concerned with applications of it for humanity.</p>

                <p>Computer Science fundamentally asks what is computing, what can be computed, how can it be computed. Informatics fundamentally asks what should be computed, how should computation be used, what role does computing play in society.</p>

                <p>If you find computing intrinsically interesting and wouldn't mind talking about it endlessly, Computer Science is a great major for you. If you just want use it as a tool to solve the world's problems, Informatics is a great major for you. Some people are interested in both. Maybe that's you! Both are competitive majors, both lead to wonderful jobs, and both will teach you a lot about the world, one from the perspective of computing, one from the perspective of people and society. Both perspectives are necessary and valuable.</p>

                <p>Thanks <a href="https://faculty.washington.edu/ajko">Dr. Amy J. Ko</a> for this great explanation. You can read more about it <a href="https://medium.com/bits-and-behavior/big-ideas-about-information-c09e4d9c60bd">here</a>.</p>

            </CollapseGroup>

        </Layout>
    );
}
