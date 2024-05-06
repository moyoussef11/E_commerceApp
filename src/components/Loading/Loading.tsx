import "./loading.css";

interface ILoading {
  error: string | null;
  state: "idle" | "pending" | "succeeded" | "failed";
  children: React.ReactNode;
}

const Loading = ({ error, state, children }: ILoading) => {
  return (
    <>
      {state === "pending" ? (
        <div className="loader"></div>
      ) : state === "failed" ? (
        <div className="w-full">
          <p className="text-red-500 text-2xl font-bold">{error}</p>
          <button
            className="mainBg p-1 rounded-xl text-white"
            onClick={() => location.reload()}
          >
            Refresh
          </button>
        </div>
      ) : state === "succeeded" ? (
        children
      ) : (
        ""
      )}
    </>
  );
};

export default Loading;
