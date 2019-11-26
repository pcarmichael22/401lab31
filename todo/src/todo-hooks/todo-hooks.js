import React, { useState } from 'react';
import Counter from './counter-reducer';
import { When } from '../components/if';
import Modal from '../components/modal';

function State() {
  const [todoList, setTodoList] = useState([]);
  const [item, setItem] = useState({});
  const [showDetails, setShowDetails] = useState(false);
  const [details, setDetails] = useState({});

  handleInputChange = event => {
    setItem({ [event.target.name]: event.target.value });
  };

  handleSubmit = props => {
    setItem(handleSubmit());
  };

  addItem = event => {
    event.preventDefault();
    event.target.reset();

    const defaults = { _id: uuid(), complete: false };
    const item = Object.assign({}, item, defaults);

    setTodoList(item);
    setItem({});
  };

  deleteItem = id => {
    setTodoList(todoList.filter(item => item._id !== id));
  };

  saveItem = updatedItem => {
    setTodoList(
      todoList.map(item => (item._id === updatedItem._id ? updatedItem : item))
    );
  };

  toggleComplete = id => {
    let item = todoList.filter(i => i._id === id)[0] || {};
    if (item._id) {
      item.complete = !item.complete;
      setItem(item);
    }
  };

  toggleDetails = id => {
    let detailState = !showDetails;
    let currentDetails = todoList.filter(item => item._id === id)[0] || {};
    setShowDetails(detailState);
    setDetails(currentDetails);
  };
}

return (
  <>
    <header>
      <h2>
        There are
        {this.state.todoList.filter(item => !item.complete).length}
        Items To Complete
      </h2>
    </header>

    <section className="todo">
      <div>
        <h3>Add Item</h3>
        <form onSubmit={this.addItem}>
          <label>
            <span>To Do Item</span>
            <input
              name="text"
              placeholder="Add To Do List Item"
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            <span>Difficulty Rating</span>
            <input
              type="range"
              min="1"
              max="5"
              name="difficulty"
              defaultValue="3"
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            <span>Assigned To</span>
            <input
              type="text"
              name="assignee"
              placeholder="Assigned To"
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            <span>Due</span>
            <input type="date" name="due" onChange={this.handleInputChange} />
          </label>
          <button>Add Item</button>
        </form>
      </div>

      <div>
        <ul>
          {this.state.todoList.map(item => (
            <li
              className={`complete-${item.complete.toString()}`}
              key={item._id}
            >
              <span onClick={() => this.toggleComplete(item._id)}>
                {item.text}
              </span>
              <button onClick={() => this.toggleDetails(item._id)}>
                Details
              </button>
              <button onClick={() => this.deleteItem(item._id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </section>

    <When condition={this.state.showDetails}>
      <Modal title="To Do Item" close={this.toggleDetails}>
        <div className="todo-details">
          <header>
            <span>Assigned To: {this.state.details.assignee}</span>
            <span>Due: {this.state.details.due}</span>
          </header>
          <div className="item">{this.state.details.text}</div>
        </div>
      </Modal>
    </When>
  </>
);

export default State;
