import React from "react";

const AddToDo = () => {
  return (
    <div>
      <div class="container text-center">
        <div class="row">
          <div class="col">
            <input type="text" placeholder="Enter task" />
          </div>
          <div class="col">
            <input type="date" />
          </div>
          <div class="col">
            <button type="button" class="btn btn-success">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToDo;
