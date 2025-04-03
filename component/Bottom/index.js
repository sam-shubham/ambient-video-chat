import { Mic, Video, PhoneOff, MicOff, VideoOff } from "lucide-react";

const Bottom = (props) => {
  const { muted, playing, toggleAudio, toggleVideo, leaveRoom } = props;

  // Common styles for all control buttons
  const buttonClass =
    "flex items-center justify-center rounded-full p-4 transition-all duration-300 hover:scale-105 cursor-pointer";
  const iconClass = "transition-transform duration-200";

  // Active state for mic and video buttons when turned off
  const inactiveButton = "bg-gray-700 text-white hover:bg-gray-600";
  const activeButton = "bg-red-500 text-white hover:bg-red-600";

  // End call button has its own style
  const endCallButton =
    "bg-red-500 text-white hover:bg-red-600 shadow-lg hover:shadow-red-500/50";

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-6 px-6 py-3 bg-gray-800/90 backdrop-blur-md rounded-full shadow-xl border border-gray-700/50">
      <button
        className={`${buttonClass} ${muted ? activeButton : inactiveButton}`}
        onClick={toggleAudio}
      >
        {muted ? (
          <MicOff className={`${iconClass}`} size={28} />
        ) : (
          <Mic className={`${iconClass}`} size={28} />
        )}
      </button>

      <button
        className={`${buttonClass} ${!playing ? activeButton : inactiveButton}`}
        onClick={toggleVideo}
      >
        {playing ? (
          <Video className={`${iconClass}`} size={28} />
        ) : (
          <VideoOff className={`${iconClass}`} size={28} />
        )}
      </button>

      <button
        className={`${buttonClass} ${endCallButton} animate-pulse hover:animate-none`}
        onClick={leaveRoom}
      >
        <PhoneOff className={`${iconClass}`} size={28} />
      </button>
    </div>
  );
};

export default Bottom;
