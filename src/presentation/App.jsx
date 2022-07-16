import classNames from "classnames";
import "../App.css";
import { appContainer } from "../container/app.container";

const App = () => {
  const { data, getSearchValue, value } = appContainer();
  return data?.length ? (
    <div className="container">
      <div className="search-box">
        <input
          type="search"
          name="search id"
          id="search-id"
          onKeyUp={getSearchValue}
          className="search-input"
          placeholder="Search ID"
        />
      </div>
      <div className="main">
        {data.map((obj, index) => (
          <div
            keys={`row-${index + 1}`}
            id={obj.id}
            className={classNames("row", {
              "row-searched": Number(obj.id) === Number(value),
            })}
          >
            {Object.keys(obj).map((k, ind) => (
              <div keys={`row-item-${ind + 1}`} className="row-items">
                {k}: {obj[k]}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div>
      <h1>Loading...</h1>
    </div>
  );
};

export default App;
