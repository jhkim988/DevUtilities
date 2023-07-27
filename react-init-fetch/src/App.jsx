import PropTypes from "prop-types";
import { InitialDataProvider } from "./apis/InitialDataProvider";
import { useInitialData } from "./apis/useInitialData";

// out of component or useMemo
const initReq = {
  test1: {
    id: "test1",
    url: "test URL1",
    args: "?id=testId",
  },
  test2: {
    id: "test2",
    url: "test URL2",
    args: {
      param1: "frog",
      param2: "jump",
    },
  },
};

function App() {
  return (
    <InitialDataProvider config={initReq}>
      <Test1 />
      <Test2 />
      <Test3>
        <Test4 />
      </Test3>
    </InitialDataProvider>
  );
}

const Test1 = () => {
  const data = useInitialData();
  console.log("Test1 Render", data);
  return <div>test1</div>;
};

const Test2 = () => {
  console.log("Test2 Render");
  return <div>test2</div>;
};

const Test3 = ({ children }) => {
  console.log("Test3 Render");
  return (
    <div>
      test3
      {children}
    </div>
  );
};

Test3.propTypes = {
  children: PropTypes.element,
};

const Test4 = () => {
  const data = useInitialData();
  console.log("Test4 Render", data);
  return <div>test4</div>;
};
export default App;
