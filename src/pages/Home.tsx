import { Main } from "../layout/Main";

export function Home() {
    return (
        <Main>
      <div className="app font-poppins">
        <section className="bg-green-200 p-6 border-2 border-gray-700">
          <h2>Subheader (Placeholder)</h2>
        </section>
  
        <main className="bg-red-200 p-6 border-2 border-gray-700">
          <p>Content (Placeholder)</p>
        </main>
  
        <footer className="bg-gray-300 p-6 border-2 border-gray-700">
          <p>Footer (Placeholder)</p>
        </footer>
      </div>
      </Main>
    );
  }