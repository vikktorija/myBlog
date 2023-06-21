import { useNavigate } from "react-router-dom";

const BackButton = () => {
    const navigate = useNavigate();
  
    const handleBackButtonClick = () => {
      navigate(-1);
    };
  
    return (
      <div className="back-botom" onClick={handleBackButtonClick}>&#8592;</div>
    );
  };
  
  export default BackButton;
  