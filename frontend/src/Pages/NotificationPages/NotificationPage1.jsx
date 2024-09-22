import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Switch,
  Divider,
  Badge,
  Snackbar,
  Alert,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';

export const NotificationPage1 = () => {
  // Sample notifications data
  const initialNotifications = [
    { id: 1, type: 'Billing Reminder', message: 'Your bill is due on 15th September.', unread: true },
    { id: 2, type: 'Service Update', message: 'Your service has been upgraded.', unread: true },
    { id: 3, type: 'General Alert', message: 'Maintenance scheduled for 20th September.', unread: false },
  ];

  const [notifications, setNotifications] = useState(initialNotifications);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  // Toggling read/unread state
  const handleMarkAsRead = (id) => {
    const updatedNotifications = notifications.map((notification) =>
      notification.id === id ? { ...notification, unread: false } : notification
    );
    setNotifications(updatedNotifications);
    setAlertMessage('Marked as read');
    setShowAlert(true);
  };

  // Deleting a notification
  const handleDelete = (id) => {
    const updatedNotifications = notifications.filter((notification) => notification.id !== id);
    setNotifications(updatedNotifications);
    setAlertMessage('Notification deleted');
    setShowAlert(true);
  };

  // Toggle notification type settings (for the sake of this example)
  const [notificationSettings, setNotificationSettings] = useState({
    billingReminders: true,
    serviceUpdates: true,
    generalAlerts: true,
  });

  const handleToggle = (type) => {
    setNotificationSettings({ ...notificationSettings, [type]: !notificationSettings[type] });
  };

  return (
    <Container sx={{ mt: 4 }}>
      {/* Heading */}
      <Typography variant="h4" sx={{ mb: 4 }}>
        Notifications
      </Typography>

      {/* List of Notifications */}
      <List>
        {notifications.map((notification) => (
          <div key={notification.id}>
            <ListItem>
              <ListItemText
                primary={notification.type}
                secondary={notification.message}
                sx={{ opacity: notification.unread ? 1 : 0.6 }} // Dim read notifications
              />
              <ListItemSecondaryAction>
                {/* Badge for unread notifications */}
                {notification.unread && (
                  <Badge color="primary" badgeContent="Unread">
                    <IconButton onClick={() => handleMarkAsRead(notification.id)}>
                      <MarkEmailReadIcon />
                    </IconButton>
                  </Badge>
                )}
                <IconButton onClick={() => handleDelete(notification.id)} edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
            <Divider />
          </div>
        ))}
      </List>

      {/* Notification Settings */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Notification Settings
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="body1">Billing Reminders</Typography>
          <Switch
            checked={notificationSettings.billingReminders}
            onChange={() => handleToggle('billingReminders')}
            inputProps={{ 'aria-label': 'billing-reminders' }}
          />
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="body1">Service Updates</Typography>
          <Switch
            checked={notificationSettings.serviceUpdates}
            onChange={() => handleToggle('serviceUpdates')}
            inputProps={{ 'aria-label': 'service-updates' }}
          />
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="body1">General Alerts</Typography>
          <Switch
            checked={notificationSettings.generalAlerts}
            onChange={() => handleToggle('generalAlerts')}
            inputProps={{ 'aria-label': 'general-alerts' }}
          />
        </Box>
      </Box>

      {/* Snackbar for success notification */}
      <Snackbar open={showAlert} autoHideDuration={3000} onClose={() => setShowAlert(false)}>
        <Alert onClose={() => setShowAlert(false)} severity="success" sx={{ width: '100%' }}>
          {alertMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};
