import { useRef, useState } from "react";
import { HistoryArray } from "../../hooks/UseShortener";
import Button from "./Button";
import { motion } from "framer-motion";
import close from "../../assets/images/icon-close.svg";

interface ListItemProps {
  item: HistoryArray;
  deleteHistory: React.Dispatch<React.SetStateAction<HistoryArray[]>>;
}

const ListItem = ({ item, deleteHistory }: ListItemProps) => {
  const [copyState, setCopyState] = useState(false);
  const copyRef = useRef<HTMLParagraphElement>(null);
  const handleCopy = () => {
    const el = copyRef.current;
    if (el) {
      navigator.clipboard.writeText(el.textContent || "");
      setCopyState(true);
    }
  };
  const handleDeleteHIstory = (shortLink: string) => {
    deleteHistory((prev) =>
      prev.filter((item) => item.shortLink !== shortLink)
    );
  };

  return (
    <motion.div
      className="bg-white rounded-lg relative md:flex md:items-center md:justify-between"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
    >
      <motion.button
        onClick={() => handleDeleteHIstory(item.shortLink)}
        className="absolute top-2 right-2 border-[1px] border-gray rounded-full p-1"
      >
        <img src={close} className="w-3 h-3" alt="delete history" />
      </motion.button>
      <h4 className="p-4 text-sm font-semibold break-words">
        {item.initialLink}
      </h4>
      <div className="border-b-[1px] border-gray"></div>
      <div className="p-4 md:flex md:items-center md:gap-4 md:mr-5">
        <p ref={copyRef} className="mb-3 text-gray font-medium text-sm md:mb-0">
          {item.shortLink}
        </p>
        <Button
          variant="square"
          className={copyState ? "bg-dark-violet" : undefined}
          onClick={handleCopy}
        >
          {copyState ? "Copied!" : "Copy"}
        </Button>
      </div>
    </motion.div>
  );
};

export default ListItem;
