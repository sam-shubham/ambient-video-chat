import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Head from "next/head";

export default function Home() {
  const router = useRouter();
  const [roomId, setRoomId] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const createAndJoin = () => {
    const roomId = uuidv4();
    router.push(`/${roomId}`);
  };

  const joinRoom = () => {
    if (roomId) router.push(`/${roomId}`);
    else {
      alert("Please provide a valid room id");
    }
  };

  return (
    <>
      <Head>
        <title>AmMeet - Video Conferencing App</title>
        <meta name="description" content="Start or join a video meeting" />
      </Head>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }

        .container {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .item-1 {
          animation: fadeIn 0.6s ease-out 0.1s both;
        }
        .item-2 {
          animation: fadeIn 0.6s ease-out 0.2s both;
        }
        .item-3 {
          animation: fadeIn 0.6s ease-out 0.3s both;
        }
        .item-4 {
          animation: fadeIn 0.6s ease-out 0.4s both;
        }

        .btn-hover:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px -5px rgba(59, 130, 246, 0.5);
          transition: all 0.2s ease;
        }

        .btn-hover:active {
          transform: translateY(0);
        }

        .create-btn:hover {
          animation: pulse 2s infinite;
        }
      `}</style>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
        <div
          className={`w-full max-w-md bg-gray-800/80 p-8 rounded-2xl shadow-2xl border border-gray-700 ${
            isLoaded ? "container" : "opacity-0"
          }`}
        >
          <div className="text-center mb-8 item-1">
            <h1 className="text-3xl font-bold text-blue-400">AmMeet</h1>
            <p className="text-gray-300 mt-2">Start or join a video meeting</p>
          </div>

          <div className="space-y-4 item-2">
            <input
              placeholder="Enter Room ID"
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white transition-all"
              value={roomId}
              onChange={(e) => setRoomId(e?.target?.value)}
            />
            <button
              className="mt-3 w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg font-medium shadow-lg transition-all "
              onClick={joinRoom}
            >
              Join Room
            </button>
          </div>

          <div className="flex items-center my-6 item-3">
            <div className="flex-1 h-px bg-gray-600"></div>
            <p className="mx-4 text-gray-400">OR</p>
            <div className="flex-1 h-px bg-gray-600"></div>
          </div>

          <button
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 px-6 rounded-lg font-medium shadow-lg transition-all item-4"
            onClick={createAndJoin}
          >
            Create a new room
          </button>

          <div className="mt-8 text-center text-sm text-gray-400 item-4">
            Secure, easy-to-use video conferencing
          </div>
        </div>
      </div>
    </>
  );
}
