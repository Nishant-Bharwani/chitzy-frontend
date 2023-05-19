import React from "react";
import { useParams } from "react-router-dom";
const ChatSpace = () => {
  const params = useParams();
  return (
    <div className="d-flex justify-center gap-3 align-items-center text-dark">
      Welcome to your chatspace {params.userId}
    </div>
  );
};

export default ChatSpace;
