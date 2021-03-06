import React from "react";

const style = {
  backgroundColor: "white",
  width: "50%",
  minHeight: "350px",
  height: "auto",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

export const IncompleteTodos = (props) => {
  const { todos, onclickComplete, onClickDelete } = props;
  return (
    <div style={style} className="incomplete">
      <p className="title">未完了のToDO</p>
      <ul>
        <li>
          {todos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <p>{todo}</p>
                <button onClick={() => onclickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            );
          })}
        </li>
      </ul>
    </div>
  );
};
