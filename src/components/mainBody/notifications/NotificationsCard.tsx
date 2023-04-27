const NotificationsCard = ({ Message }: { Message: string }) => {
  return (
    <div className="NotificationsCard">
      <p>{Message}</p>
    </div>
  );
};

export default NotificationsCard;
