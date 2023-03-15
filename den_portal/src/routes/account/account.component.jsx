import { useContext } from "react";
import { AccountContext } from "../../contexts/context.accoounts";
const Account = () => {
  const { name } = useContext(AccountContext);
  return (
    <div>
      <h1>ACCOUNT</h1>
      <div><h1>{name}</h1></div>
      <div>hello</div>
    </div>
  );
};

export default Account;
