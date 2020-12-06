import React from "react";

function TaskImage({ srcImage }) {
  return (
    <div className="overflow-hidden rounded-lg shadow">
      <img className="w-100" src={srcImage} alt="task" />
    </div>
  );
}

export default TaskImage;
