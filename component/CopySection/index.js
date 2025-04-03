import { CopyToClipboard } from "react-copy-to-clipboard";
import { Copy, CheckCircle } from "lucide-react";
import { useState } from "react";

const CopySection = (props) => {
  const { roomId } = props;
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed  left-6 bottom-24 flex flex-col bg-gray-800/90 backdrop-blur-md text-white border border-gray-700/50 rounded-lg p-3 shadow-lg max-w-xs transition-all duration-300 hover:shadow-xl">
      <div className="text-base font-medium flex items-center">
        <span>Room ID</span>
        <span className="ml-2 px-2 py-0.5 bg-blue-600/30 text-blue-400 text-xs rounded-full">
          Share to invite
        </span>
      </div>

      <div className="h-px w-full bg-gray-700 my-2"></div>

      <div className="flex items-center justify-between space-x-2 bg-gray-700/50 rounded-md px-3 py-2">
        <span className="text-sm font-mono text-gray-300 truncate">
          {roomId}
        </span>

        <CopyToClipboard text={roomId} onCopy={handleCopy}>
          <button className="p-1.5 rounded-full hover:bg-gray-600 transition-all duration-200">
            {copied ? (
              <CheckCircle className="text-green-500" size={18} />
            ) : (
              <Copy className="text-blue-400" size={18} />
            )}
          </button>
        </CopyToClipboard>
      </div>
    </div>
  );
};

export default CopySection;
