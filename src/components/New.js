import React from 'react';
import { useGlobalContext } from './context';
const New = ({ info }) => {
  const { url, urlToImage, title, description, source } = info;
  const { read, showText, animation, ternary } = useGlobalContext();
  const { allText, more } = read;
  return (
    <div className={`col s12 m6 l4 animation ${ternary(animation, 'on')}`}>
      <div className="card">
        <div className="card-image">
          <img src={urlToImage} alt={title} />
          <span className="card-title">{source.name}</span>
        </div>
        <div className="card-content">
          <h3 className="center">{title}</h3>
          <p>
            {allText ? description : description.substring(0, 200)}
            <span className="center-flex">
              <input
                type="button"
                className="btn-more"
                onClick={() => showText(description)}
                value={more}
              />
            </span>
          </p>
        </div>
        <div className="card-action">
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="waves-effect waves-light btn"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default New;
