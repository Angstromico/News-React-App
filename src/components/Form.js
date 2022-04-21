import React from 'react';
import { useGlobalContext } from './context';
const Form = () => {
  const { value, setValue, handleSubmit } = useGlobalContext();

  return (
    <React.Fragment>
      <div className="buscador row light-blue  darken-3 form white-color">
        <div className="col s12 m8 offset-m2">
          <form onSubmit={handleSubmit}>
            <legend className="center">News Categories</legend>
            <div className="input-field col s12 m8">
              <select
                id="select"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              >
                <option value="general" defaultValue>
                  General
                </option>
                <option value="business">Business</option>
                <option value="entertainment">Entertainment</option>
                <option value="health">Health</option>
                <option value="science">Science</option>
                <option value="sports">Sports</option>
                <option value="technology">Technology</option>
              </select>
            </div>
            <div className="col m4 s12 input-field enviar">
              <input
                type="submit"
                className="darken-2 btn light-blue waves-effect waves-light"
                value="Search"
              />
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Form;
