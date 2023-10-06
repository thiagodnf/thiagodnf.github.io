import Layout from "../components/Layout";
import Media from "../components/Media";

export default function CurriculumPage() {

    return (
        <Layout menu="Curriculum">

            <p>Past and  current experiences on industry and academia</p>

            <h5>Education</h5>

            <Media name="PhD Degree in Computer Science (2015 - 2019)" location="Federal University of Paraná, Brazil" logo={"/images/logos/ufpr.png"} >
                <li><strong>Title:</strong> A preference-based approach for reducing the number of objectives applied to the variability testing of software product line</li>
                <li><strong>Advisors:</strong> Prof. Dr. Silvia Regina Vergilio</li>
                <li><strong>Co-advisors:</strong> Prof. Jerffeson Teixeira de Souza and Prof. Marouane Kessentini</li>
                <li><strong>Sandwich PhD:</strong> University of Michigan-Dearborn, USA - Prof. Dr. Marouane Kessentini</li>
            </Media>

            <Media name="Masters Degree in Computer Science (2013 - 2015)" location="Ceará State University, Brazil" logo={"/images/logos/uece.png"} >
                <li><strong>Title:</strong> Abordagens Interativas Usando Algoritmo de Otimização por Colônia de Formiga Para o Problema do Próximo Release (In Portuguese)</li>
                <li><strong>Advisor:</strong> Prof. Dr. Jerffeson Teixeira de Souza</li>
            </Media>

            <Media name="Bachelor's Degree in Computer Science (2007 - 2012)" location="Ceará State University, Brazil" logo={"/images/logos/uece.png"} >
                <li><strong>Title:</strong> Aplicação do Algoritmo de Colonia de Abelhas Simulada no Problema do Planejamento de Release de Software (In Portuguese)</li>
                <li><strong>Advisor:</strong> Prof. Dr. Jerffeson Teixeira de Souza</li>
            </Media>

            <h5>Experiences</h5>

            <p className="my-4">Academic Positions</p>

            <Media name="University of Michigan-Flint" location="Flint, United States" logo={"/images/logos/um-flint.jpg"} >
                <li when="(Oct 2021 - Present)">Assistant Professor</li>
            </Media>

            <Media name="University of Michigan-Dearborn" location="Dearborn, United States" logo={"/images/logos/um-dearborn.jpg"} >
                <li when="(Mar 2020 - Sep 2021)">Postdoctoral Research Fellow</li>
                <li when="(Sep 2020 – Sep 2021)">Intermittent Lecturer</li>
                <li when="(May 2017 - Oct 2017)">Visiting Research Assistant</li>
            </Media>

            <Media name="Federal University of Technology - Paraná" location="Curitiba, Brazil" logo={"/images/logos/utfpr.jpg"} >
                <li when="(Mar 2018 - Dec 2019)">Substitute Professor</li>
            </Media>

            <p className="my-4">Industrial Employment</p>

            <Media name="GeoSales Technology" location="Fortaleza, Brazil" logo={"/images/logos/softsite.jpg"} >
                <li when="(Jul 2012 - Dec 2013)">Software Developer</li>
            </Media>

            <Media name="Odonto System Planos Odontológicos" location="Fortaleza, Brazil" logo={"/images/logos/odonto-system.png"} >
                <li when="(Jul 2009 - Jul 2010)">Software Developer Intern</li>
            </Media>

        </Layout>
    );
}
