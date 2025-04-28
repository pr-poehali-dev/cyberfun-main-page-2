
const SteamIcon = ({ className = "w-4 h-4" }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3a9 9 0 0 0-9 9v.5L7.1 10l.7-1.3L12 7l1-2 1 2 .5 1 3.3.8.2 3.2-3 1.8-1.5-.5-.5-1.5-1.2-.5-4 2 1 2 2 .5 1 1.5-1 2H9a9 9 0 0 0 9-9 9 9 0 0 0-6-8.5z" />
      <circle cx="17" cy="7" r="3" />
      <circle cx="9" cy="15" r="3" />
    </svg>
  );
};

export default SteamIcon;
