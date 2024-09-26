import { Alert } from "react-bootstrap";
import "./BottomAlert.css";
import { useEffect, useState } from "react";

const BottomAlert = ({ loading, error }) => {
  const [show, setShow] = useState(false);
  const [variant, setVariant] = useState("primary");
  const [displayElement, setDisplayElement] = useState("");

  useEffect(() => {
    if (loading) {
      setVariant("primary");
      setDisplayElement("Fetching Hero Data...");
      setShow(true);
    } else if (error) {
      setVariant("danger");
      setDisplayElement(`Error: ${error.message || "Something went wrong"}`);
      setShow(true);
    } else {
      setVariant("success");
      setDisplayElement("Heroes are ready to fight!");
      setShow(true);
    }

    const timer = setTimeout(() => {
      setShow(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [loading, error]);

  return (
    <div className={`bottom-alert ${show ? "slide-up" : "slide-down"}`}>
      <Alert variant={variant} className="mb-0">
        {displayElement}
      </Alert>
    </div>
  );
};

export default BottomAlert;
