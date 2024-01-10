import { Component } from "react";
import { Todo } from "./Todo";

export class List extends Component {

  render() {
    console.log(this.props);
    const {todoList,onRemove}=this.props;
    return (
      <div className="list">
        {todoList.map((todo, i) => (
          <Todo key={i} todo={todo} onRemove={onRemove} />
        ))}
      </div>
    );
  }
}
