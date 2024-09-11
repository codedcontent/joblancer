"use client";

import NotificationComponent from "@/components/notification/Notification";
import { createContext, useContext, useState, ReactNode } from "react";

type NotificationType = "success" | "error" | "info";

interface Notification {
  id: number;
  message: string;
  type: NotificationType;
}

interface NotificationContextType {
  notify: (message: string, type: NotificationType) => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(
  undefined
);

export const useNotification = (): NotificationContextType => {
  const context = useContext(NotificationContext);

  if (!context) {
    throw new Error(
      "useNotification must be used within a NotificationProvider"
    );
  }
  return context;
};

export const NotificationProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const notify = (message: string, type: NotificationType) => {
    const id = new Date().getTime();

    setNotifications((prev) => [...prev, { id, message, type }]);

    // Automatically remove the notification after 5 seconds
    setTimeout(() => {
      setNotifications((prev) =>
        prev.filter((notification) => notification.id !== id)
      );
    }, 5000);
  };

  const removeNotification = (id: number) => {
    setNotifications((prev) =>
      prev.filter((notification) => notification.id !== id)
    );
  };

  return (
    <NotificationContext.Provider value={{ notify }}>
      {children}
      {/* Render the Notification Component */}
      <div className="fixed top-4 lg:right-4 right-0 z-50 space-y-4">
        {notifications.map((notification) => (
          <NotificationComponent
            notification={notification}
            removeNotification={removeNotification}
            key={notification.id}
          />
        ))}
      </div>
    </NotificationContext.Provider>
  );
};
