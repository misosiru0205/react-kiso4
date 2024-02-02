import { useEffect, useState } from "react";
import { Inputs } from "./Home";

const Header: React.FC<Inputs> = (props) => {
  const [response, setResponse] = useState<Inputs>();

  useEffect(() => {
    setResponse(props);
  }, [props]);

  return (
    <header>
      <div className="header__container">
        <h1 className="header__title">自己紹介</h1>
        {response && <p className="header__username">{response.name}</p>}
      </div>
    </header>
  );
};

export default Header;
