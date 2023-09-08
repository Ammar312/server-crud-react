import React, { useState } from "react";
import { message, Popconfirm } from "antd";

const Post = ({ eachPost, deleteHandle, editPost, index }) => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const cancel = () => {
    setOpen(false);
    message.error("Cancel");
  };
  const showPopconfirm = () => {
    setOpen(true);
  };
  return (
    <div className=" my-3 max-w-2xl shadow-lg">
      <div className=" border-green-500 border-2 p-3">
        <h2 className=" text-3xl font-medium">{eachPost.title}</h2>
        <p className=" text-lg my-3">{eachPost.text}</p>
        <div className=" flex gap-x-5">
          <button
            className=" text-blue-400 text-lg"
            onClick={() => editPost(index)}
          >
            Edit
          </button>

          <Popconfirm
            title="Delete The Post"
            description="Are you sure to delete this post?"
            open={open}
            // onOpenChange={handleOpenChange}
            onConfirm={() => deleteHandle(eachPost._id)}
            onCancel={cancel}
            okType="default"
            okText="Yes"
            // okButtonProps={{ loading: confirmLoading }}
            cancelText="No"
          >
            <button
              className=" text-red-500 text-lg"
              // onClick={() => deleteHandle(eachPost._id)}
              onClick={showPopconfirm}
            >
              Delete
            </button>
          </Popconfirm>
        </div>
      </div>
    </div>
  );
};

export default Post;
