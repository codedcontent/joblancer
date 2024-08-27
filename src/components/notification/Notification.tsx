import { IoClose } from "react-icons/io5";

type NotificationType = "success" | "error" | "info";

interface Notification {
  id: number;
  message: string;
  type: NotificationType;
}

type Props = {
  notification: Notification;
  removeNotification: (id: number) => void;
};

const Notification = ({ notification, removeNotification }: Props) => {
  return (
    <div
      key={notification.id}
      className={`flex justify-between items-center px-4 py-3 gap-5 lg:max-w-96 max-w-[80%] m-auto rounded-lg text-white ${
        notification.type === "success"
          ? "bg-success"
          : notification.type === "error"
          ? "bg-danger"
          : "bg-info"
      }`}
    >
      <p className={``}>{notification.message}</p>

      <IoClose
        onClick={() => removeNotification(notification.id)}
        className="w-14 font-black cursor-pointer"
      />
    </div>
  );
};

export default Notification;
