import React, { useEffect, useState } from "react";

const HomeWithHooks = ({ doSomething }) => {
  const [searchResults, setSearchResults] = useState([]);

  const handleScroll = () => {};

  useEffect(() => {
    /** This code will run only once.
     *  empty dependency array == componentDidMount
     */

    setSearchResults(["a", "b", "c"]);

    window.addEventListener("scroll", handleScroll, true);

    return () => {
      /**
       * The return in a use effect is the cleanup code.
       */
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, []);

  useEffect(() => {
    /**
     * Anytime doSomething changes run this code */
  }, [doSomething]);

  return (
    <div>
      Homepage
      {searchResults.map(result => (
        <span>{result}</span>
      ))}
    </div>
  );
};

export default HomeWithHooks;
