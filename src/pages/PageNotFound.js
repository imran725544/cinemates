import { Link } from "react-router-dom";
import PageNotFoundImage from "../assets/images/pagenotfound.png";
import { Button } from "../components/Button";
import { useEffect } from "react";

export const PageNotFound = () => {

  useEffect(()=>{
    document.title = "page not found/ cinemate"
  })
  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-7xl text-gray-700 my-10 dark:text-white font-bold">
            {" "}
            Oops page not found
          </p>

          <div className="max-w-lg">
            <img src={PageNotFoundImage} alt="page not found" />
          </div>
        </div>

        <div className="flex justify-center my-4">
          <Link to="/">
            <Button>Back to cinemate</Button>
          </Link>
        </div>
      </section>
    </main>
  );
};
