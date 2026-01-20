export const FullScreenLoader = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-gradient-to-br from-purple-200 via-pink-100 to-yellow-100 overflow-hidden">
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes spin-custom {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes pulse-scale {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }
        .loader-spin {
          animation: spin-custom 2s linear infinite;
        }
        .loader-pulse {
          animation: pulse-scale 2s ease-in-out infinite;
        }
        .fade-in-loader {
          animation: fadeIn 0.6s ease-in-out;
        }
      `}</style>

      {/* Decorative blur circles */}
      <div className="absolute top-10 left-10 w-24 h-24 rounded-full bg-purple-300 opacity-50 blur-2xl"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-pink-300 opacity-40 blur-2xl"></div>
      <div className="absolute top-1/2 right-10 w-20 h-20 rounded-full bg-yellow-300 opacity-30 blur-xl"></div>

      {/* Main loader */}
      <div className="fade-in-loader flex flex-col items-center gap-6 z-10">
        {/* Spinning circle with gradient */}
        <div className="relative w-20 h-20 loader-spin">
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-purple-500 border-r-pink-500"></div>
          <div className="absolute inset-2 rounded-full border-4 border-transparent border-b-yellow-400 border-l-purple-300"></div>
        </div>
        {/* Loading text */}
        <div className="text-center">
          <p className="text-lg font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-500 bg-clip-text text-transparent">
            Loading...
          </p>
          <p className="text-5xl text-purple-600 font-semibold mt-1">Baby Market Fighter</p>
        </div>
      </div>
    </div>
  );
};
