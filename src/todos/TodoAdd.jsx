import React from "react";
import { useForm } from "../hooks/useForm";
import { useDispatch } from "react-redux";
import { addtodo } from "../slices/todoSlice";


export const TodoAdd = ({handle}) => {
  const { description, formState, onInputChange, onResetForm } = useForm({
    description: ""
  });

  //const { todos } = useSelector(state => state.todos)
  // console.log(todos)
  const dispatch = useDispatch();


  const onFormSubmit = (event) => {
    event.preventDefault();
    if (description.length <= 1) return;

    const newTodo = {
      id: new Date().getTime(),
      description: description,
      done: false
    };

    // handle(newTodo)
    dispatch(addtodo(newTodo));

    console.log("Abans del dispatch");
  };

  return (
    <div className="mb-4">
      <h1 className="text-grey-darkest">Todo List</h1>
      <form onSubmit={onFormSubmit} className="flex mt-4">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-gray-800"
          placeholder="Què farem avui?"
          name="description"
          value={description}
          onChange={onInputChange}
        />
        <input
          type="submit"
          onClick={onFormSubmit}
          value="Add"
          className="flex-no-shrink p-2 border-2 rounded text-teal-400 border-teal-600 hover:text-white hover:bg-teal-500"
        />
      </form>
    </div>
  );
};
