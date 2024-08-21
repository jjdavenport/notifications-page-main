const Header = ({ unreadCount, markAllAsRead }) => {
  return (
    <>
      <header className="flex justify-between">
        <div className="flex items-center gap-2">
          <h1 className="text-lg font-extrabold">Notifications</h1>
          {unreadCount > 0 && (
            <span className="bg-blue rounded-md px-3 font-medium text-white">
              {unreadCount}
            </span>
          )}
        </div>
        <button className="hover:text-blue font-medium" onClick={markAllAsRead}>
          Mark all as read
        </button>
      </header>
    </>
  );
};

export default Header;
