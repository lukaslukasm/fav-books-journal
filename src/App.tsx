import BookList from "./components/BookList";
import { Provider } from "react-redux";
import { store } from "./state/store";

function App() {
  return (
    <Provider store={store}>
      <main className="app">
        <h1 className="main-heading">Favourite Books Journal</h1>
        <div className="main-container">
          <div className="" style={{ flexGrow: 1 }}></div>
          <BookList />
        </div>
      </main>
    </Provider>
  );
}

export default App;
