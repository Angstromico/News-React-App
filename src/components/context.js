import React, { useContext, useEffect, useCallback, useState } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [information, setInformation] = useState([]);
  const [halfInfo, setHalfInfo] = useState([]);
  const [animation, setAnimation] = useState(false);
  const getNews = useCallback((subject, date) => {
    const apiKey = '2383458043a44daa9813db9753a3ff57';
    let url = `https://newsapi.org/v2/everything?q=${subject}&from=${date}&sortBy=popularity&apiKey=${apiKey}`;
    fetch(url)
      .then((respond) => respond.json())
      .then((news) => {
        setInformation(news.articles);
        const sliceInfo = news.articles.slice(0, news.articles.length / 2);
        setHalfInfo(sliceInfo);
        setTimeout(() => {
          setAnimation(true);
        }, 500);
      });
  }, []);
  useEffect(() => {
    const date = new Date();
    const year = date.getFullYear();
    getNews('general', year);
  }, [getNews]);
  const [value, setValue] = useState('general');
  const handleSubmit = (e) => {
    e.preventDefault();
    setAnimation(false);
    const year = new Date().getFullYear();
    getNews(value, year);
  };
  const [read, setRead] = useState({
    allText: false,
    more: 'Read All Text',
  });
  const showText = (text) => {
    const { allText } = read;

    if (text.length < 200) {
      setRead({ ...read, allText: true });
    }
    if (allText === false) {
      setRead({ allText: true, more: 'Read Less' });
    } else {
      setRead({ allText: false, more: 'Read More' });
    }
  };
  const [complete, setComplete] = useState({
    c: false,
    t: 'See all the News',
  });
  const showHideAll = () => {
    const { c } = complete;
    if (c) {
      setComplete({ c: false, t: 'See all the News' });
      setHalfInfo(information.slice(0, information.length / 2));
    } else {
      setComplete({ c: true, t: 'Show half of the news' });
      setHalfInfo(information);
    }
  };

  const ternary = (condition, text) => {
    return condition ? text : '';
  };
  return (
    <AppContext.Provider
      value={{
        information,
        handleSubmit,
        value,
        setValue,
        read,
        showText,
        halfInfo,
        showHideAll,
        complete,
        animation,
        ternary,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
