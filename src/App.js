import React, { useState, useEffect } from 'react';
import { Container, AppBar, Toolbar, Typography, Button, Box, Card, CardContent, Chip } from '@mui/material';
import { getPriorityNotifications } from './priorityUtility';
import { registerAndFetchNotifications } from './apiConnection';

function App() {
  const [notifications, setNotifications] = useState([]);
  const [view, setView] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  
    registerAndFetchNotifications()
      .then(data => {
        setNotifications(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const displayedNotifications = view === 'priority' 
    ? getPriorityNotifications(notifications, 10) 
    : notifications;

  return (
    <Box sx={{ flexGrow: 1, bgcolor: '#f5f5f5', minHeight: '100vh', pb: 4 }}>
      <AppBar position="static" sx={{ bgcolor: '#1976d2' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
            Affordmed Live Portal
          </Typography>
          <Button color="inherit" onClick={() => setView('all')}>All Feed</Button>
          <Button color="inherit" onClick={() => setView('priority')}>Priority Inbox</Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#333', fontWeight: '600', mb: 3 }}>
          {view === 'priority' ? '🔥 Priority Inbox' : '📋 Live Campus Feed'}
        </Typography>

        {loading ? (
          <Typography variant="body1" color="textSecondary">Registering application and connecting to server...</Typography>
        ) : displayedNotifications.length === 0 ? (
          <Typography variant="body1" color="textSecondary">No notifications found. Ensure your credentials in apiConnection.js match your registration details.</Typography>
        ) : (
          displayedNotifications.map((notif) => (
            <Card key={notif.ID} sx={{ mb: 2, borderLeft: notif.Type === 'Placement' ? '6px solid #d32f2f' : '6px solid #1976d2' }}>
              <CardContent>
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                  <Chip label={notif.Type} size="small" color={notif.Type === 'Placement' ? 'error' : 'info'} />
                  <Typography variant="caption" color="textSecondary">{notif.Timestamp}</Typography>
                </Box>
                <Typography variant="body1">{notif.Message}</Typography>
              </CardContent>
            </Card>
          ))
        )}
      </Container>
    </Box>
  );
}

export default App;