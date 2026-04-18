import { Routes, Route } from "react-router-dom"
import Header from "./component/Header";
import MenuLeft from "./component/MenuLeft";
import AuthorList from "./component/AuthorList";
import CreateAuthor from "./component/CreateAuthor";
import AuthorUpdate from "./component/AuthorUpdate";
import BookList from "./component/BookList";
import CreateBook from "./component/CreateBook";
import UpdateBook from "./component/UpdateBook";
import CreateReview from "./component/CreateReview";
import ReviewList from "./component/ReviewList";
import UpdateReview from "./component/UpdateReview";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <div className="row">
        <div className="col-sm-3">
          <MenuLeft />
        </div>
        <div className="col-sm-9">
          <Routes>
            <Route path="/authorList" element={<AuthorList />}/>
            <Route path="/createAuthor" element={<CreateAuthor />}/>
            <Route path="/updateAuthor/:id" element={<AuthorUpdate />}/>
            <Route path="/bookList" element={<BookList />}/>
            <Route path="/createBook" element={<CreateBook />}/>
            <Route path="/updateBook/:id" element={<UpdateBook />}/> 
            <Route path="/createReview" element={<CreateReview />}/>
            <Route path="/reviewList" element={<ReviewList />}/>
            <Route path="/updateReview/:id" element={<UpdateReview />}/>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
