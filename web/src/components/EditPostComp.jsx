import React from "react";

const EditPostComp = ({ eachPost, index, cancelEdit, saveEdit }) => {
  return (
    <div className=" my-3 max-w-3xl">
      <div className=" border-yellow-500 border-2 p-3">
        <div className=" flex flex-col">
          <input
            className=" text-3xl font-medium"
            defaultValue={eachPost.title}
            type="text"
            placeholder="title"
          />
          <textarea
            className=" text-lg my-3"
            defaultValue={eachPost.text}
            type="text"
            placeholder="What's in your mind"
          ></textarea>
        </div>
        <div className=" flex gap-x-3">
          <button
            className=" text-green-400 text-lg"
            onClick={(e) => saveEdit(e, eachPost._id)}
          >
            Save
          </button>
          <button
            className=" text-red-500 text-lg"
            onClick={() => cancelEdit(index)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditPostComp;
