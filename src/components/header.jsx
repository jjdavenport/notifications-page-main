const Header = ({ unreadCount, markAllAsRead }) => {
  return (
    <>
      <header className="flex justify-between">
        <div className="flex gap-2">
          <h1>Notifications</h1>
          {unreadCount > 0 && <span>{unreadCount}</span>}
        </div>
        <button onClick={markAllAsRead}>Mark all as read</button>
      </header>
    </>
  );
};

export default Header;
