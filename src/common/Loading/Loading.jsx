import React from "react";
// Bootstrap
import Spinner from "react-bootstrap/Spinner";

const Loading = () => {
  return (
    <Spinner
      className="position-absolute top-50 start-50 translate-middle"
      animation="border"
      role="status"
      variant="danger"
    />
  );
};

export default Loading;
