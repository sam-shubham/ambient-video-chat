import ReactPlayer from "react-player";
import { Mic, MicOff, UserSquare2 } from "lucide-react";

const Player = (props) => {
  const { url, muted, playing, isActive } = props;

  // Base player container styles
  const containerBaseClasses =
    "relative overflow-hidden rounded-xl transition-all duration-300 shadow-lg";

  // Active player is larger
  const activePlayerClasses = "w-full h-full border-4 border-blue-500";

  // Non-active player is smaller with different border
  const nonActivePlayerClasses =
    "border-2 border-gray-700 hover:border-gray-500";

  // When video is off, show a different background
  const notPlayingClasses = "bg-gray-800 flex items-center justify-center";

  return (
    <div
      className={`${containerBaseClasses} 
        ${isActive ? activePlayerClasses : nonActivePlayerClasses}
        ${!playing ? notPlayingClasses : ""}
      `}
    >
      {playing ? (
        <ReactPlayer
          url={url}
          muted={muted}
          playing={playing}
          width="100%"
          height="100%"
        />
      ) : (
        <div className="flex flex-col items-center justify-center">
          <UserSquare2 className="text-gray-400" size={isActive ? 400 : 150} />
          <p className="mt-2 text-gray-300 text-sm font-medium">Camera Off</p>
        </div>
      )}

      {/* Mic indicator for non-active players */}
      {!isActive && (
        <div className="absolute bottom-3 left-3 p-2 bg-gray-900/80 backdrop-blur-sm rounded-full">
          {muted ? (
            <MicOff className="text-red-500" size={20} />
          ) : (
            <Mic className="text-green-500" size={20} />
          )}
        </div>
      )}

      {/* Optional: Add user name or additional info */}
      {!isActive && (
        <div className="absolute top-3 left-3 py-1 px-2 bg-gray-900/80 backdrop-blur-sm rounded-md text-xs text-white font-medium">
          Participant
        </div>
      )}
    </div>
  );
};

export default Player;
