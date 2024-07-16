import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import post from "../util/PostUrl";


export interface HistoryArray {
    shortLink: string;
    initialLink: string;
}


const useShortener = () => {
    const [history, setHistory] = useState<HistoryArray[]>([]);
    const {
        mutate,
        error: postErr,
        isPending,
      } = useMutation({
        mutationFn: (url: string) => post(url),
        onSuccess: (data,variables) => {
          setHistory((prev) => [
            ...prev,
            { shortLink: data.short_url,
              initialLink: variables
             },
            ]);
        },
      });

    return {history, setHistory, mutate, postErr, isPending}
}

export default useShortener