import { Icon } from "@iconify/react";
import { useMutation } from "@tanstack/react-query";
import { useAtom } from "jotai";
import { useEffect } from "react";
import { qAtom, selecteditem } from "../atoms";
import { fetchQuery } from "../service";
import { queryClient } from "../service/tanstackQuery";

function Results() {
  const query = useAtom(qAtom)[0];
  const transport = useAtom(selecteditem)[1];

  const {
    data,
    mutate: search,
    isLoading,
    isError: error,
  } = useMutation((q: string) => fetchQuery(q), {
    onSuccess: (dat) => {
      console.log("onsuccess from useMutation: ", dat);
      queryClient.invalidateQueries(["search-svg"]);
    },
    onError: () => false,
  });

  useEffect(() => {
    const controller = new AbortController();
    search(query);
    return () => controller?.abort();
  }, [query]);

  console.log({ isLoading, error, data });

  if (isLoading)
    return (
      <center className="text-3xl font-semibold py-2 text-green-900">
        Loading
      </center>
    );
  if (error)
    return (
      <center className="text-3xl font-semibold py-2 text-rose-900">
        Error Fetching Data
      </center>
    );
  console.count("Rendered Result.tsx");
  return (
    <div className="text-gray-800 p-2 items-center justify-center">
      {data?.icons?.length > 0 && (
        <center className="text-2xl font-semibold my-2">
          Search Results for Query "{query}"
        </center>
      )}
      <div className="flex flex-wrap flex-row gap-1 items-center justify-center">
        {data?.icons?.map((res: string, i: number) => (
          <div
            key={i}
            className="w-20 h-20 p-1 aspect-square bg-amber-200 flex items-center justify-center hover:scale-110 
            transition-transform hover:bg-gray-50 cursor-pointer"
          >
            <Icon icon={res} width={"50px"} onClick={() => transport(res)} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Results;
