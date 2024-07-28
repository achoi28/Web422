// pages/dashboard.js
import ProtectedRoute from '../components/ProtectedRoute';

const Dashboard = () => {
  return (
    <ProtectedRoute>
      <h1>Dashboard</h1>
      <p>Only visible to authenticated users</p>
    </ProtectedRoute>
  );
};

export default Dashboard;
