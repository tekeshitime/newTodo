import React, { useState } from "react";

export const Todo = () => {
  const [todoItems, setTodoItems] = useState([]);
  const [text, setText] = useState("");

  const onChangeText = (e) => {
    setText(e.target.value);
  };

  const onClickAdd = () => {
    const newTodo = [...todoItems, text];
    setTodoItems(newTodo);
    setText("");
  };

  return (
    <div className="App">
      <section className="vh-100" style={{ backgroundColor: `#eee` }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-lg-9 col-xl-7">
              <div className="card rounded-3">
                <div className="card-body p-4">
                  <h4 className="text-center my-3 pb-3">To Do App</h4>
                  <form className="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2">
                    <div className="col-12">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="form1"
                          className="form-control"
                          placeholder="洗濯物をたたむ"
                          value={text}
                          onChange={onChangeText}
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={onClickAdd}
                      >
                        登録
                      </button>
                    </div>
                  </form>

                  <table className="table mb-4">
                    <thead>
                      <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Todo item</th>
                        <th scope="col">Status</th>
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {todoItems.map((todo, index) => {
                        return (
                          <tr key={index}>
                            <th scope="row">{index}</th>
                            <td>{todo}</td>
                            <td>In progress</td>
                            <td>
                              <button type="submit" className="btn btn-danger">
                                Delete
                              </button>
                              <button
                                type="submit"
                                className="btn btn-success ms-1"
                              >
                                Finished
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Todo;
