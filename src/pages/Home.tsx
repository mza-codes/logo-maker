import Board from "../components/Board";
import InputField from "../components/InputField";
import Results from "../components/Results";
import Title from "../components/Title";
import Layout from "./Layout";

function Home() {
    return (
        <Layout center={0}>
            <section className={`${flex} p-2`}>
                <Title />
                <div className={`${flex} lg:flex-row ${center} lg:items-start lg:justify-start`}>
                    <Board />
                    <div className={`${flex} lg:max-w-[48%] ${center} `}>
                        <InputField />
                        <Results />
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default Home;

var flex = `flex flex-col gap-2`;
var center = `items-center justify-center`;
