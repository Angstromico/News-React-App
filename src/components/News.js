import React from 'react';
import New from './New';
import Form from './Form';
import { useGlobalContext } from './context';
const News = () => {
  const { halfInfo, complete, showHideAll } = useGlobalContext();
  const { t } = complete;
  return (
    <div className="light-blue darken-2 news">
      <Form />
      <div className="row">
        {halfInfo.map((info, i) => {
          return <New key={i} info={info} />;
        })}
      </div>
      <div className="col m4 s12 input-field enviar center-flex">
        <input
          type="submit"
          onClick={() => showHideAll()}
          className="darken-2 btn light-blue waves-effect waves-light flash"
          value={t}
        />
      </div>
    </div>
  );
};

export default News;
