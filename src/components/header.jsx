const Header = ({ unreadCount, markAllAsRead }) => {
  return (
    <>
      <header className="flex justify-between p-4">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-extrabold md:text-2xl">Notifications</h1>
          {unreadCount > 0 && (
            <span className="rounded-md bg-blue px-3 font-extrabold text-white">
              {unreadCount}
            </span>
          )}
        </div>
        <button
          className="font-medium text-grayishBlue hover:text-blue"
          onClick={markAllAsRead}
        >
          Mark all as read
        </button>
      </header>
    </>
  );
};

export default Header;
