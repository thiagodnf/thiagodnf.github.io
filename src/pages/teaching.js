import Layout from "../components/Layout";
import Media from "../components/Media";

export default function TeachingPage() {

    return (
        <Layout menu="Teaching">

            <p>List of the past and future courses! Please check the department website for up-to-date list of future courses!</p>

            <Media name="University of Michigan-Flint" location="Flint, United States" logo={"/images/logos/um-flint.jpg"} >
                <li when="Fall ’21, ’22, ’23, ’25 and Winter ’24, ’25, ’26">CIT 100 Technology Foundations</li>
                <li when="Fall ’23, ’24 and Winter ’26">SWE 380 Software Engineering</li>
                <li when="Winter ’26">CSC 580 Advanced Software Engineering</li>
                <li when="Winter ’22, ’23">ITI 100 Introduction to Software Development</li>
                <li when="Fall ’24, ’25 and Winter ’23, ’24">ITI 200 Introduction to Cloud Computing</li>
                <li when="Fall ’22">ITI 220 Introduction to Embedded Systems</li>
                <li when="Fall ’24 and Winter ’26">CSC 391 Independent Study</li>
                <li when="Summer ’25">CSC 591 Independent GR Study</li>
                <li when="Winter ’25">CSC 595 Master's Thesis I</li>
                <li when="Summer ’25">CSC 596 Master's Thesis II</li>

            </Media>

            <Media name="University of Michigan-Dearborn" location="Dearborn, United States" logo={"/images/logos/um-dearborn.jpg"} >
                <li when="(Fall '20)">CIS 150 Computer Science I</li>
                <li when="(Fall '20)">CIS 150L Computer Science I Lab</li>
            </Media>

            <Media name="Federal University of Technology - Paraná" location="Curitiba, Brazil" logo={"/images/logos/utfpr.jpg"} >
                <li when="2018.1, 2018.2, 2019.1, and 2019.2">IFT1A Computing 1</li>
                <li when="2019.2">IFT2A Computing 2</li>
                <li when="2018.1, 2018.2, and 2019.1">IF02A Informatics 2</li>
                <li when="2018.1 and 2018.2">CSD20 Introduction to Logic for Computer Science</li>
            </Media>

        </Layout>
    );
}
