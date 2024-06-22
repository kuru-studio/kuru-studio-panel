import { LoadingOutlined } from "@ant-design/icons";

const Loading: React.FunctionComponent = ({ message = "Loading..." }) => {
  return (
    <div className="flex flex-col gap-3 items-center justify-center">
      <div className="animate-spin w-28 h-28 flex items-center justify-center">
        <LoadingOutlined style={{ fontSize: 48, color: "#fff" }} />

      </div>
      <div className="text-white">{message}</div>
    </div>
  );
};

export default Loading;
