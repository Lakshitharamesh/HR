

export const registerAndFetchNotifications = async () => {
  try {
    const token = ''; // lost my token

    const notificationsResponse = await fetch('http://4.224.186.213/evaluation-service/notifications', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    if (!notificationsResponse.ok) {
      throw new Error(`Could not fetch secure notifications. Status: ${notificationsResponse.status}`);
    }

    const data = await notificationsResponse.json();
    return data.notifications || [];

  } catch (error) {
    console.error("Connection workflow failed:", error);
    return [];
  }
};
