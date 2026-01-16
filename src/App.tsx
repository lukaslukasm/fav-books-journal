import BookList from "./components/BookList";
import { Provider } from "react-redux";
import { store } from "./state/store";
import AddBookForm from "./components/AddBookForm";

function App() {
  return (
    <Provider store={store}>
      <main className="app">
        <h1 className="main-heading">Favourite Books Journal</h1>
        <div className="main-container">
          <section>
            <AddBookForm />
          </section>
          <section>
            <BookList />
          </section>
        </div>
      </main>
    </Provider>
  );
}

export default App;
