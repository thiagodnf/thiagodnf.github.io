import Layout from "../components/Layout";
import Media from "../components/Media";

export default function TeachingPage() {

    return (
        <Layout menu="Teaching">

            <p>List of the past and future courses! Please check the department website for up-to-date list of future courses!</p>

            <Media name="University of Michigan-Flint" location="Flint, United States" logo={"/images/logos/um-flint.jpg"} >
                <li when="(Fall '23)">SWE 380 Software Engineering</li>
                <li when="(Fall '22, '23)">ITI 220 Introduction to Embedded Systems</li>
                <li when="(Winter '22, '23)">ITI 100 Introduction to Software Development</li>
                <li when="(Winter '23, '24)">ITI 220 Introduction to Cloud Computing</li>
                <li when="(Fall '21, '22, '23, Winter '24)">CIT 100 Technology Foundations</li>
            </Media>

            <Media name="University of Michigan-Dearborn" location="Dearborn, United States" logo={"/images/logos/um-dearborn.jpg"} >
                <li when="(Fall '20)">CIS 150 Computer Science I</li>
                <li when="(Fall '20)">CIS 150L Computer Science I Lab</li>
            </Media>

            <Media name="Federal University of Technology - Paraná" location="Curitiba, Brazil" logo={"/images/logos/utfpr.jpg"} >
                <li when="(Winter '18 to Fall '19)">IFT1A Computing 1</li>
                <li when="(Winter '18 to Fall '19)">IFT2A Computing 2</li>
                <li when="(Winter '18 to Fall '19)">IF02A Informatics 2</li>
                <li when="(Winter '18 to Fall '19)">CSD20 Introduction to Logic for Computer Science</li>
            </Media>

        </Layout>
    );
}
