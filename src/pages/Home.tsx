import Board from "../components/Board";
import InputField from "../components/InputField";
import Layout from "./Layout";

function Home() {
  return (
    <Layout center={1}>
      <main>
        <Board />
        <div className="input">
          <InputField />
        </div>
      </main>
    </Layout>
  );
}

export default Home;
