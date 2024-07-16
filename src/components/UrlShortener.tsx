import { FormEvent, useState } from "react";
import Button from "./ui/Button";
import { motion, AnimatePresence, useAnimate } from "framer-motion";
import useShortener from "../hooks/UseShortener";
import Spinner from "./ui/Spinner";
import ListItem from "./ui/ListItem";

const UrlShortener = () => {
  const [urlVal, setUrlVal] = useState("");
  const [error, setError] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [scope, animate] = useAnimate();
  const [errMsg, setErrMsg] = useState("");
  const regexValidator = /^(ftp|http|https):\/\/[^ "]+$/;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!urlVal) {
      setError(true);
      setErrMsg("Please add a link");
      if (scope.current) {
        animate(scope.current, {
          x: [0, 10, -10, 10, -10, 10, -10, 0],
          transition: { duration: 0.1 },
        });
      }
      return;
    } else if (!regexValidator.test(urlVal)) {
      setError(true);
      setErrMsg("Please enter a valid link");
      if (scope.current) {
        animate(scope.current, {
          x: [0, 10, -10, 10, -10, 10, -10, 0],
          transition: { duration: 0.1 },
        });
      }
      return;
    }

    setError(false);
    setUrlVal("");
    mutate(urlVal, {
      onSuccess: () => {
        setUrlVal("");
      },
      onError: (error) => {
        console.error(error);
      },
    });
  };
  const { history, setHistory, mutate, postErr, isPending } = useShortener();

  return (
    <>
      <section className="p-4 bg-dark-violet bg-url-mobile bg-no-repeat bg-[right_top_-60px] w-full my-6 rounded-lg transform -translate-y-24 md:p-8 md:bg-url-desktop md:bg-right-top ">
        <form onSubmit={(e) => handleSubmit(e)} action="" className="md:grid md:grid-cols-[80%_18%] md:items-start md:gap-4">
          <div className="mb-3">
            <input
              value={urlVal}
              onChange={(e) => setUrlVal(e.target.value)}
              className={`p-2 pl-2 rounded w-full ${error && 'border-red-500 border-2'}`}
              placeholder="Shorten a link here..."
              type="text"
            />
            <AnimatePresence>
              {error && (
                <motion.p
                  ref={scope}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="text-red-500 text-sm italic my-2 md:mt-2 mb-0"
                >
                  {errMsg}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
          <Button disabled={isPending} variant="square" type="submit">
            {isPending ? (
              <div className="w-full flex justify-center">
                <Spinner />
              </div>
            ) : (
              "Shorten It!"
            )}
          </Button>

          {postErr && (
            <p className="text-red-500 text-sm italic my-2">
              Something is wrong
            </p>
          )}
        </form>
      </section>
      {/* results */}
      <section className="w-full transform -translate-y-24 flex flex-col gap-6">
        <AnimatePresence>
          {history &&
            (showAll ? history : history.slice(0, 3)).map((item, index) => (
              <ListItem key={index} item={item} deleteHistory={setHistory} />
            ))}
        </AnimatePresence>
        {history.length > 3 && (
          <Button
            variant="square"
            onClick={() => setShowAll((prev) => !prev)}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          >
            {showAll ? "Show Less" : "Show More"}
          </Button>
        )}
      </section>
    </>
  );
};

export default UrlShortener;
